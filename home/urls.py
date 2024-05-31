from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='homepage'),
    path('start/', views.start, name='start'),
]
