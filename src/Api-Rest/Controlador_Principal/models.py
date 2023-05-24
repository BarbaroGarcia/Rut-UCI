from django.db import models 
   
class Usuario (models.Model):
    ROL_ADMINISTRADOR = 'administrador'
    ROL_CHOFER = 'chofer'
    
    ROLES_CHOICES=[
        (ROL_ADMINISTRADOR, 'Administrador'),
        (ROL_CHOFER, 'Chofer'),
    ]
    
    nombre=models.CharField(max_length=50)
    contraseña=models.CharField(max_length=20)
    rol=models.CharField(max_length=30, choices=ROLES_CHOICES)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name='usuario'
        verbose_name_plural='usuarios'
    
    def perfil(self):
        if self.rol == self.ROL_ADMINISTRADOR:
            print("Bienvenido, administrador!")
        elif self.rol == self.ROL_CHOFER:
            print("Bienvenido, chofer!")
        else:
            return None    
    
    def __str__(self):
        return self.nombre    
    
class Parada (models.Model):
    titulo=models.CharField(max_length=50)  
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name='parada'
        verbose_name_plural='paradas'
        
    def __str__(self):
        return self.titulo
        
class Ruta (models.Model):
    titulo=models.CharField(max_length=50)
    lugar_salida=models.CharField(max_length=50, verbose_name='lugar de salida')
    hora_salida=models.TimeField(auto_now=False, auto_now_add=False, verbose_name='hora de salida')
    chofer=models.OneToOneField(Usuario,
        limit_choices_to={'rol': Usuario.ROL_CHOFER},
        on_delete=models.DO_NOTHING)
    paradas=models.ManyToManyField(Parada)
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name='ruta'
        verbose_name_plural='rutas'
        
    def __str__(self):
        return self.titulo    
    
class Registro_de_Consumo (models.Model):
    ruta=models.ForeignKey(Ruta, on_delete=models.CASCADE)    
    consumo=models.IntegerField()
    fecha=models.DateField()
    created=models.DateTimeField(auto_now_add=True)
    updated=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name='registro de consumo'
        verbose_name_plural='registros de consumo'
        
class Solicitud_de_Combustible (models.Model):
    cantidad_solicitada=models.IntegerField(verbose_name='cantidad solicitada')
    fecha_de_entrega=models.DateField(verbose_name='fecha de entrega')        
    
    class Meta:
        verbose_name='solicitud de combustible'
        verbose_name_plural='solicitudes de combustible'