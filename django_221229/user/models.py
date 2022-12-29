from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

class UserManager(BaseUserManager):
    def create_user(self, username, password=None):
        if not username:
            raise ValueError('Users must have an username')
        user = self.model(
            username=username,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, username, password=None):
        user =  self.create_user(
            username=username, 
            password=password
            )
        user.is_admin = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser):
    username = models.CharField("사용자 아이디", max_length=24, unique=True)
    password = models.CharField("비밀번호", max_length=128)
    created_at = models.DateTimeField("생성일", auto_now_add=True)

    def __str__(self):
        return f"{self.username}"

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

    objects = UserManager()

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.is_admin
