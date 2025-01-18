from django.db import models

# Create your models here.


class MainResume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="resumes")
    content = models.JSONField(default=dict)

class UpdateResume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="resumes")
    version = models.CharField(max_length=50, default="Default") #'Data Jobs', 'Software Jobs', etc
    content = models.JSONField(default=dict)