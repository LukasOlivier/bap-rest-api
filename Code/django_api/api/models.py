from django.db import models

# Create your models here.
class School(models.Model):
    name = models.CharField(max_length=200)
    ownerId = models.IntegerField()

    def __str__(self):
        return self.name


class Student(models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    schoolId = models.IntegerField()

    def __str__(self):
        return self.name


class User(models.Model):
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    def __str__(self):
        return self.email