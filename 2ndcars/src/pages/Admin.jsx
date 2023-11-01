import React from 'react'
import Navbaradm from '../component/Navbaradm'
import '../component/Admin.css'
import caradm from '../component/caradm.jpg'
import cashadm from '../component/buyeradm.jpg'
import keyadm from '../component/keyadm.jpg'

export default function Admin() {
    return (
        <div>
            <Navbaradm /><br /><br /><br />

            <div className='d-flex justify-content-evenly ' >
                <div class="card" >
                    <img src={cashadm} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Buyer Details</h5>
                            <p class="card-text">click the button below to know details about every Buyer</p>
                            <a href="/admbuyer" class="btn btn-danger">Click here</a>
                        </div>
                </div>

                <div class="card" >
                    <img src={keyadm} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">seller Details</h5>
                            <p class="card-text">click the button below to know details about every Seller</p>
                            <a href="/admseller" class="btn btn-danger">Click here</a>
                        </div>
                </div>
         

            
                
                <div class="card" >
                    <img src={caradm} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <h5 class="card-title">Car Details</h5>
                            <p class="card-text">Click here to view every car details thats been added</p>
                            <a href="/admcar" class="btn btn-danger">Click here</a>
                        </div>
                </div>
                </div>
                    
            



        </div>
    )
}
