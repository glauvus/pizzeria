from django.db import models


# Create your models here.
class Size(models.Model):
    price_pct = models.DecimalField(max_digits=3, decimal_places=2)


class Topping(models.Model):
    name = models.CharField(max_length=30)
    price = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)


class Pizza(models.Model):
    size = models.ForeignKey(Size, on_delete=models.CASCADE)
    toppings = models.ManyToManyField(Topping, blank=True, related_name="toppings")


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
