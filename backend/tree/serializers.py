
from rest_framework import serializers
from .models import User, FamilyMember, Photo

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password_hash', 'is_admin']

class FamilyMemberSerializer(serializers.ModelSerializer):
    children = serializers.StringRelatedField(many=True)

    class Meta:
        model = FamilyMember
        fields = ['id', 'name', 'birthdate', 'parent', 'children']

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'member', 'file_path', 'description', 'uploaded_at']
