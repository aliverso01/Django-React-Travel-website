# Generated by Django 3.2 on 2023-08-03 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payments', '0004_payment_hotelprice'),
    ]

    operations = [
        migrations.AddField(
            model_name='payment',
            name='type',
            field=models.CharField(default=2, max_length=60),
            preserve_default=False,
        ),
    ]
