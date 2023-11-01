import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Buyer from './pages/Buyer';
import Seller from './pages/Seller';
import Login from './pages/Login';
import View from './pages/View';
import Sellerhome from './pages/Sellerhome';
import Admin from './pages/Admin';
import Addcar from './pages/Addcar';
import Buyerdetails from './pages/Buyerdetails';
import Sellerdetails from './pages/Sellerdetails';
import Cardetails from './pages/Cardetails';
import Caredit from './pages/Caredit';
import Viewitem from './component/Viewitem';
import Booking from './pages/Booking';
import Sellerorders from './pages/Sellerorders';
import Pending from './pages/Pending';
import Approved from './pages/Approved';
import Adcarview from './pages/admin/Adcarview';
import Adbuyerview from './pages/admin/Adbuyerview';
import Adsellerview from './pages/admin/Adsellerview';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Buyer' element={<Buyer/>}></Route>
      <Route path='/Seller' element={<Seller/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/View' element={<View/>}></Route>
      <Route path='/Sellerhome' element={<Sellerhome/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/Addcar' element={<Addcar/>}></Route>
      <Route path='/Buyerd' element={<Buyerdetails/>}></Route>
      <Route path='/Sellerd' element={<Sellerdetails/>}></Route>
      <Route path='/Card' element={<Cardetails/>}></Route>
      <Route path='/Viewitem' element={<Viewitem/>}></Route>
      <Route path='/booking/:id' element={<Booking/>}></Route>
      <Route path='/Sellerorders' element={<Sellerorders/>}></Route>
      <Route path='/pending' element={<Pending/>}></Route>
      <Route path='/approved' element={<Approved/>}></Route>
      <Route path='/admcar' element={<Adcarview/>}></Route>
      <Route path='/admbuyer' element={<Adbuyerview/>}></Route>
      <Route path='/admseller' element={<Adsellerview/>}></Route>
   
      
      <Route path='/Caredit/:id' element={<Caredit/>}></Route>

      


    </Routes>
    </>
  );
}
export default App;
