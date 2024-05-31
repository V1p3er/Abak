from django.contrib import admin

from .models import SoilSample

class SoilSampleAdmin(admin.ModelAdmin):
    list_display = ('number', 'point_numb', 'name', 'depth', 'depth_index')
    list_filter = ('name',)
    search_fields = ('name', 'point_numb')
    ordering = ('-number',)

    fieldsets = (
        (None, {'fields': ('number', 'point_numb', 'x', 'y', 'name')}),
        ('Depth', {'fields': ('depth', 'depth_index')}),
        ('Soil Properties', {'fields': ('sand', 'silt', 'clay', 'sp', 'ece', 'ph', 'oc', 'n', 'p', 'k', 'caco3', 'CEC', 'Gravell')}),
    )

admin.site.register(SoilSample, SoilSampleAdmin)