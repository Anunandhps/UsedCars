import React from 'react'
import '../component/NavbarH.css'

import pic from '../component/navcar.png'
import cash from '../component/Cash.png'
import key from '../component/Key.png'



export default function NavbarH() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   <img src={pic} alt="" className='navpic'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav position-absolute top-0 end-0 mx-5 m-3">
      <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        
        <li class="nav-item mx-3">
        {/* <!-- Button trigger modal --> */}

        <li class="nav-item"   data-bs-toggle="modal" data-bs-target="#exampleModal" >
          <a class="nav-link" href="#">Register</a>
        </li>


{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Select Your Role </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex grid gap-5">
        <div>
          <img src={cash} alt="" className='popimg' />

          <a href="/Buyer"><button type="button" class="btn btn-danger">Buyer</button></a>
        </div>

      <div>

      <img src={key} alt="" className='popimg'/>
      <a href="/Seller"><button type="button" class="btn btn-danger">Seller</button></a>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      
      </div>
    </div>
  </div>
</div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
  
        <li class="nav-item">
          <a class="nav-link" href="/View">View</a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>
       
</div>


  )
}
