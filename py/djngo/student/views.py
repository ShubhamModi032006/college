from django.shortcuts import render

from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>hello world</h1>")


def about(request):
    return HttpResponse("About Me")

students = ["nothing", "nothing", "nothing"]

def std_list(request):
    result = "<h1> std list </h1>"
    result += "<ul>"

    for idx, std in enumerate(students):
        result += f'<li>{idx} : {std}</li>'

    result += "</ul>"
    return HttpResponse(result)


def std_detail(request, std_id):
    if 0 <= std_id < len(students) :
        name = students[std_id]
        return HttpResponse(f"<h1> student detail : </h1> <p> ID: {std_id} || name : {name}</p>")
    else: 
        return HttpResponse("<h1>ERORR STD NOT FOUND</h1>", status = 404)    
