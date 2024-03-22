from django.db import models

# Create your models here.
class School(models.Model):
    name = models.CharField(max_length=200)
    ownerId = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'Schools'

    def __str__(self):
        return self.name


class Student(models.Model):
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    schoolId = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'Students'

    def __str__(self):
        return self.name


class User(models.Model):
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=200)

    class Meta:
        managed = False
        db_table = 'Users'

    def __str__(self):
        return self.email