import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Sellerorders() {

  const [state, setState] = useState([])

  const sellerid = localStorage.getItem("userid")
  console.log('sellerid', sellerid);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/sellerbookingview/${sellerid}`).then((response) => {
      console.log(response);
      setState(response.data.data)

    }).catch((error) => { console.log(error); })
  }, [])
  console.log(state);


  const approve = (id) => {
    axios.post(`http://127.0.0.1:8000/api/sellerApprove_orderAPIView/${id}`).then((response) => {

      console.log(response);
      console.log('worked')
    })
  }



  const reject = (re) => {
    axios.delete(`http://127.0.0.1:8000/api/deletebuyerbookingview/${re}`).then((response) => {

      console.log(response);
      console.log('rejected')
    })
  }



  const navigate = useNavigate()
  return (
    <div>

      <div>
  
      </div>
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Buyer name</th>
            <th scope="col">Car name</th>
            <th scope="col">description</th>
            <th scope="col">Order</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {state[0] ?
            <>
              {state?.map((data) => (


                <tr>
                  <th scope="row">1</th>
                  <td>{data.buyername}</td>
                  <td>{data.name}</td>
                  <td>{data.descriptiion}</td>
                  <td><button type="button" class="btn btn-outline-secondary btn-sm" onClick={() => { approve(data.id) }}>Accept</button></td>
                  <td><button type="button" class="btn btn-outline-secondary btn-sm" onClick={() => { reject(data.id) }}>Reject</button></td>
                </tr>
              ))}
            </>
            : <h6>data added</h6>
          }
        </tbody>
      </table>

    </div>
  )
}
