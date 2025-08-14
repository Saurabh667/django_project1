from django.contrib import admin
from placeData.models import destinationData

# Register your models here.
class destinationInput(admin.ModelAdmin):
    list_display=('placeName','placeDesc','placeImg')

admin.site.register(destinationData,destinationInput)