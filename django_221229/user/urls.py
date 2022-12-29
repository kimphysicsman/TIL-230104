from django.urls import path

from user.views import UserView, UserCRUDView

# /user
urlpatterns = [
    path('', UserCRUDView.as_view(), name="user"),
    path('/login', UserView.as_view(), name="user_login"),
]