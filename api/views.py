from rest_framework import generics, status
from .serializers import UserSerializer, CreateUserSerializer, PastaSerializer, SaladSerializer, DessertSerializer, DrinkSerializer
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pasta, Salad, Dessert, Drink


# Create your views here.
class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = User(username=username, password=password)
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


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
