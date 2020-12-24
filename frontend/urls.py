from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('register', index),
    path('menu/<str:category>', index),
]
