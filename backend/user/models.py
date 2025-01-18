from django.db import models

# Create your models here.

class Profile(models.Model):
    name = models.Charfield(max_length=50)
    email = models.EmailField(max_length=254)
    phone = models.Charfield(max_length=50)
    name = models.Charfield(max_length=50)
    name = models.Charfield(max_length=50)