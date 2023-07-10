from django.urls import path
from . import views

urlpatterns = [
    path('songs', views.songs_list)

              ]