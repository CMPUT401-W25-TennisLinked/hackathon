from django.db import models


class Application(models.Model):
    STATUS_CHOICES = [
        ('APPLIED', 'Applied'),
        ('INTERVIEW', 'Interview'),
        ('OFFER', 'Offer'),
        ('REJECTION', 'Rejection'),
    ]

    company_name = models.CharField(max_length=256)
    position = models.CharField(max_length=256)
    date_applied = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=256, choices=STATUS_CHOICES, default='APPLIED')

    def __str__(self):
        return f"Application for {self.position} at {self.company_name}"
