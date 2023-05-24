# Generated by Django 4.1.7 on 2023-04-21 15:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Controlador_Principal', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='usuarioadministrador',
            old_name='usuario',
            new_name='nombre',
        ),
        migrations.RenameField(
            model_name='usuariochofer',
            old_name='user',
            new_name='nombre',
        ),
        migrations.RemoveField(
            model_name='ruta',
            name='paradas',
        ),
        migrations.AddField(
            model_name='parada',
            name='ruta',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='Controlador_Principal.ruta'),
        ),
    ]