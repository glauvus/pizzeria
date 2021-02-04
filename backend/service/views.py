from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer, PastaSerializer, SaladSerializer, DessertSerializer, DrinkSerializer, CartSerializer, CreateOrderPastaSerializer, CreateOrderSaladSerializer, CreateOrderDessertSerializer, CreateOrderDrinkSerializer, OrderPastaSerializer, OrderSaladSerializer, OrderDessertSerializer, OrderDrinkSerializer
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models.models import Pasta, Salad, Dessert, Drink, Cart, Order_pasta, Order_salad, Order_dessert, Order_drink
from django.http import JsonResponse


""" CreateUserView
Registers the user to the database.
Function set_password is used in order for the password to be saved hashed.
"""
class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = User(username=username)
            user.set_password(password)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


""" LoginUserView
Logs the user in, utilizing session authentication.
Creates a new cart if no pending cart found for that user.
"""
class LoginUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if not serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                uid = request.user.id
                cart = Cart.objects.filter(customer_id=uid, isCheckedOut=False)
                if not cart:
                    CreateCartView.post(self, request=request)
                return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid data'}, status=status.HTTP_403_FORBIDDEN)


class LogoutUserView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        logout(request)
        return Response({'Message': 'Successfully logged out'}, status=status.HTTP_200_OK)


class IsAuthenticatedView(APIView):
    def get(self, request, format=None):
        is_authenticated = request.user.is_authenticated
        return Response({'is_authenticated': is_authenticated}, status=status.HTTP_200_OK)


class PastaView(generics.ListAPIView):
    queryset = Pasta.objects.all()
    serializer_class = PastaSerializer


class SaladView(generics.ListAPIView):
    queryset = Salad.objects.all()
    serializer_class = SaladSerializer


class DessertView(generics.ListAPIView):
    queryset = Dessert.objects.all()
    serializer_class = DessertSerializer


class DrinkView(generics.ListAPIView):
    queryset = Drink.objects.all()
    serializer_class = DrinkSerializer


class CreateCartView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, format=None):
        user = request.user
        cart = Cart()
        cart.customer_id = user
        cart.save()
        return Response(CartSerializer(cart).data, status=status.HTTP_200_OK)


class CreateOrderPastaView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateOrderPastaSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            pasta_id = serializer.data.get('pasta_id')
            quantity = serializer.data.get('quantity')
            uid = request.user.id
            cart = Cart.objects.get(customer_id=uid, isCheckedOut=False)
            pasta = Pasta.objects.get(pk=pasta_id)
            order_pasta = Order_pasta(cart_id=cart, pasta_id=pasta, quantity=quantity)
            order_pasta.save()
        return Response(CreateOrderPastaSerializer(order_pasta).data, status=status.HTTP_201_CREATED)


class CreateOrderSaladView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateOrderSaladSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            salad_id = serializer.data.get('salad_id')
            quantity = serializer.data.get('quantity')
            uid = request.user.id
            cart = Cart.objects.get(customer_id=uid, isCheckedOut=False)
            salad = Salad.objects.get(pk=salad_id)
            order_salad = Order_salad(cart_id=cart, salad_id=salad, quantity=quantity)
            order_salad.save()
        return Response(CreateOrderSaladSerializer(order_salad).data, status=status.HTTP_201_CREATED)


class CreateOrderDessertView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateOrderDessertSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            dessert_id = serializer.data.get('dessert_id')
            quantity = serializer.data.get('quantity')
            uid = request.user.id
            cart = Cart.objects.get(customer_id=uid, isCheckedOut=False)
            dessert = Dessert.objects.get(pk=dessert_id)
            order_dessert = Order_dessert(cart_id=cart, dessert_id=dessert, quantity=quantity)
            order_dessert.save()
        return Response(CreateOrderDessertSerializer(order_dessert).data, status=status.HTTP_201_CREATED)


class CreateOrderDrinkView(CreateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CreateOrderDrinkSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            drink_id = serializer.data.get('drink_id')
            quantity = serializer.data.get('quantity')
            uid = request.user.id
            cart = Cart.objects.get(customer_id=uid, isCheckedOut=False)
            drink = Drink.objects.get(pk=drink_id)
            order_drink = Order_drink(cart_id=cart, drink_id=drink, quantity=quantity)
            order_drink.save()
        return Response(CreateOrderDrinkSerializer(order_drink).data, status=status.HTTP_201_CREATED)


class CartView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        uid = request.user.id
        cart = Cart.objects.get(customer_id=uid, isCheckedOut=False)

        querysetPasta = Order_pasta.objects.filter(cart_id=cart)
        querysetPastaSerialized = OrderPastaSerializer(querysetPasta, many=True).data

        querysetSalads = Order_salad.objects.filter(cart_id=cart)
        querysetSaladsSerialized = OrderSaladSerializer(querysetSalads, many=True).data

        querysetDesserts = Order_dessert.objects.filter(cart_id=cart)
        querysetDessertsSerialized = OrderDessertSerializer(querysetDesserts, many=True).data

        querysetDrinks = Order_drink.objects.filter(cart_id=cart)
        querysetDrinksSerialized = OrderDrinkSerializer(querysetDrinks, many=True).data

        return JsonResponse({'pasta': querysetPastaSerialized, 'salads': querysetSaladsSerialized, 'desserts': querysetDessertsSerialized, 'drinks': querysetDrinksSerialized})
