
from django.urls import path
from .views import UserRegisterView, FamilyTreeView, PhotoUploadView

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='register'),
    path('family-tree/', FamilyTreeView.as_view(), name='family-tree'),
    path('upload-photo/', PhotoUploadView.as_view(), name='upload-photo'),
]
