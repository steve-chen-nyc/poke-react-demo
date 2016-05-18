from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.PokemonList.as_view(), name='pokemon-list'),
]
