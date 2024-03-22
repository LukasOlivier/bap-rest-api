from django.urls import path
from . import views

urlpatterns = [
    path('schools/', views.SchoolListCreate.as_view(), name='school-list-create'),
    path('students/<int:pk>/', views.StudentRetrieveUpdateDestroy.as_view(), name='student-retrieve-update-destroy'),
    path('users/login', views.UserLogin.as_view(), name='user-login'),
]