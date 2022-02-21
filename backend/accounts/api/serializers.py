from rest_framework.serializers import ModelSerializer
from django.conf.global_settings import AUTH_USER_MODEL


class UserSerializer(ModelSerializer):
    class Meta:
        model = AUTH_USER_MODEL
        fields = [
            "id",
            "username",
            "email",
            "password",
        ]

    def create(self, validated_data):
        user = AUTH_USER_MODEL.objects.create_user(
            validated_data["username"],
            validated_data["email"],
            validated_data["password"]
        )

        return user
