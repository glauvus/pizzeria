from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Size(models.Model):
    price_pct = models.DecimalField(max_digits=3, decimal_places=2)


class Topping(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)


class Pizza_custom(models.Model):
    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    toppings = models.ManyToManyField(Topping, blank=True, related_name="toppings")


class Pizza(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)


class Pasta(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)


class Salad(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)


class Dessert(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)


class Drink(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=4, decimal_places=2)


class Cart(models.Model):
    customer_id = models.ForeignKey(User, on_delete=models.CASCADE)


class Order_pasta(models.Model):
    cart_id = models.ForeignKey(Cart, on_delete=models.CASCADE)
    pasta_id = models.ForeignKey(Pasta, on_delete=models.CASCADE)
    quantity = models.IntegerField()
