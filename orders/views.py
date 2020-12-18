from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from .forms import RegisterForm
from django.http import HttpResponseRedirect
from django.http.response import JsonResponse
from django.urls import reverse
from .models import Pasta, Salad, Dessert, Drink, Order_pasta, Cart


# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return render(request, "orders/index.html", {"user": request.user})
    return render(request, "orders/index.html")


def login_view(request):
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    return HttpResponseRedirect(reverse("index"))


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register_view(request):
    form = RegisterForm(request.POST)
    if form.is_valid():
        form.save()
        return HttpResponseRedirect(reverse("index"))
    return render(request, "orders/register.html", {"form": RegisterForm()})


def menu_view(request, menu_cat):
    if menu_cat == 'pasta':
        items = Pasta.objects.all()
    elif menu_cat == 'salads':
        items = Salad.objects.all()
    elif menu_cat == 'desserts':
        items = Dessert.objects.all()
    elif menu_cat == 'drinks':
        items = Drink.objects.all()
    else:
        return HttpResponseRedirect(reverse("index"))
    return render(request, "orders/menu.html", {"items": items, "menu_cat": menu_cat})


def cart_view(request):
    if request.user.is_authenticated:
        return render(request, "orders/cart.html", {"user": request.user})
    return render(request, "orders/register.html", {"form": RegisterForm()})


def addToCart_view(request, item_id):
    cart = Cart.objects.get(pk=1)
    pasta = Pasta.objects.get(pk=item_id)
    item = Order_pasta(cart_id=cart, pasta_id=pasta, quantity=1)
    item.save()
    return JsonResponse({'id': pasta.id, 'name': pasta.name}, status=201)
