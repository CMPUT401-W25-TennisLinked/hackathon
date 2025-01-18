from django.urls import path, include
from .views import JobApplicationView


namespace = "application"

urlpatterns = [
    path('', JobApplicationView.as_view(), name='job_application'),
]
