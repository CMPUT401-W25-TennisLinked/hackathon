from django.db import models

# Create your models here.

class job_profile(models.Model):
    title = models.CharField(max_length=200)
    company_name = models.CharField(max_length=255)
    description  = models.TextField()
    opening_date = models.DateField()
    closing_date = models.DateField()
    




