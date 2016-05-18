from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Pokemon
from .serializers import PokemonSerializer

class PokemonList(generics.ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
