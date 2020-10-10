from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse


# Create your views here.
def index(request):
    if request.user.is_authenticated:
        return render(request, "orders/index.html", context={"user": request.user})
    return render(request, "orders/index.html", context={"user": None})


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
    return render(request, "orders/register.html", context={"user": None})
