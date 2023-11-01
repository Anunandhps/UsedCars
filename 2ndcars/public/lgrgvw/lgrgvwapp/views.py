from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import GenericAPIView
from .models import buyer,log,seller,car,booking
from lgrgvwapp.serializers import userserializers,logserializers,userserializers2,carserializer,bookingserializer
from rest_framework import filters
from django.conf import settings
from .PythonMail import sentmail
from datetime import date
# Create your views here.

class buserregisterAPIView(GenericAPIView):
    serializers_class = userserializers
    serializers_class_login = logserializers 
    
    def post(self,request):
        
        login_id=''

        bname=request.data.get("bname")
        bplace=request.data.get("bplace")
        bphone=request.data.get("bphone")
        password=request.data.get("password")
        username=request.data.get("username")
        role="buyer"
        buyerstatus='0'


        if (log.objects.filter(username=username)):
            return Response({'message' : 'duplicate username found'},status.HTTP_400_BAD_REQUEST)
        else:
            serializers_login = self.serializers_class_login(data={'username' : username,'password' : password, 'role' : role})

        if serializers_login.is_valid():
            Log = serializers_login.save()
            login_id = Log.id
            print(login_id)
        serializers = self.serializers_class(
            data = {
                'bname': bname,
                'bplace': bplace,
                'bphone': bphone,
                'password': password,
                'username': username,
                'login':login_id,
                'buyerstatus':buyerstatus
                



            }
            
        )

        print(serializers)
        if serializers.is_valid():
            print("hi")
            # sentmail()
            serializers.save()
            return Response({'data':serializers.data,'message' : 'registration succesful','success': True},status =status.HTTP_201_CREATED)
        return Response({'data':serializers.errors,'message':'registration failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class loginAPIView(GenericAPIView):
    serializer_class = logserializers
    def post (self,request):
        u_id= ''
        username = request.data.get('username')
        password = request.data.get('password')
        print(username)
        print(password)
        logreg=log.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serializers = logserializers(logreg, many=True)
            for i in read_serializers.data:
                id=i['id']
                role=i['role']
                print(id)
                regdata = buyer.objects.all().filter(login = id).values()
                print(regdata)

                for i in regdata:
                    u_id = i['id']
                    name = i['username']
                 
                    print(u_id)



                regdatas = seller.objects.all().filter(login = id).values()
                print(regdatas)
                

                for i in regdatas:
                    u_id = i['id']
                    name = i['username']
                 
                    print(u_id)


    
        

            return Response({
                'data':{


                    'userid':u_id,
                    'login_id':id,
                    'username':username,
                    'password':password,
                    'role':role
                    
                }
            })           

        else:
            return Response({'message':'username is invalid','success':'false' },status=status.HTTP_400_BAD_REQUEST)          
        
class bUserView(GenericAPIView):
    serializer_class = userserializers
    def get(self,request):
        queryset = buyer.objects.all()
        if(queryset.count()>0):
            serializers = userserializers(queryset,many= True)

            return Response({'data': serializers.data, 'message': 'all Product data set', 'success': True}, status= status.HTTP_200_OK)
        else:
            return Response({'data':'non data available','success': False}, status= status.HTTP_201_CREATED)




class suserregisterAPIView(GenericAPIView):
    serializers_class2 = userserializers2
    serializers_class_login2 = logserializers 
    
    def post(self,request):
        
        login_id=''

        sname=request.data.get("sname")
        splace=request.data.get("splace")
        sphone=request.data.get("sphone")
        password=request.data.get("password")
        username=request.data.get("username")
        role="seller"
        sellerstatus='0'


        if (log.objects.filter(username=username)):
            return Response({'message' : 'duplicate username found'},status.HTTP_400_BAD_REQUEST)
        else:
            serializers_login2 = self.serializers_class_login2(data={'username' : username,'password' : password, 'role' : role})

        if serializers_login2.is_valid():
            Log = serializers_login2.save()
            login_id = Log.id
            print(login_id)
        serializers = self.serializers_class2(
            data = {
                'sname': sname,
                'splace': splace,
                'sphone': sphone,
                'password': password,
                'username': username,
                'login':login_id,
                'sellerstatus':sellerstatus
                



            }
            
        )

        print(serializers)
        if serializers.is_valid():
            print("hi")
            # sentmail()  
            serializers.save()
            return Response({'data':serializers.data,'message' : 'registration succesful','success': True},status =status.HTTP_201_CREATED)
        return Response({'data':serializers.errors,'message':'registration failed','success':False},status=status.HTTP_400_BAD_REQUEST)


class sUserView(GenericAPIView):
    serializer_class = userserializers2
    def get(self,request):
        queryset = seller.objects.all()
        if(queryset.count()>0):
            serializers = userserializers2(queryset,many= True)

            return Response({'data': serializers.data, 'message': 'all Product data set', 'success': True}, status= status.HTTP_200_OK)
        else:
            return Response({'data':'non data available','success': False}, status= status.HTTP_201_CREATED)



class addcar(GenericAPIView):
    serializer_class=carserializer


    def post(self,request):
        image=request.data.get("image")
        name=request.data.get("name")
        descriptiion=request.data.get("descriptiion")
        price=request.data.get("price")
        ownership=request.data.get("ownership")
        paper=request.data.get("paper")
        carstatus="0"
        seller_id=request.data.get("seller_id")



        serializer=self.serializer_class(data={'image':image,'name':name, 'descriptiion':descriptiion,'price':price,'ownership':ownership,'paper':paper, 'seller_id':seller_id })
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'car was added susccesfully','success':'1'},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'adding car was failed','success':'0'},status=status.HTTP_400_BAD_REQUEST)            









class allcarview(GenericAPIView):
    serializer_class=carserializer
    def get(self,request):
        queryset=car.objects.all()
        if(queryset.count()>0):
            serializer=carserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all car data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    



class singlecarview(GenericAPIView):
    def get(self,request,id):
        queryset = car.objects.get(pk=id)
        serializers = carserializer(queryset)
        return Response({'data': serializers.data, 'message': 'single car data', 'success': True}, status= status.HTTP_200_OK)


class deletesinglecar(GenericAPIView):
    def delete(self, request, id): 
        delmember = car.objects.get(pk=id)
        delmember.delete()
        return Response({'message':'Deleted successfully', 'success':True}, status=status.HTTP_200_OK)

class updatesinglecar(GenericAPIView):
    serializers_class=carserializer
    def put(self,request,id):
        queryset = car.objects.get(pk=id)
        print(queryset)
        serializers = carserializer(instance = queryset,data=request.data,partial= True)
        print(serializers)
        if serializers.is_valid():
            serializers.save()
            return Response({'data':serializers.data,'message':'updated succesfully','success':True},status = status.HTTP_200_OK)
        else:
            return Response({'data':'something went wrong','success': False},status = status.HTTP_400_BAD_REQUEST)


class searchcar(GenericAPIView):
    def post(self, request):
        query = request.data.get('query')
        print(query)

        i = car.objects.filter(name__icontains=query)
        for dta in i:
            print(dta)

        data = [{'name': info.name, 'descriptiion': info.descriptiion, 'price': info.price} for info in i]
        return Response({'data': data, 'message': 'Successfully fetched', 'success': True}, status=status.HTTP_200_OK)




class sellercarview(GenericAPIView):
    serializer_class=carserializer
    def get(self,request,id):
        queryset=car.objects.filter(seller_id=id).values()
        for obj in queryset:

            obj['image'] = settings.MEDIA_URL + str(obj['image'])
        return Response ({'data':queryset,'message':'all car data set' , 'success':1},status=status.HTTP_200_OK)
      

class Buyercarview(GenericAPIView):
    serializer_class=carserializer
    def get(self,request):
        queryset=car.objects.all()
        if(queryset.count()>0):
            serializer=carserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all car data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)    


class bookingAPIView(GenericAPIView):
    serializer_class = bookingserializer  # Assuming bookingSerializer is a valid serializer class

    def post(self, request):
        buyer = request.data.get('buyerid')
        seller = request.data.get("sellerid")
        car = request.data.get('carid')
        bookingdate = str(date.today())
        print(car)
        bookingstatus = "0"

        book = booking.objects.filter(buyerid=buyer, carid=car)
        if book.exists():
            return Response({'message': 'car is already booked', 'success': False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            car_data = car.objects.get(id=carss)
            carname = car_data.name
         
            car_data.carstatus = "1"
            car_data.save()

            buyer_data = buyer.objects.get(id=buyer)
            buyername = buyer_data.bname

            seller_data = seller.objects.get(id=seller)
            sellername = seller_data.sname

            carz = car.objects.get(id=carss)
            car_image = carz.image
            print(car_image)

            serializer = self.serializer_class(data={
                'buyerid': buyer,
                'sellername': sellername,
                'sellerid': seller,
                'carid': carss,
                'carname': carname,
                'buyername': buyername,
                'image': car_image,
                # 'cartype': cartype,
                # 'cookingtime': cookingtime,
                # 'address': address,
                # 'phone': phone,
                'bookingdate': bookingdate,
                'bookingstatus': bookingstatus
            })

            if serializer.is_valid():
                print("hi")
                serializer.save()
                return Response({'data': serializer.data, 'message': 'car added successfully', 'success': True},
                                status=status.HTTP_201_CREATED)
            return Response({'data': serializer.errors, 'message': 'Invalid', 'success': False},
                            status=status.HTTP_400_BAD_REQUEST)





class buyerbookingview(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request):
        queryset=booking.objects.all()
        if(queryset.count()>0):
            serializer=bookingserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all booking data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED) 
        


class deletebuyerbookingview(GenericAPIView):

    def delete(self,request,id):
        deletecar=booking.objects.get(pk=id)
        deletecar.delete()
        return Response({'message':'Deleted suscesfully','sucess':True},status=status.HTTP_200_OK)




class sellerbookingview(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request,id):
        queryset=booking.objects.filter(sellerid=id)
        if(queryset.count()>0):
            serializer=bookingserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all booking data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED)   


class deletesellerbookingview(GenericAPIView):

    def delete(self,request,id):
        deletecar=booking.objects.get(pk=id)
        deletecar.delete()
        return Response({'message':'Deleted suscesfully','sucess':True},status=status.HTTP_200_OK)




# ________________________________________booking order__________________________

class sellerApprove_orderAPIView(GenericAPIView):
    def post(self, request, id):
        serializer_class =bookingserializer
        book = booking.objects.get(pk=id)
        book.bookingstatus = 1
        book.save()
        serializer = serializer_class(book)
        return Response({'data':serializer.data,'message':'seller Approved order', 'success':True}, status=status.HTTP_200_OK)
    



class bookingapproved(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request,id):
        queryset=booking.objects.filter(buyerid=id, bookingstatus=1)
        if(queryset.count()>0):
            serializer=bookingserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all booking data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED) 
        





class bookingpending(GenericAPIView):
    serializer_class=bookingserializer
    def get(self,request,id):
        queryset=booking.objects.filter(buyerid=id, bookingstatus=0)
        if(queryset.count()>0):
            serializer=bookingserializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all booking data  set' ,'success':1},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no datas avaialable ','success':0},status=status.HTTP_201_CREATED) 
        