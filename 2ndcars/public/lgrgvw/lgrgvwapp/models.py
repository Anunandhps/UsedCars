from django.db import models

# Create your models here.
class log(models.Model):
    username = models.CharField(max_length = 50,null = True)
    password = models.CharField(max_length = 50,null = True)
    role = models.CharField(max_length = 50)
    def __str__(self):
        return self.username



class buyer(models.Model):
    bname= models.CharField(max_length = 50,null=True)
    bplace= models.CharField(max_length = 50,null=True)
    bphone= models.CharField(max_length = 50,null=True)
    password= models.CharField(max_length = 50,null=True)
    username= models.CharField(max_length = 50,null=True)
    buyerstatus= models.CharField(max_length = 50,null=True)
    login=models.ForeignKey(log, on_delete=models.CASCADE)
    def __str__(self):
        return self.bname




class seller(models.Model):
    sname= models.CharField(max_length = 50,null=True)
    splace= models.CharField(max_length = 50,null=True)
    sphone= models.CharField(max_length = 50,null=True)
    password= models.CharField(max_length = 50,null=True)
    username= models.CharField(max_length = 50,null=True)
    sellerstatus= models.CharField(max_length = 50,null=True)
    login=models.ForeignKey(log, on_delete=models.CASCADE)
   
    def __str__(self):
        return self.sname
    


class car(models.Model):
    image=models.ImageField(upload_to='images',null=True,blank=True)
    name=models.CharField(max_length=30,null=True)
    descriptiion=models.CharField(max_length=120,null=True)
    price=models.CharField(max_length=30,null=True)
    ownership=models.CharField(max_length=30,null=True)
    quantity=models.CharField(max_length=120,null=True)
    paper=models.CharField(max_length=30,null=True)
    seller_id=models.ForeignKey(seller, on_delete=models.CASCADE)

    def __str__(self):
        return self.name    



class booking(models.Model):
    buyerid =models.ForeignKey(buyer,on_delete=models.CASCADE)
    carid=models.ForeignKey(car,on_delete=models.CASCADE)
    sellerid=models.ForeignKey(seller,max_length=100,on_delete=models.CASCADE) 
    buyername=models.CharField(max_length=30,null=True)
    sellername=models.CharField(max_length=30,null=True)
    name=models.CharField(max_length=30,null=True)
    descriptiion=models.CharField(max_length=30,null=True)
    price=models.CharField(max_length=30,null=True)
    ownership=models.CharField(max_length=30,null=True)
    image=models.ImageField(upload_to="images",null=True,blank=True)
    paper=models.CharField(max_length=120,null=True)

   
    bookingdate=models.CharField(max_length=30,null=True)
    bookingstatus=models.CharField(max_length=120,null=True)


    # def __str__(self):
    #     return self.buyerid