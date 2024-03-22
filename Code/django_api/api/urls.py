from django.urls import path
from . import views

urlpatterns = [
    path('schools/', views.SchoolByUser.as_view(), name='school-by-user'),
    path('schools/<int:school_id>/students', views.StudentBySchool.as_view(), name='student-by-school'),
    path('users/login', views.UserLogin.as_view(), name='user-login'),
    path('students', views.StudentListCreate.as_view(), name='student-list-create'),
    path('students/<int:student_id>', views.StudentDelete.as_view(), name='student-delete'),
    path('students/<int:student_id>/enroll/<int:school_id>', views.StudentEnroll.as_view(), name='student-enroll'),
    path('students/<int:student_id>/withdraw/<int:school_id>', views.StudentWithdraw.as_view(), name='student-withdraw'),
]