// import React from 'react'
import "../component/Viewitwm.css"
import buggati from '../component/Buggati.jpg'
import visa from '../component/visa.png'
import gpay from '../component/gpay.png'
import bhim from '../component/bhim.png'
import paytm from '../component/paytm.png'
import phonepe from '../component/phonepe.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'




export default function Viewitem() {

  const navigate = useNavigate()

  const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/Buyercarview').then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);
  return (
    <div>
      <div> <div class="card">


        <div className='row'>
          {state[0] ?
            <>

              {state?.map((data) => (
                <div className='col lg-3'>

                  <img className="img" src={`/lgrgvw/${data.image}`} alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{data.name}</h5>
                    <p class="card-text">{data.descriptiion}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{data.price}</li>
                    <li class="list-group-item">{data.ownership}</li>
                    <li class="list-group-item">{data.paper}</li>
                  </ul>
                  <a href="#" class="btn btn-primary" onClick={()=>{navigate(`/Booking/${data.id}`)}}>Book Now</a>
                  <div class="card-body ">


                  </div>

                </div>



              ))}

        </>
        : <td>data added</td>
      }
      </div>


      </div></div>









    </div>





  )
}
