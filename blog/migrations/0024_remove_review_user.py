# Generated by Django 3.2 on 2023-08-12 11:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0023_review_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='user',
        ),
    ]
