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
        keyword = request.GET.get('keyword')
        date = request.GET.get('date')
        status = request.GET.get('status')

        results = Application.objects.all()
        
        if keyword:
            results = Application.objects.filter(company_name__icontains=keyword) | Application.objects.filter(position__icontains=keyword)
        else:
            results = Application.objects.all()

            if date:
                results = results.filter(date_applied__date=date)   # TODO: date filtering
            
            if status:
                results = results.filter(status=status)
        
        serializer = ApplicationSerializer(results, many=True)
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
