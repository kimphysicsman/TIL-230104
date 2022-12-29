from django.contrib import auth

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from user.models import User as UserModel

class UserView(APIView):    
    def post(self, request):
        user = auth.authenticate(**request.data)

        if not user:
            auth.login(request, user)

        return Response({"message": "로그인 완료"}, status=status.HTTP_200_OK)

class UserCRUDView(APIView):
    def post(self, request):
        UserModel.objects.create_user(**request.data)

        return Response({"message": "유저 생성 완료"}, status=status.HTTP_200_OK)