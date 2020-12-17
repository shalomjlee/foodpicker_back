from django.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=100, unique=True)
    category = models.CharField(max_length=100, blank=True)
    price = models.PositiveIntegerField()
    address = models.CharField(max_length=250, blank=True)

    def __str__(self):
        return self.name

