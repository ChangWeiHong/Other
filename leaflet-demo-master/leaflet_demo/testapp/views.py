from django.shortcuts import render
from django.http import HttpResponse

posts = [
    {
        'author': 'WeiHong',
        'title': 'Lat Long test Post',
        'Content': '2.0596596,102.5446401'
    },

    {
        'author': 'WeiHong2',
        'title': 'Lat Long test Post',
        'Content': '2.0596596,102.5446401'
    }

]
#home function will call index.html in template folders in broswer
def home(request):

    return render(request, 'testapp/index.html')

def about(request):
    context = {
        'posts' : posts,
        'title' : 'About'
    }
    return render(request, 'testapp/about.html', context)
