# Generated by Django 4.1.7 on 2023-04-30 20:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Controlador_Principal', '0003_remove_usuariochofer_nombre_alter_ruta_chofer_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ruta',
            name='chofer',
            field=models.OneToOneField(limit_choices_to={'rol': 'chofer'}, on_delete=django.db.models.deletion.DO_NOTHING, to='Controlador_Principal.usuario'),
        ),
    ]
