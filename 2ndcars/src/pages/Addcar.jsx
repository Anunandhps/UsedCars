// import React from 'react'
import Navbaradm from '../component/Navbaradm'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

export default function Buyer() {
    const Navigate = useNavigate() 
    const seller_id = localStorage.getItem('userid')
    console.log(seller_id);

    const [input, setinput] = useState({
        seller_id: seller_id,


    })



    const inputchange = (event) => {
        const {name,value} = event.target
        setinput({ ...input, [name]: value })


    }
    console.log(input);

    const dataadd = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', input.name)
        formData.append('image', input.image)
        formData.append('descriptiion', input.descriptiion)
        formData.append('price', input.price)
        formData.append('ownership', input.ownership)
        formData.append('paper', input.paper)
        formData.append('seller_id', input.seller_id)
       


        axios.post('http://127.0.0.1:8000/api/addcar', formData).then((res) => {
            console.log(res);
            Navigate('/sellerhome')


        }).catch((err) => {
            console.log(err);
        })
        console.log(input)
            




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
                                    <div className='border border-danger    p-3 border-2 rounded-2 h-75 d-inline-block'>

                                        <form action="" className=''>
                                    
                                            <div class="v"> Enter Details </div> <br />
                                            <input type="text" placeholder="Enter vehicle name" size="34" name="name" onChange={inputchange}/><br /><br />
                                            <center><input type="file" placeholder="" size="34"  name="image"  onChange={(e)=>setinput({...input,image:e.target.files[0]})}/></center><br /><br />
                                             <textarea name="descriptiion" id="" cols="36" rows="5" placeholder='Enter Description'  onChange={inputchange}></textarea><br /><br />
                                            <input type="text" placeholder="Enter asking price" size="34" name="price"  onChange={inputchange}/><br /><br />
                                            <input type="text" placeholder="Enter  ownership" size="34" name="ownership"  onChange={inputchange}/><br /><br />
                                            <input type="text" placeholder="Enter paper details" size="34" name="paper"  onChange={inputchange}/><br /><br />

                                            <button type="button" class="btn btn-danger"  onClick={dataadd}>Post</button>
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
