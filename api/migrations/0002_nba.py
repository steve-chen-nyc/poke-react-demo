# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nba',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, primary_key=True, auto_created=True)),
                ('name', models.CharField(unique=True, max_length=100)),
                ('picture', models.ImageField(upload_to='')),
                ('picture_url', models.URLField()),
                ('Position', models.TextField()),
                ('Team', models.CharField(max_length=100)),
            ],
        ),
    ]
