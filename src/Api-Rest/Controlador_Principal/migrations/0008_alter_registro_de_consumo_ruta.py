# Generated by Django 4.1.7 on 2023-04-30 22:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Controlador_Principal', '0007_alter_parada_options_alter_ruta_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registro_de_consumo',
            name='ruta',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Controlador_Principal.ruta'),
        ),
    ]