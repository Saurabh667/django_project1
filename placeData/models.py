from django.db import models
from tinymce.models import HTMLField

# Create your models here.
class destinationData(models.Model):
    placeName=models.CharField(max_length=20)
    placeDesc=models.TextField()
    placeImg= models.ImageField(
        upload_to="user_data/",
        max_length=250,
        null=True,
        default=None
    )