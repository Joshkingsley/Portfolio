from django.shortcuts import render

def view_page(request):
    return render(request, 'My_page.html')
def view_gallery(request):
    return render(request, 'Gallery.html')