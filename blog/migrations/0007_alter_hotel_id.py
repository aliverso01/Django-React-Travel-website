# Generated by Django 3.2 on 2023-07-31 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0006_hotelbasketitem'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hotel',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
