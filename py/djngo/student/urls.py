from django.urls import path

from .import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('about/', views.about, name = 'about'),
    path('student/', views.std_list, name = 'std_list'),
    path('students/<int:std_id>/', views.std_detail, name = 'std_detail')
]