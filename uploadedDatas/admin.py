from django.contrib import admin
from uploadedDatas.models import userUploads

# Register your models here.
class userUploadsDisplay(admin.ModelAdmin):
    list_display = ('destinationName','destinationImg','destinationDesc')

admin.site.register(userUploads,userUploadsDisplay)