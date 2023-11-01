from django.contrib import admin

# Register your models here.
from .models import buyer,log,seller,car,booking
admin.site.register(buyer)
admin.site.register(seller)
admin.site.register(log)
admin.site.register(car)
admin.site.register(booking)
