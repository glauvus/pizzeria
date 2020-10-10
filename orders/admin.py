from django.contrib import admin

from .models import Size, Topping, Pizza

# Register your models here.
admin.site.register(Size)
admin.site.register(Topping)
admin.site.register(Pizza)
