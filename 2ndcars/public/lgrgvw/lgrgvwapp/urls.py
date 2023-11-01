from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
  
    path('buserregisterAPIView', views.buserregisterAPIView.as_view(), name='buserregisterAPIView'),
    path('suserregisterAPIView', views.suserregisterAPIView.as_view(), name='suserregisterAPIView'),
    path('loginAPIView', views.loginAPIView.as_view(), name='loginAPIView'),
    path('bUserView', views.bUserView.as_view(), name='bUserView'),
    path('sUserView', views.sUserView.as_view(), name='sUserView'),
    path('addcar', views.addcar.as_view(), name='addcar'),
    path('allcarview', views.allcarview.as_view(), name='allcarview'),
    path('singlecarview/<int:id>', views.singlecarview.as_view(), name='singlecarview'),
    path('deletesinglecar/<int:id>', views.deletesinglecar.as_view(), name='deletesinglecar'),
    path('updatesinglecar/<int:id>', views.updatesinglecar.as_view(), name='updatesinglecar'),
    path('sellercarview/<int:id>', views.sellercarview.as_view(), name='sellercarview'),
    path('searchcar', views.searchcar.as_view(), name='searchcar'),
    path('Buyercarview', views.Buyercarview.as_view(), name='Buyercarview'),
    path('bookingAPIView', views.bookingAPIView.as_view(), name='bookingAPIView'),
    path('buyerbookingview', views.buyerbookingview.as_view(), name='buyerbookingview'),
    path('deletebuyerbookingview/<int:id>', views.deletebuyerbookingview.as_view(), name='deletebuyerbookingview'),
    path('sellerbookingview/<int:id>', views.sellerbookingview.as_view(), name='sellerbookingview'),
    path('sellerApprove_orderAPIView/<int:id>', views.sellerApprove_orderAPIView.as_view(), name='sellerApprove_orderAPIView'),
    path('bookingapproved/<int:id>', views.bookingapproved.as_view(), name='bookingapproved'),
    path('bookingpending/<int:id>', views.bookingpending.as_view(), name='bookingpending'),
    
]

