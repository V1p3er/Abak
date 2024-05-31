from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('sign-up/', views.signup, name='sign-up'),
]
