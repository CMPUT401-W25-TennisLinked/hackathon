from django.views.generic import View
from django.http import JsonResponse
from .models import Application
from .serializers import ApplicationSerializer


# Create your views here.
class JobApplicationView(View):

    def get(self, request):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return JsonResponse({'applications': serializer.data})
