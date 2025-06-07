from django.urls import path
from . import views

urlpatterns = [
    path('M.Joshua/', views.view_page, name="MyPage"),
    path('worksapce/items/', views.view_gallery, name="WorkSpace"),
]