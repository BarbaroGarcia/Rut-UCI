from rest_framework import serializers
from . import models

class Registro_de_ConsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Registro_de_Consumo
        fields = '__all__'
        
class RutaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Ruta
        fields = '__all__'
        
class Solicitud_de_CombustibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Solicitud_de_Combustible
        fields = '__all__'
        
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Usuario
        fields = '__all__'
        
class ParadaSerializer(serializers.ModelSerializer):    
    class Meta:
        model = models.Parada
        fields = '__all__'                                