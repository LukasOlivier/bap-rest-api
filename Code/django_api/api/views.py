from rest_framework import generics
from .models import School, Student, ApiUser
from django.contrib.auth.models import User
from .serializers import SchoolSerializer, StudentSerializer, UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
# Create your views here.

class SchoolListCreate(generics.ListCreateAPIView):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer

class StudentListCreate(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class UserLogin(generics.GenericAPIView):
    serializer_class = UserSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = ApiUser.objects.filter(email=email, password=password).first() if email and password else None
        if user:
            # Map your ApiUser instance to a User instance
            django_user, created = User.objects.get_or_create(username=user.email, email=user.email)
            token, token_created = Token.objects.get_or_create(user=django_user)
            return Response({'message': 'User authenticated successfully', 'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)