import React from 'react'
import pic from '../component/navcar.png'
export default function NavbarRB() {
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
        
     

        <li class="nav-item"   >
          <a class="nav-link" href="/">Home</a>
        </li>



        <li class="nav-item">
          <a class="nav-link" href="/Login">Login</a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}


