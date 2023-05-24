# Generated by Django 4.1.7 on 2023-04-21 04:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Parada',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=50)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'parada',
                'verbose_name_plural': 'paradas',
            },
        ),
        migrations.CreateModel(
            name='Solicitud_de_Combustible',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cantidad_solicitada', models.IntegerField(verbose_name='cantidad solicitada')),
                ('fecha_de_entrega', models.TimeField(verbose_name='fecha de entrega')),
            ],
            options={
                'verbose_name': 'solicitud de combustible',
                'verbose_name_plural': 'solicitudes de combustible',
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('contraseña', models.CharField(max_length=20)),
                ('rol', models.CharField(choices=[('administrador', 'Administrador'), ('chofer', 'Chofer')], max_length=30)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'usuario',
                'verbose_name_plural': 'usuarios',
            },
        ),
        migrations.CreateModel(
            name='UsuarioChofer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Controlador_Principal.usuario')),
            ],
            options={
                'verbose_name': 'usuario chofer',
                'verbose_name_plural': 'usuarios choferes',
            },
        ),
        migrations.CreateModel(
            name='UsuarioAdministrador',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usuario', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Controlador_Principal.usuario')),
            ],
            options={
                'verbose_name': 'usuario administrador',
                'verbose_name_plural': 'usuarios administradores',
            },
        ),
        migrations.CreateModel(
            name='Ruta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=50)),
                ('lugar_salida', models.CharField(max_length=50, verbose_name='lugar de salida')),
                ('hora_salida', models.TimeField(verbose_name='hora de salida')),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now_add=True)),
                ('chofer', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='Controlador_Principal.usuariochofer')),
                ('paradas', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Controlador_Principal.parada')),
            ],
            options={
                'verbose_name': 'ruta',
                'verbose_name_plural': 'rutas',
            },
        ),
        migrations.CreateModel(
            name='Registro_de_Consumo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('consumo', models.IntegerField()),
                ('fecha', models.DateField()),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now_add=True)),
                ('ruta', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='Controlador_Principal.ruta')),
            ],
            options={
                'verbose_name': 'registro de consumo',
                'verbose_name_plural': 'registros de consumo',
            },
        ),
    ]