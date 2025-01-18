from django.db import models


class Application(models.Model):
    STATUS_CHOICES = [
        ('P', 'Pending'),
        ('A', 'Accepted'),
        ('R', 'Rejected'),
    ]

    company_name = models.CharField(max_length=256)
    position = models.CharField(max_length=256)
    date_applied = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=256, choices=STATUS_CHOICES, default='P')

    def __str__(self):
        return f"Application for {self.position} at {self.company_name}"
