import React, { useEffect } from 'react'
import { useState } from 'react'
import '../component/Booking.css'

// import Counter from '../../../components/Counter'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'


export default function Buy() {
  const { id } = useParams();
  const [form, setform] = useState({})
  const [count, setcount] = useState(1)
  const userid = localStorage.getItem("userid")
  const sellerid = form.seller_id;
  const carid = id;
  console.log("hey bro sellerid ", sellerid);
  console.log("hey bro userid", userid);
  console.log("hey bro carid", carid);
  console.log(count);
  const [bkstat, setbkstat] = useState("")



  const [bookdata, setbookdata] = useState({
    userid: userid,
    sellerid: null,
    carid: carid,

  })

  const navigate = useNavigate()
  const booking = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    axios.post("http://127.0.0.1:8000/api/bookingAPIView", bookdata)
      .then((res) => {
        console.log("car booking has been added successfully");
        console.log(res);
        navigate("/")
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setbkstat(err.response.data.message)
        console.log("here is the  response", bkstat);
        console.log("Booking not working");
      });
    console.log(bookdata);
  };




  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/singlecarview/${id}`).then((response) => {
      console.log("single carview", response);
      setform(response.data.data)
      setbookdata({
        ...bookdata,
        sellerid: response.data.data.seller_id
      });
      console.log(bookdata);

      // console.log(form);

    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div className='view'>

      <div class="card" >
       
     
        <img className="img" src={`/lgrgvw/${form.image}`} alt="" />
      </div>
      <div className="card-right">
        <form action="">

          <h2>Book</h2>
          <hr />
          <p>{form.name}</p>
          <hr />
          <p> {form.descriptiion}</p>

          <p>{form.paper}</p>
          <hr />
          <p>  {form.ownership} </p>
          <hr />
          <p>{form.price} </p>
          <hr />
        


            {/* <p> Quantity </p>
            <center><Counter setcount={setcount} maxQuantity={form.quantity} /></center>
             */}
            <br />
            <span className='bstat'>{bkstat}</span>
        </form>


        <a href="#" class="btn btn-primary" onClick={booking}>Book Now</a>
      </div>
    </div>




  )
}