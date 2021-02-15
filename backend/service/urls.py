from django.urls import path
from .views import CartView, CreateUserView, LoginUserView, LogoutUserView, IsAuthenticatedView, ToppingView, PizzaView, CreatePizzaView, PastaView, SaladView, DessertView, DrinkView, CreateCartView, CreateOrderPizzaView, CreateOrderPastaView, CreateOrderSaladView, CreateOrderDessertView, CreateOrderDrinkView, CheckoutView

urlpatterns = [
    path('users/create', CreateUserView.as_view()),
    path('login', LoginUserView.as_view()),
    path('logout', LogoutUserView.as_view()),
    path('is-authenticated', IsAuthenticatedView.as_view()),
    path('toppings', ToppingView.as_view()),
    path('pizzas', PizzaView.as_view()),
    path('pasta', PastaView.as_view()),
    path('salads', SaladView.as_view()),
    path('desserts', DessertView.as_view()),
    path('drinks', DrinkView.as_view()),
    path('pizzas/create', CreatePizzaView.as_view()),
    path('carts/create', CreateCartView.as_view()),
    path('orders/create/pizzas', CreateOrderPizzaView.as_view()),
    path('orders/create/pasta', CreateOrderPastaView.as_view()),
    path('orders/create/salads', CreateOrderSaladView.as_view()),
    path('orders/create/desserts', CreateOrderDessertView.as_view()),
    path('orders/create/drinks', CreateOrderDrinkView.as_view()),
    path('cart', CartView.as_view()),
    path('checkout', CheckoutView.as_view()),
]
