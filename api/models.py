from django.db import models

# Create your models here.
class Pokemon(models.Model):
    name = models.CharField(max_length=100, unique=True)
    picture = models.ImageField()
    picture_url = models.URLField()
    description = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name
