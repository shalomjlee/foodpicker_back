from rest_framework import routers
from .api import RestaurantViewSet

router = routers.DefaultRouter()
router.register('api/restaurant', RestaurantViewSet, 'restaurant')

urlpatterns = router.urls