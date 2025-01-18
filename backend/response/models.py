from django.db import models

# Create your models here.

class Responses(models.Model):

    RESPONSE_TYPE = [
        ('PENDING', 'Pending'),
        ('INTERVIEW', 'Interview'),
        ('REJECTION', 'Regection'),
        ('OFFER','Offer')
    ]

    name = models.CharField(max_length=50)
    type = models.CharField(max_length=50, choices=RESPONSE_TYPE, default='PENDING')

    job_application = models.ForeignKey("application.Model", on_delete=models.CASCADE)
    date = models.models.DateField(auto_now=False)
    message = models.TextField(max_length=50)
    communication = models.CharField(max_length=250)

    