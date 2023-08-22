from django.urls import path
from .views import get_projects, get_project, get_all

urlpatterns = [
    path('projects', get_projects, name='projects'),
    path('projects/<int:id>', get_project, name='projects'),
    path('all_projects', get_all, name='all')
]