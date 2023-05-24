from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from Controlador_Principal import views

#genera las urls para los CRUD
router1 = routers.DefaultRouter()
router1.register(r'registro_de_ronsumo', views.Registro_de_ConsumoView, 'Registro_de_Consumo')

router2 = routers.DefaultRouter()
router2.register(r'ruta', views.RutaView, 'Ruta')

router3 = routers.DefaultRouter()
router3.register(r'solicitud_de_combustible', views.Solicitud_de_CombustibleView, 'Solicitud_de_Combustible')

router4 = routers.DefaultRouter()
router4.register(r'usuario', views.UsuarioView, 'Usuario')

router5 = routers.DefaultRouter()
router5.register(r'parada', views.ParadaView, 'Parada')


#registrar las urls

urlpatterns = [
    path('', include(router1.urls)),
    path('', include(router2.urls)),
    path('', include(router3.urls)),
    path('', include(router4.urls)),
    path('', include(router5.urls)),
    path('documentacion/', include_docs_urls("PW API"))
]
