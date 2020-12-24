from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Pasta, Salad, Dessert, Drink


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password')


class PastaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pasta
        fields = ('id', 'name', 'price')


class SaladSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salad
        fields = ('id', 'name', 'price')


class DessertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dessert
        fields = ('id', 'name', 'price')


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ('id', 'name', 'price')
