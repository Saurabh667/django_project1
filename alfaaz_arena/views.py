from django.shortcuts import render
from django.http import HttpResponse
from placeData.models import destinationData

def home(request):
    destination=destinationData.objects.all()
    if request.method=="GET":
        st=request.GET.get('placename')
        if st != None:
            destination=destinationData.objects.filter(placeName__icontains=st)
    destinations={
        'destination':destination,
    }
    return render(request,'home.html',destinations)
def login(request):
    return render(request,'login.html')
def signup(request):
    return render(request,'signup.html')
def about(request):
    return render(request,'about.html')
def botpage(request):
    return render(request,'botpage.html')