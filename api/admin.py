from django.contrib import admin
from .models import Size, Topping, Pizza, Pasta, Salad, Dessert, Drink, Cart, Order_pasta

# Register your models here.
admin.site.register(Size)
admin.site.register(Topping)
admin.site.register(Pizza)
admin.site.register(Pasta)
admin.site.register(Salad)
admin.site.register(Dessert)
admin.site.register(Drink)
admin.site.register(Cart)
admin.site.register(Order_pasta)