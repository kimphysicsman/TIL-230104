from django.urls import reverse
from django.contrib import auth

from rest_framework.test import APITestCase

from user.models import User as UserModel

class UserTset(APITestCase):
    def setUp(self):
        user_data = {
            "username": "kimphysicsman",
            "password": "0000"
        }

        UserModel.objects.create_user(**user_data)


    def test_get_user(self):
        user_data = {
            "username": "kimphysicsman",
            "password": "0000"
        }

        self.client.login(**user_data)

        response = self.client.get(reverse("user"))

        self.assertEqual(response.status_code, 200)