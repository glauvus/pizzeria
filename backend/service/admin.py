from django.contrib import admin
from .models import Size, Topping, Pizza, Pasta, Salad, Dessert, Drink, Cart, Order_pasta, Order_salad, Order_dessert, Order_drink


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
admin.site.register(Order_salad)
admin.site.register(Order_dessert)
admin.site.register(Order_drink)
