from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer, PastaSerializer, SaladSerializer, DessertSerializer, DrinkSerializer, CartSerializer, OrderPastaSerializer
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Pasta, Salad, Dessert, Drink, Cart, Order_pasta


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
Logs the user in utilizing session authentication.
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
    serializer_class = OrderPastaSerializer

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
        return Response(OrderPastaSerializer(order_pasta).data, status=status.HTTP_201_CREATED)
