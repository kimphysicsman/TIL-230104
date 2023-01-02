from rest_framework import serializers

from user.models import User as UserModel

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ["id", "username", "password", "created_at"]
        
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        user = UserModel(**validated_data)
        p = user.password
        user.set_password(p)
        user.save()
        return user
