from django.db import models

# Create your models here.
class userUploads(models.Model):
    destinationName=models.CharField(max_length=20)
    destinationImg=models.ImageField(
        upload_to="user_data/",
        max_length=250,
        null=True,
        default=None
    )
    destinationDesc=models.TextField()