# Generated by Django 3.2 on 2023-08-12 11:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0025_review_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='user',
        ),
    ]
