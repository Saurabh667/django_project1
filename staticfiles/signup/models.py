from django.db import models

# Create your models here.
class signUp(models.Model):
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=20)
    username=models.CharField(max_length=10)
    email=models.EmailField(max_length=30)
    password=models.CharField( max_length=50,default='1234')