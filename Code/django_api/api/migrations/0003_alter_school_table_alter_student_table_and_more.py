# Generated by Django 5.0.3 on 2024-03-22 08:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_school_options_alter_student_options_and_more'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='school',
            table='Schools',
        ),
        migrations.AlterModelTable(
            name='student',
            table='Students',
        ),
        migrations.AlterModelTable(
            name='user',
            table='Users',
        ),
    ]
