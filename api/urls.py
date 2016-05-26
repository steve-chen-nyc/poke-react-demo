from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^pokemon$', views.PokemonList.as_view(), name='pokemon-list'),
	url(r'^nba$', views.NbaList.as_view(), name='nba-list'),
]
