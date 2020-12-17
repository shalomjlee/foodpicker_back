from django.shortcuts import render

# Create your views here.
from .models import Restaurant
from rest_framework import permissions, generics, status, viewsets
from django.contrib.auth import login
from django.shortcuts import render
from rest_framework.response import Response
from .serializers import RestaurantSerializer
import random


#Restaurant viewset - CRUD without explicity calling methods for functionality

class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = RestaurantSerializer


def pick_random_category():
    # category = Restaurant.objects.values_list('category', flat=True).order_by('category')
    return random.randrange(1, Restaurant.objects.all().count() + 1)
def pick_random_price():
    # price = Restaurant.objects.values_list('price', flat=True).order_by('price')
    return random.randrange(1, Restaurant.objects.all().count() + 1)


class RandomByCategory(generics.ListAPIView):

    serializer_class = RestaurantSerializer
    def get_queryset(self):
        category = self.kwargs["category"]
        return Restaurant.objects.filter(category=category).order_by('category', '?')

class RandomByPrice(generics.ListAPIView):
    serializer_class = RestaurantSerializer
    def get_queryset(self):
        price = self.kwargs["price"]
        # return Restaurant.objects.order_by('price', '?')
        return Restaurant.objects.filter(price=price).order_by('price', '?')