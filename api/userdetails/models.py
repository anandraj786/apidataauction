from django.db import models

# Create your models here.
class Users(models.Model):
    
    firstname = models.CharField(max_length=255, null=True)
    lastname = models.CharField(max_length=255, null=True)
    email = models.EmailField(max_length=255, null=True, unique=True)
    password = models.CharField(max_length=255, null=True)
    company_name = models.CharField(max_length=255, null=True)
    mobile = models.CharField(max_length=255, null=True)
    telephone = models.CharField(max_length=255, null=True)
    address_line1 = models.CharField(max_length=255, null=True)
    address_line2 = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=255, null=True)
    postal_zip = models.CharField(max_length=255, null=True)
    country = models.CharField(max_length=255, null=True)
    state = models.CharField(max_length=255, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.lastname}-{self.firstname}"