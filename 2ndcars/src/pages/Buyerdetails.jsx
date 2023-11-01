import React from 'react'
import Navbaradm from '../component/Navbaradm'

export default function Buyerdetails() {
  return (
    <div>
      <Navbaradm/>

      <div>
      <table class="table table-bordered border-primary ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Buyer name</th>
      <th scope="col">Place</th>
      <th scope="col">Phone</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>martin</td>
      <td>canada</td>
      <td>747474747474</td> 
      <td>martin123</td>
      <td>martin@123</td>
      <td><a href="">Edit</a>/ <a href="">Delete</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>martin</td>
      <td>canada</td>
      <td>747474747474</td>
      <td>martin123</td>
      <td>martin@123</td>
      <td><a href="">Edit</a>/ <a href="">Delete</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>martin</td>
      <td>canada</td>
      <td>747474747474</td>
      <td>martin123</td>
      <td>martin@123</td>
      <td><a href="">Edit</a>/ <a href="">Delete</a></td>
    </tr>
  </tbody>
</table>
      </div>



    </div>
  )
}
