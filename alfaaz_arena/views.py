from django.shortcuts import render
from django.http import HttpResponse
from placeData.models import destinationData
from signup.models import signUp
import datetime
from django.core.mail import send_mail,EmailMultiAlternatives

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
def signup(request):
    message=''
    if request.method=="POST":
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        username=request.POST.get('username')
        if signUp.objects.filter(username=username).exists():
            message=' already exist'
            return render(request,'signup.html',{'message':message})
        email=request.POST.get('email')
        password=request.POST.get('password')
        if signUp.objects.filter(email=email).exists():
            message='mail already exist'
            return render(request,'signup.html',{'message':message})
        elif not email:
            return HttpResponse('email is required',status=400)
        else:
            current_time = datetime.datetime.now().time()
            subject="Succesfully Registered to our website"
            from_email='alfaazarena@gmail.com'
            msg=f'''Hello <b>{first_name}</b>,<br>
                    Welcome to Alfaaz Arena! 🎊<br>
                    We’re thrilled to have you join our community where creativity meets expression.<br>
                    Your account has been successfully created, and you can now log in anytime to explore, share, and connect with like-minded people.<br>

                    Start your journey by visiting our homepage and discovering amazing content tailored just for you.<br>

                    If you have any questions, feel free to reach out to our support team.<br>

                    Once again, welcome aboard!<br>

                    Warm regards,<br>
                    At {current_time}<br>
                    The Alfaaz Arena Team'''
            to=email
            msg=EmailMultiAlternatives(subject,msg,from_email,[to])
            msg.content_subtype='html'
            msg.send()
            signUp_Data=signUp(first_name=first_name,last_name=last_name,username=username,email=email,password=password)
            signUp_Data.save()
            message='sign up succesfully'
            return render(request,'signup.html',{'message':message})
    
    
    return render(request,'signup.html',{'message':message})
def login(request):
    message=''
    if request.method=="POST":
        username=request.POST.get('username')
        password=request.POST.get('password')
        user_ka_naam=signUp.objects.get(username=username)
        if user_ka_naam.password==password:
            message='login succesful'
            return render(request,'home.html',{'message':message})
        else:
            message='user does not exist or incorrect password'
    return render(request,'login.html',{'message':message})

def about(request):
    return render(request,'about.html')