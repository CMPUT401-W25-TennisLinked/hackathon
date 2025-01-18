from rest_framework import serializers
from .models import Responses

class ResponsesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responses
        fields = [
            'id',               
            'name',            
            'type',            
            'job_application',  
            'date',             
            'message',          
            'communication',    
        ]
        read_only_fields = ['id']  

    def validate_date(self, value):
        if value is None:
            raise serializers.ValidationError("Date cannot be null.")
        return value

   
    def validate_type(self, value):
        valid_types = ['PENDING', 'INTERVIEW', 'REJECTION', 'OFFER']
        if value not in valid_types:
            raise serializers.ValidationError(f"Type must be one of: {', '.join(valid_types)}.")
        return value

   
    def validate(self, data):
        if data['type'] == 'INTERVIEW' and not data['communication']:
            raise serializers.ValidationError("Communication details are required for an interview response.")
        return data
