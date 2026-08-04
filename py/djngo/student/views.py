from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse

from .models import Student


def home(request):
    students = Student.objects.all().order_by('name')
    return render(request, 'student/frontend.html', {'students': students})


def about(request):
    return HttpResponse("About Me")


def std_list(request):
    students = Student.objects.all().order_by('name')
    return render(request, 'student/frontend.html', {'students': students})


def std_detail(request, std_id):
    student = Student.objects.all().order_by('id');
    for balak in student:
        if balak.id == std_id:
            student = balak
            break
        
    return render(request, 'student/student_detail.html', {'student': student})

