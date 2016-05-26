from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Pokemon
from .serializers import PokemonSerializer
from .models import Nba
from .serializers import NbaSerializer

class PokemonList(generics.ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class NbaList(generics.ListCreateAPIView):
    queryset = Nba.objects.all()
    serializer_class = NbaSerializer
