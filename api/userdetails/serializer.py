from rest_framework import serializers
from userdetails.models import Users


class UsersSerializer(serializers.ModelSerializer):
    user_id = serializers.CharField(required=False)

    class Meta:
        model = Users
        fields = '__all__'
        # fields = ('firstname','user_id')
