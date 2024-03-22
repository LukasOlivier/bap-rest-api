from django.urls import path
from . import views

urlpatterns = [
    path('schools/', views.SchoolListCreate.as_view(), name='school-list-create'),
    path('schools/<int:pk>/', views.SchoolRetrieveUpdateDestroy.as_view(), name='school-retrieve-update-destroy'),
    path('students/', views.StudentListCreate.as_view(), name='student-list-create'),
    path('students/<int:pk>/', views.StudentRetrieveUpdateDestroy.as_view(), name='student-retrieve-update-destroy'),
    path('users/', views.UserListCreate.as_view(), name='user-list-create'),
    path('users/<int:pk>/', views.UserRetrieveUpdateDestroy.as_view(), name='user-retrieve-update-destroy'),
]