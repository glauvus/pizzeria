from rest_framework import serializers
from django.contrib.auth.models import User
from .models.models import Pasta, Salad, Dessert, Drink, Cart, Order_pasta, Order_salad, Order_dessert, Order_drink


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


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id', 'customer_id', 'isCheckedOut')


class CreateOrderPastaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_pasta
        fields = ('pasta_id', 'quantity')


class CreateOrderSaladSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_salad
        fields = ('salad_id', 'quantity')


class CreateOrderDessertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_dessert
        fields = ('dessert_id', 'quantity')


class CreateOrderDrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order_drink
        fields = ('drink_id', 'quantity')


class OrderPastaSerializer(serializers.ModelSerializer):
    pasta_id = PastaSerializer(read_only=True)

    class Meta:
        model = Order_pasta
        fields = '__all__'


class OrderSaladSerializer(serializers.ModelSerializer):
    salad_id = SaladSerializer(read_only=True)

    class Meta:
        model = Order_salad
        fields = '__all__'


class OrderDessertSerializer(serializers.ModelSerializer):
    dessert_id = DessertSerializer(read_only=True)

    class Meta:
        model = Order_dessert
        fields = '__all__'


class OrderDrinkSerializer(serializers.ModelSerializer):
    drink_id = DrinkSerializer(read_only=True)

    class Meta:
        model = Order_drink
        fields = '__all__'
