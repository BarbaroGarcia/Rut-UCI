# Generated by Django 4.1.7 on 2023-04-30 20:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Controlador_Principal', '0002_rename_usuario_usuarioadministrador_nombre_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuariochofer',
            name='nombre',
        ),
        migrations.AlterField(
            model_name='ruta',
            name='chofer',
            field=models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='Controlador_Principal.usuario'),
        ),
        migrations.DeleteModel(
            name='UsuarioAdministrador',
        ),
        migrations.DeleteModel(
            name='UsuarioChofer',
        ),
    ]