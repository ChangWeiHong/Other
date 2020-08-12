from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='testapp-mainpage'),
    path('about/', views.about, name='testapp-about')
]
