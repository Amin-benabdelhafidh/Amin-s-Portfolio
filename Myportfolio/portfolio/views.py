# This project is developed by Amin Ben Abdelhafidh.............................. 
# Amin's github https://github.com/Amin-benabdelhafidh........................... 
# project's github repository https://github.com/Amin-benabdelhafidh/My-Portfolio 

from django.shortcuts import render
from .models import Project, Photo
from .serializers import PhotoSerializer, ProjectsSerializer

from rest_framework.response import Response
from rest_framework.decorators import api_view


# get 3 Projects
@api_view(['GET'])
def get_projects(request):
    # get all projects data
    projects = Project.objects.all()[0:3]
    project_data = ProjectsSerializer(projects, many=True)
   
    return Response(project_data.data)


# get a specefic project by id
@api_view(['GET'])
def get_project(request, id):
    # get project data
    project = Project.objects.get(pk=id)
    serialiser = ProjectsSerializer(project)
   
    return Response(serialiser.data)


@api_view(['GET'])
def get_all(request):
    projects = Project.objects.all()
    serializer = ProjectsSerializer(projects, many=True)
    
    return Response(serializer.data)
        





