import React from 'react'
import NavbarSH from '../component/NavbarSH'
import Selleritem from '../component/Selleritem'
import '../component/Viewitwm.css'
import buggati from '../component/Buggati.jpg'
import Delete from '../component/Delete.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



export default function Sellerhome() {


  const nameofuser = localStorage.getItem("username")
 console.log(nameofuser)



 

  return (
    <div>
        <NavbarSH/>
        <br /><br />
        <center>
          <h1>Hello &nbsp; &nbsp; &nbsp;{nameofuser}</h1>
          <h5>Sell your Vehicle here</h5>
          <button type="button" class="btn btn-danger">Click here</button>
        </center>

        <Selleritem/>

</div>
  )
}
