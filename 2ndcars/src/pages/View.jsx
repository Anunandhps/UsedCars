import React from 'react'
import NavbarV from '../component/NavbarV'
import Viewitem from '../component/Viewitem'

export default function View() {
  return (
    <div>
        <NavbarV/>


        <div><br /><br />
          <center>
         <h1> welcome</h1>
        <h5> to Our Booking page,Here you can search your faviorate vehicle or Browse popular cars</h5>
       
        <input class="form-control me-2 w-25" type="search" placeholder="Search" aria-label="Search"/>
        </center>
      </div><br /><br />
    <div className='d-flex justify-content-center  justify-content-evenly align-baseline'>
      



        <Viewitem/>




    </div>


    </div>
  )
}
