from django.urls import path
from .views import *


namespace = "application"

urlpatterns = [
    path('', JobApplicationsView.as_view(), name='job_applications'),
    path('<int:app_id>/', JobApplicationView.as_view(), name='job_application'),
    path('search/', JobApplicationFilterView.as_view(), name='search_job_applications'),
]
