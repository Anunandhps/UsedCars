import React from 'react'
import Navbaradm from '../component/Navbaradm'

export default function Cardetails() {
  return (
    <div>
      <Navbaradm/>

      <div>
      <table class="table table-bordered border-primary ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Car image</th>
      <th scope="col">Car Name</th>
      <th scope="col">Details</th>
      <th scope="col">Price</th>
      <th scope="col">Ownership</th>
      <th scope="col">Paper</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>image</td>
      <td>porsche 911 turbo</td>
      <td>good and well maintained vehicle</td>
      <td>10000000rs</td>
      <td>2nd owner</td>
      <td>paper are clear</td>
      <td><a href="">Edit</a>/ <a href="">Delete</a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>image</td>
      <td>porsche 911 turbo</td>
      <td>good and well maintained vehicle</td>
      <td>10000000rs</td>
      <td>2nd owner</td>
      <td>paper are clear</td>
      <td><a href="">Edit</a>/ <a href="">Delete</a></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>image</td>
      <td>porsche 911 turbo</td>
      <td>good and well maintained vehicle</td>
      <td>10000000rs</td>
      <td>2nd owner</td>
      <td>paper are clear</td>
      <td><a href="">Edit</a>/ <a href="">Delete</a></td>
    </tr>
  </tbody>
</table>
      </div>



    </div>
  )
}
