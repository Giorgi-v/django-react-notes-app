from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}} # accept psw when creating a new user, but don't return the psw when giving information about a user

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user