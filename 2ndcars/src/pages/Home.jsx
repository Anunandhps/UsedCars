import React from 'react'
import NavbarH from '../component/NavbarH'
import '../component/Home.css'
import gcar from '../component/group of cars.png'
import hatch from '../component/hatchback.jpg'
import suv from '../component/suv.jpg'
import sedan from '../component/Sedan.jpg'
import pickup from '../component/pickup.jpg'

export default function Home() {
  return (
    <div>
     <NavbarH/>
    <div className='d-flex p-2  justify-content-evenly'>
        <div>
        <h1 className='h1'>Welcome to </h1>
        <h1 className='h1'>Voyager</h1>
        <h6> you can buy every type of used car,We provide showroom condition car at less cost, <br />If your Looking forward to Sell you vehicle let us know by Registering as a seller</h6>
        </div>
        <img src={gcar} alt="" className='gcar'/>



    </div>


    <div className='d-flex p-5 grid gap-5'>
    <div class="card" >
  <img src={hatch} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Hatchback</h5>
    <p class="card-text">We provide Best and variety of 2nd Hatchback vehicles in market.</p>
  </div>

  <button type="button" class="btn btn-danger">Click Here</button>
</div>

<div class="card" >
  <img src={suv} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Suv</h5>
    <p class="card-text">We provide Best and variety of 2nd Suv vehicles in market.</p>
  </div>

  <button type="button" class="btn btn-danger">Click Here</button>
</div>

<div class="card" >
  <img src={sedan} class="card-img-top" alt="..."/>rfc
  <div class="card-body">
    <h5 class="card-title">Sedan</h5>
    <p class="card-text">We provide Best and variety of 2nd Sedan vehicles in market.</p>
  </div>

  <button type="button" class="btn btn-danger">Click Here</button>
</div>

<div class="card" >
  <img src={pickup} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Pickup</h5>
    <p class="card-text">We provide Best and variety of 2nd pickup vehicles in market.</p>
  </div>

  <button type="button" class="btn btn-danger">Click Here</button>
</div>


    </div>










    </div>
  )
}
