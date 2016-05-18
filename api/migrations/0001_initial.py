# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pokemon',
            fields=[
                ('id', models.AutoField(auto_created=True, serialize=False, primary_key=True, verbose_name='ID')),
                ('name', models.CharField(unique=True, max_length=100)),
                ('picture', models.ImageField(upload_to='')),
                ('picture_url', models.URLField()),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=100)),
            ],
        ),
    ]
