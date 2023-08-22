from rest_framework import serializers
from .models import Photo, Project

class ProjectsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = (
            'id',
            'title',
            'description',
            'imgUrl'
        )

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = (
            'id',
        )

