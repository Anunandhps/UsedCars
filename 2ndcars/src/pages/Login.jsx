import React from 'react'
import NavbarRB from '../component/NavbarRB'
import '../component/Login.css'
import Regcar from '../component/regcar.png'
import NavbarL from '../component/NavbarL'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export default function Login() {

    const navigate=useNavigate()

    const [input,setInput]=useState({
        username:'',
        userpassword:'',
    })

    console.log(input)



    const inputChange=(event)=>{
        const {name,value}=event.target
        setInput({...input,[name]:value})


    }



 
const submit=(e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:8000/api/loginAPIView',input).then((response)=>{


        
        
        
        localStorage.setItem('Login_id',JSON.stringify(response.data.data.login_id))
        localStorage.setItem('userid',JSON.stringify(response.data.data.userid))
        localStorage.setItem('username',JSON.stringify(response.data.data.username))
        localStorage.setItem('userpassword',JSON.stringify(response.data.data.userpassword))
        localStorage.setItem('role',JSON.stringify(response.data.data.role))
        console.log(response);
        console.log(input);


        if(response.data.data.role==='buyer'){
            navigate("/View")
            console.log('buyer logged successfully')
        }
        else if(response.data.data.role==='seller'){
            navigate("/Sellerhome")
            console.log('seller logged successfully')
        }
        else if(response.data.data.role==='admin'){
            navigate("/Admin")
            console.log('Admin logged successfully')
        }



    }).catch((error)=>{
        console.log(error.response.data.data);
        toast.error(error.respnse.data.data, {

            position: "top-center",
            autoclose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    })
    
}

   


    return (
        <div>
            <NavbarL />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='foim    d-flex '>
                            <div className='border border-danger    p-3 border-2 rounded-2 h-75 d-inline-block'>
                                
                                    <form action="" className=''>
                                        <br /><br />
                                        <div class="v"> Enter Details </div> <br />
                                      
                                        <input type="text" placeholder="Enter username" size="34" name="username" onChange={inputChange}/><br /><br />
                                        <input type="text" placeholder="Enter  password" size="34" name="password" onChange={inputChange}/><br /><br />

                                        <button type="button" class="btn btn-danger" onClick={submit}>Login</button>
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
