import React from 'react'
import '../component/NavbarH.css'

import pic from '../component/navcar.png'
import User from '../component/user icon.png'
import cart from '../component/cart.png'



export default function NavbarV() {
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
      <li class="nav-item">
          <a class="nav-link" href="#"><img src={cart} alt="" className='Usericon'/></a>
        </li>



      <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
      <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li> 
       
      

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src={User} alt="" className='Usericon'/>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/pending">Pending</a></li>
            <li><a class="dropdown-item" href="/approved">Approved</a></li>
            <li><a class="dropdown-item" href="#">Edit</a></li>
            <li><a class="dropdown-item" href="#">Delete</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
           
  
          </ul>
        </li>
  
      </ul>
     
    </div>
  </div>
</nav>
       
</div>


  )
}
