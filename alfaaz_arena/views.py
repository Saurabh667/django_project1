from django.shortcuts import render
from django.http import HttpResponse
from placeData.models import destinationData

def home(request):
    destination=destinationData.objects.all()
    destinations={
        'destination':destination,
    }
    return render(request,'home.html',destinations)
def login(request):
    return render(request,'login.html')