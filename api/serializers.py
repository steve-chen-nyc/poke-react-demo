from rest_framework import serializers
from .models import Pokemon
from .models import Nba

class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        fields = ('name', 'picture', 'picture_url','description','category')

class NbaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nba
        fields = ('name', 'picture', 'picture_url','Position','Team')
