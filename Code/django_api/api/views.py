from rest_framework import generics
from .models import School, Student, ApiUser
from django.contrib.auth.models import User
from .serializers import SchoolSerializer, StudentSerializer, UserSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

class SchoolByUser(generics.ListAPIView):
    serializer_class = SchoolSerializer
    
    def get(self, request):
        user = get_user_from_request(request)
        if user:
            schools = School.objects.filter(ownerId=user.id)
            serializer = SchoolSerializer(schools, many=True)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

class StudentBySchool(generics.ListAPIView):
    serializer_class = StudentSerializer 
    def get(self, request, school_id):
        user = get_user_from_request(request)
        if user:
            school = School.objects.filter(id=school_id, ownerId=user.id).first()
            if school:  
                students = Student.objects.filter(schoolId=school_id)
                serializer = StudentSerializer(students, many=True)
                return Response(serializer.data)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)       

class UserLogin(generics.GenericAPIView):
    serializer_class = UserSerializer
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = ApiUser.objects.filter(email=email, password=password).first() if email and password else None
        if user:
            django_user, created = User.objects.get_or_create(username=user.email, email=user.email)
            token, token_created = Token.objects.get_or_create(user=django_user)
            return Response({'message': 'User authenticated successfully', 'token': token.key}, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        
def get_user_from_request(request):
    token_header = request.META.get('HTTP_AUTHORIZATION', "").split()
    if len(token_header) != 2:
        return None
    token = token_header[1]
    token_obj = Token.objects.filter(key=token).first()
    return token_obj.user if token_obj else None

class StudentListCreate(generics.ListAPIView):
    serializer_class = StudentSerializer
    def get(self, request):
        students = Student.objects.filter(schoolId=None)
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentDelete(generics.GenericAPIView):
    def delete(self, request, student_id):
        student = Student.objects.filter(id=student_id).first()
        if student:
            student.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

# enroll student into school, only possible if the student is not already enrolled and you are the owner of the school
class StudentEnroll(generics.GenericAPIView):
    def post(self, request, student_id, school_id):
        user = get_user_from_request(request)
        if user:
            school = School.objects.filter(id=school_id, ownerId=user.id).first()
            student = Student.objects.filter(id=student_id, schoolId=None).first()
            if school and student:
                student.schoolId = school_id
                student.save()
                return Response(status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)

class StudentWithdraw(generics.GenericAPIView):
    def post(self, request, student_id, school_id):
        user = get_user_from_request(request)
        if user:
            school = School.objects.filter(id=school_id, ownerId=user.id).first()
            student = Student.objects.filter(id=student_id).first()
            print(school_id)
            print(student_id)
            if school == None:
                return Response('school not found or not your school', status=status.HTTP_404_NOT_FOUND)
            if student == None:
                return Response('student not found or not in the school', status=status.HTTP_404_NOT_FOUND)      
            if school and student:
                student.schoolId = None
                student.save()
                return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        