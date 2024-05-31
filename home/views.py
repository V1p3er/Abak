from django.shortcuts import render

def home(request):
    return render(request, 'home/abak.html')
def start(request):
    return render(request, 'home/start/start.html')