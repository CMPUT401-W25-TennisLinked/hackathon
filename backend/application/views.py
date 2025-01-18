from django.views.generic import View
from django.http import JsonResponse
from .models import Application
from .serializers import ApplicationSerializer
from django.shortcuts import get_object_or_404


# Create your views here.
class JobApplicationsView(View):

    def get(self, request):
        applications = Application.objects.all()
        serializer = ApplicationSerializer(applications, many=True)
        return JsonResponse({'applications': serializer.data})


class JobApplicationFilterView(View):

    def get(self, request):
        # TODO: get search params from request
        applications = Application.objects.filter()
        serializer = ApplicationSerializer(applications, many=True)
        return JsonResponse({'applications': serializer.data})


class JobApplicationView(View):

    def get(self, request, app_id):
        application = get_object_or_404(Application, pk=app_id)
        serializer = ApplicationSerializer(application)
        return JsonResponse({'application': serializer.data})
    
    def put(self, request, app_id):
        application = get_object_or_404(Application, pk=app_id)
        data = request.POST
        serializer = ApplicationSerializer(application, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'application': serializer.data})
        return JsonResponse({'errors': serializer.errors}, status=400)
