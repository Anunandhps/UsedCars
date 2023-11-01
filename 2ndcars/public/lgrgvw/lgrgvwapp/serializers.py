from rest_framework import serializers
from .models import buyer,log,seller,car,booking

    



class userserializers(serializers.ModelSerializer):
    class Meta:
        model=buyer
        fields='__all__'
    def create (self,validated_data):
        return buyer.objects.create(**validated_data)


class userserializers2(serializers.ModelSerializer):
    class Meta:
        model=seller
        fields='__all__'
    def create (self,validated_data):
        return seller.objects.create(**validated_data)



class logserializers(serializers.ModelSerializer):
    class Meta:
        model=log
        fields='__all__'
    def create (self,validated_data):
        return log.objects.create(**validated_data)

        

class carserializer(serializers.ModelSerializer):
    class Meta:
        model=car
        fields='__all__'
    def Create (self,validated_data):
        return car.objects.Create(**validated_data)
   

   
class bookingserializer(serializers.ModelSerializer):
    class Meta:
        model=booking
        fields='__all__'
    def Create (self,validated_data):
        return booking.objects.Create(**validated_data)