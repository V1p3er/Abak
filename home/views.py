from django.shortcuts import render
from.models import SoilSample
from django.db.models import Q
from django.db.models import F


def start(request):
    soil_samples = SoilSample.objects.all()
    area_names = request.GET.getlist('area-names')
    parameters = request.GET.getlist('parameters')

    if area_names:
        soil_samples = soil_samples.filter(name__in=area_names)

    if parameters:
        for param in parameters:
            if param == 'caco3':
                soil_samples = soil_samples.filter(caco3__isnull=False)
            elif param == 'CEC':
                soil_samples = soil_samples.filter(CEC__isnull=False)
            elif param == 'ece':
                soil_samples = soil_samples.filter(ece__isnull=False)
            elif param == 'ph':
                soil_samples = soil_samples.filter(ph__isnull=False)

    # If no parameters are selected, show all parameters
    if not parameters:
        soil_samples = soil_samples.all()
    else:
        # Select only the columns that are specified in the parameters
        soil_samples = soil_samples.values(*parameters)

    return render(request, 'home/start/start.html', {'soil_samples': soil_samples})

def home(request):
    return render(request, 'home/abak.html')