// import React from 'react'
import NavbarRB from '../component/NavbarRB'
import '../component/Seller.css'
import Regcar from '../component/regcar.png'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Seller() {
    const navigate = useNavigate();
    const [input, setinput] = useState({
        sname: '',
        splace: '',
        sphone: '',
        username: '',
        password: '',
        // role: '',

    })

    const [oops,setoops] = useState({})
    const [issubmit,setsubmit] = useState(false)    
    // const [isverified,setverified] = useState(false)    


    const validate=(values)=>   {
        var error={}
        if(!values.sname){
            error.sname= 'name cannot be null'
        }

        if(!values.splace){
            error.splace= 'place cannot be null'
        }

        if(!values.sphone){
            error.sphone= 'phone cannot be null'
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

  
    const dataadd = (e) => {
        e.preventDefault();
        setoops(validate(input))
        setsubmit(true)
        if(Object.keys(oops).length===0 && issubmit){
            
        axios.post('http://127.0.0.1:8000/api/suserregisterAPIView', input).then((res) => {
            
            navigate("/Login")


        }).catch((err) => {
            console.log(err);
        })
        console.log(oops)
            
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
                                        <div className="v"> Enter Details </div> <br />
                                        <input type="text" placeholder="Enter Seller Name" size="34" value={input.sname} name="sname"  onChange={inputchange} onClick={()=>{setoops({...oops,'sname':''})}}/> <br />
                                        <span style={{color:oops.sname ? 'red' : ""}}>{oops.sname}</span><br />
                                        <input type="text" placeholder="Enter Place" size="34" name="splace" value={input.splace}  onChange={inputchange} onClick={()=>{setoops({...oops,'splace':''})}}/><br />
                                        <span style={{color:oops.splace ? 'red' : ""}}>{oops.splace}</span><br />
                                        <input type="text" placeholder="Enter  phone" size="34" name="sphone" value={input.sphone}  onChange={inputchange} onClick={()=>{setoops({...oops,'sphone':''})}}/><br />
                                        <span style={{color:oops.sphone ? 'red' : ""}}>{oops.sphone}</span><br />
                                        <input type="text" placeholder="Enter username" size="34" name="username" value={input.username}  onChange={inputchange} onClick={()=>{setoops({...oops,'username':''})}}/><br />
                                        <span style={{color:oops.username ? 'red' : ""}}>{oops.username}</span><br />
                                        <input type="text" placeholder="Enter  password" size="34" name="password" value={input.password}  onChange={inputchange} onClick={()=>{setoops({...oops,'password':''})}}/><br />
                                        <span style={{color:oops.password ? 'red' : ""}}>{oops.password}</span> <br /><br />

                                        <button type="button" className="btn btn-danger"  onClick={dataadd}>Register</button>
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
