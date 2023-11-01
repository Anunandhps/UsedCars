from datetime import date

class bookingAPIView(GenericAPIView):
    serializer_class = bookingserializer

    def post(self, request):
        

        
        buyer = request.data.get('buyerid')
        seller=request.data.get("sellerid")
        product=request.data.get('carid')
        booking_date = date.today()
        print(product)
        quty = request.data.get('quantity')
        bkquantity=int(quty)
        bookingstatus="0"
        
        bookings = booking.objects.filter(buyerid=buyer, carid=product)
        if bookings.exists():
            return Response({'message':'Item is already in cart','success':False}, status=status.HTTP_400_BAD_REQUEST)

        else:
            data=car.objects.all().filter(id=product).values()
            for i in data:
                print(i)
                name=i['name']
                descriptiion=i['descriptiion']
                price=i['price']
                ownership=i['ownership']
                paper=i['paper']


            cardata=car.objects.get(id=product)
            quant=cardata.quantity
            carcount=int(quant)


            cardata.quantity=carcount-bkquantity
            cardata.save()


            data2=buyer.objects.all().filter(id=buyer).values()
            for i in data:
                print(i)
                buyername=i['bname']
            data3=seller.objects.all().filter(id=seller).values()
            for i in data:
                print(i)
                sellername=i['sname']




            carlo = car.objects.get(id=product)
            car_image = carlo.image
            print( car_image)
                

    
            serializer = self.serializer_class(data= {'buyername':buyername,'sellername':sellername,'sellerid':seller,'userid':user,'carid':product,'quantity':quantity,'price':price,'name':name,'ownership':ownership,'image':car_image,'paper':paper,'booking_date':booking_date,'descriptiion':descriptiion})
            print(serializer)
            if serializer.is_valid():
                print("hi")
                serializer.save()   
                return Response({'data':serializer.data,'message':'cart added successfully', 'success':True}, status = status.HTTP_201_CREATED)
