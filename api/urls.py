from django.urls import path
from .views import UserView, CreateUserView, PastaView, SaladView, DessertView, DrinkView

urlpatterns = [
    path('users', UserView.as_view()),
    path('create-user', CreateUserView.as_view()),
    path('pasta', PastaView.as_view()),
    path('salads', SaladView.as_view()),
    path('desserts', DessertView.as_view()),
    path('drinks', DrinkView.as_view()),
]
