from django.contrib import admin
from . import models

admin.site.register(models.Usuario)
admin.site.register(models.Ruta)
admin.site.register(models.Registro_de_Consumo)
admin.site.register(models.Solicitud_de_Combustible)
admin.site.register(models.Parada)


