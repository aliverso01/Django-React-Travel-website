# Generated by Django 3.2 on 2023-08-21 19:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0048_delete_profile'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='paragraph',
            field=models.TextField(default=''),
        ),
    ]
