import React from 'react'
import '../component/Viewitwm.css'
import buggati from '../component/Buggati.jpg'
import Delete from '../component/Delete.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export default function Selleritem() {


  const navigate=useNavigate() 

  const anunandh = (carid) => {

    axios.delete(`http://127.0.0.1:8000/api/deletesinglecar/${carid}`).then((response) => {
      console.log("deleted");
    })

  }

  const seller_id = localStorage.getItem("userid")


  const [state, setstate] = useState([])


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/sellercarview/${seller_id}`).then((response) => {
      console.log("none");

      setstate(response.data.data)


    }).catch((err) => {
      console.log(err);
    })
  }, [])
  console.log(state);

  return (
    <div> <div class="card">

      {state[0] ?
        <>
          <div className='row'>

            {state?.map((data, key) => (
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
                <div class="card-body ">
                  <a href="/Caredit"><button type="button" class="btn btn-danger" onClick={()=>{navigate(`/Caredit/${data.id}`)}}>Edit</button></a>

                  <a href="" onClick={() => { anunandh(data.id) }}><img src={Delete} alt="" className='Del' /></a>

                </div>

              </div>



            ))}

          </div>
        </>
        : <td>data added</td>
      }


    </div></div>


  )
}





