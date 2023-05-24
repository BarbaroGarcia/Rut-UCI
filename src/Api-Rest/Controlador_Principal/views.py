from rest_framework import viewsets
from . import serializer
from . import decorators
from . import models

class Registro_de_ConsumoView(viewsets.ModelViewSet):
    serializer_class = serializer.Registro_de_ConsumoSerializer
    queryset = models.Registro_de_Consumo.objects.all()
    
class RutaView(viewsets.ModelViewSet):
    serializer_class = serializer.RutaSerializer
    queryset = models.Ruta.objects.all()    

class Solicitud_de_CombustibleView(viewsets.ModelViewSet):
    serializer_class = serializer.Solicitud_de_CombustibleSerializer
    queryset = models.Solicitud_de_Combustible.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = serializer.UsuarioSerializer
    queryset = models.Usuario.objects.all()

class ParadaView(viewsets.ModelViewSet):
    serializer_class = serializer.ParadaSerializer
    queryset = models.Parada.objects.all()




































""" from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
@chofer_required
def Registrar_Consumo(request):
    if request.method == 'POST':
        
        fecha = request.POST.get('fecha')
        consumo = request.POST.get('consumo')
        ruta = request.POST.get('ruta')

        registro_de_consumo = Registro_de_Consumo(fecha=fecha, consumo=consumo, ruta=ruta )
        registro_de_consumo.save()
        
        return redirect('registro_de_consumo_creado.html')
    
    return render(request, 'registro_de_consumo.html')

@administrador_required
def crear_usuario(request):
    if request.method == 'POST':
        
        nombre = request.POST.get('nombre')
        contraseña = request.POST.get('contraseña')
        rol = request.POST.get('rol')
        
        nuevo_usuario = Usuario(nombre=nombre, rol=rol)
        nuevo_usuario.set_password(contraseña)
        nuevo_usuario.save()
        
        return redirect('usuario_creado.html')
    
    return render(request, 'crear_usuario.html')

@administrador_required
def eliminar_usuario(request):
    if request.method == 'POST':
        nombre = request.POST.get('nombre')
        usuario_a_eliminar = get_object_or_404(Usuario, nombre=nombre)
        usuario_a_eliminar.delete()
        
        return redirect('usuario_eliminado')
    
    return render(request, 'eliminar_usuario.html') """