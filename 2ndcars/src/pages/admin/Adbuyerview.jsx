import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'




export default function Adbuyerview() {

  const navigate = useNavigate()

  const [state, setState] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/bUserView').then((response) => {
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

                  {/* <img className="img" src={`/lgrgvw/${data.image}`} alt="" /> */}
                  <div class="card-body">
                    <h5 class="card-title">{data.bname}</h5>
                    <p class="card-text">{data.bplace}</p>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{data.bphone}</li>
                    <li class="list-group-item">{data.password}</li>
                    <li class="list-group-item">{data.username}</li>
                  </ul>
                     {/* <a href="#" class="btn btn-primary" onClick={()=>{navigate(`/Booking/${data.id}`)}}>Book Now</a> */}
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
