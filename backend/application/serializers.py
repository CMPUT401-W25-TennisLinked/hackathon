from rest_framework import serializers
from .models import Application

class ApplicationSerializer(serializers.ModelSerializer):
    companyName = serializers.CharField(source='company_name')
    dateApplied = serializers.DateTimeField(source='date_applied')

    class Meta:
        model = Application
        fields = ['id', 'companyName', 'position', 'dateApplied', 'status']
