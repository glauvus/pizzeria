from django.urls import path
from .views import CreateUserView, LoginUserView, LogoutUserView, PastaView, SaladView, DessertView, DrinkView, CreateCartView, CreateOrderPastaView

urlpatterns = [
    path('users/create', CreateUserView.as_view()),
    path('login', LoginUserView.as_view()),
    path('logout', LogoutUserView.as_view()),
    path('pasta', PastaView.as_view()),
    path('salads', SaladView.as_view()),
    path('desserts', DessertView.as_view()),
    path('drinks', DrinkView.as_view()),
    path('carts/create', CreateCartView.as_view()),
    path('orders/create/pasta', CreateOrderPastaView.as_view()),
]
