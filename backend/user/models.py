from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.Charfield(max_length=50)
    email = models.EmailField(max_length=254)
    phone = models.Charfield(max_length=12)
    city = models.Charfield(max_length=50)
    country = models.Charfield(max_length=50)

class Notifs(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name = "notifications")
    message = models.CharField(max_length=50)
    read = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now=False)
