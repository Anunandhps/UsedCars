import React, { useEffect, useState } from 'react'

import axios from 'axios'

export default function Approved() {

    const [state, setState] = useState([])

    const buyerid = localStorage.getItem("userid")
    console.log('buyerid', buyerid);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/bookingapproved/${buyerid}`).then((response) => {
            console.log(response);
            setState(response.data.data)

        }).catch((error) => { console.log(error); })
    }, [])
    console.log(state);

    return (
        <div>
            <div>
          
            </div>

            <div className='container-don'>

                <div className="row-s pt-5">


                    <div className="col-3">
                        <div className="card-z">

                            {state[0] ?
                                <>
                                    {state?.map((data) => (
                                        <div>


                                            <div>

                                                <img src={`/lgrgvw/${data.image}`} class="card-z-img-top" />
                                                <h6> name:{data.name}</h6>
                                                <h6>desc:{data.descriptiion}</h6>
                                               
                                                <h6>price:{data.price}</h6>
                                                <h6>ownership:{data.ownership}</h6>

                                            </div>
                                        </div>

                                    ))}
                                </>
                                : <h6>data added</h6>
                            }

                        </div>


                    </div>

                </div>
            </div>


        </div>
    )
}

