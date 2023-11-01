// import React from 'react'
import NavbarRB from '../component/NavbarRB'
import '../component/Buyer.css'
import Regcar from '../component/regcar.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Buyer() {

    const [input, setinput] = useState({
        bname: '',
        bplace: '',
        bphone: '',
        username: '',
        password: '',
        // role: '',

    })

    const [oops,setoops] = useState({})
    const [issubmit,setsubmit] = useState(false)    
    // const [isverified,setverified] = useState(false)    


    const validate=(values)=>   {
        var error={}
        if(!values.bname){
            error.bname= 'name cannot be null'
        }

        if(!values.bplace){
            error.bplace= 'place cannot be null'
        }

        if(!values.bphone){
            error.bphone= 'phone cannot be null'
        }

        if(!values.username){
            error.username= 'username cannot be null'
        }

        if(!values.password){
            error.password= 'password cannot be null'
        }
        return error

    }

  



    console.log(input)

    const inputchange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setinput({ ...input, [name]: value })


    }

    const navigate = useNavigate();
    const dataadd = (e) => {
        e.preventDefault()
        setoops(validate(input))
        setsubmit(true)
        if(Object.keys(oops).length===0 && issubmit){
            
        axios.post('http://127.0.0.1:8000/api/buserregisterAPIView', input).then((res) => {
            console.log(res);
            navigate("/Login")


        }).catch((err) => {
            console.log(err);
        })
        console.log(input)
            
        }




    }

    return (
        <div>
            <NavbarRB />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='foim    d-flex '>
                            <div className='border border-danger    p-3 border-2 rounded-2 h-75 d-inline-block'>
                                
                                    <form action="" className=''>
                                        <br /><br />
                                        <div class="v"> Enter Details </div> <br />
                                        <input type="text" placeholder="Enter Buyer Name" size="34" value={input.bname} name="bname"  onChange={inputchange} onClick={()=>{setoops({...oops,'bname':''})}}/> <br />
                                        <span style={{color:oops.bname ? 'red' : ""}}>{oops.bname}</span><br />
                                        <input type="text" placeholder="Enter Place" size="34" name="bplace" value={input.bplace}  onChange={inputchange} onClick={()=>{setoops({...oops,'bplace':''})}}/><br />
                                        <span style={{color:oops.bplace ? 'red' : ""}}>{oops.bplace}</span><br />
                                        <input type="text" placeholder="Enter  phone" size="34" name="bphone" value={input.bphone}  onChange={inputchange} onClick={()=>{setoops({...oops,'bphone':''})}}/><br />
                                        <span style={{color:oops.bphone ? 'red' : ""}}>{oops.bphone}</span><br />
                                        <input type="text" placeholder="Enter username" size="34" name="username" value={input.username}  onChange={inputchange} onClick={()=>{setoops({...oops,'username':''})}}/><br />
                                        <span style={{color:oops.username ? 'red' : ""}}>{oops.username}</span><br />
                                        <input type="text" placeholder="Enter  password" size="34" name="password" value={input.password}  onChange={inputchange} onClick={()=>{setoops({...oops,'password':''})}}/><br />
                                        <span style={{color:oops.password ? 'red' : ""}}>{oops.password}</span> <br /><br />

                                        <button type="button" class="btn btn-danger"  onClick={dataadd}>Register</button>
                                    </form>
                          
                            </div>

                            <img src={Regcar} alt="" className='Regcar' />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
