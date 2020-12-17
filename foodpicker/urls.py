from rest_framework import routers
from .views import RestaurantViewSet
# RandomByCategory, RandomByPrice
from django.urls import path, include
from . import views

router = routers.DefaultRouter()

router.register(r'api/restaurants', RestaurantViewSet, basename='restaurants')

# urlpatterns = router.urls

urlpatterns = [path('', include(router.urls)),

path('api/category/<str:category>', views.RandomByCategory.as_view()),
path('api/price/<int:price>', views.RandomByPrice.as_view())

]

# router.register('api/restaurants/category/:category', RandomByCategory, 'categorys' )
# router.register('api/restaurants/price/:price', RandomByPrice, 'prices')



# urlpatterns.append(path('api/restaurants/category/<str:category>', views.RandomByCategory.as_view(), name='category'))



    


# urlpatterns += path('api/restaurants/price/<int:price>', views.RandomByPrice.as_view(), name='price')
