from rest_framework import serializers
from .models import School, Student, ApiUser

class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = ['name', 'ownerId']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'age', 'email', 'phone', 'schoolId']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApiUser
        fields = ['email', 'password']