
import Navbaradm from '../component/Navbaradm'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export default function Caredit() {

    const {id}=useParams();
  console.log(id)
  const [form, setform] = useState({})
  const [update, setupdate] = useState({})


  const inputchange=(event)=>{
    const{name,value}=event.target
    setform({...form,[name]:value})
    setupdate({...update,[name]:value})
  }
  console.log(update);

useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/api/singlecarview/${id}`).then((response) => {
    console.log("ther is nothing",response);
    setform(response.data.data)
    // console.log(form);

}).catch((err) => {
  console.log(err);
})
}, [])


const navigate=useNavigate()
// --------
const change =(e)=>{
  e.preventDefault()
  axios.put(`http://127.0.0.1:8000/api/updatesinglecar/${id}`,update,).then((response)=>{

    console.log(response);
    navigate('/Sellerhome')
  })
}
  return (
    <div>



            <Navbaradm />
            <center>
                <div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='foim    d-flex '>
                                    <div className='border border-danger     p-3 border-2 rounded-2 h-75 d-inline-block'>

                                        <form action="" className=''>
                                    
                                            <div class="v"> Enter Details </div> <br />
                                            <input type="text" placeholder="Enter vehicle name" size="34" name="name" onChange={inputchange}/><br /><br />
                                            <center><input type="file" placeholder="" size="34"  name="image"  onChange={inputchange}/></center><br /><br />
                                             <textarea name="descriptiion" id="" cols="36" rows="5" placeholder='Enter Description' onChange={inputchange} ></textarea><br /><br />
                                            <input type="text" placeholder="Enter asking price" size="34" name="price" onChange={inputchange} /><br /><br />
                                            <input type="text" placeholder="Enter  ownership" size="34" name="ownership"  onChange={inputchange}/><br /><br />
                                            <input type="text" placeholder="Enter paper details" size="34" name="paper" onChange={inputchange} /><br /><br />

                                            <button type="button" class="btn btn-danger"  onClick={change}>Post</button>
                                        </form>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </center>


        </div>

  )
}
