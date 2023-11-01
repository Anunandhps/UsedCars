import React from 'react'

export default function Payment() {
  return (
    <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">




              <h1 class="modal-title fs-5" id="exampleModalLabel">Select Payment method</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">


              <div classname='p-3 mb-2 bg-success text-white' >
                <center>  <label htmlFor="">Pay using credit/Debit card</label> &nbsp; &nbsp;<input type="radio" name='1' /><br /><br />    </center>

                <input type="text" placeholder='Enter card number' className='cardnoinput' />  <br /> <br />
                <div className='mcv'>
                  <input type="text" placeholder='mm/year' className='cvv' /> <input type="text" placeholder='cvv' className='cvv' /><img src={visa} alt="" className='visa' />
                </div><br />

                <hr />


                <center>  <label htmlFor="">Pay using UPI/BHIM</label> &nbsp; &nbsp;<input type="radio" name='1' /><br /><br />    </center>
                <br />
                <div className='allbuttonupi'>
                  <div className='d-flex justify-content-evenly'>
                    <button className=' btn btn-light'><img src={gpay} alt="" className='upi' /></button>
                    <button className=' btn btn-light'><img src={bhim} alt="" className='upi ' /></button>

                  </div><br />
                  <div className='d-flex justify-content-evenly'>
                    <button className='btn btn-light' ><img src={paytm} alt="" className='upi ' /></button>
                    <button className='btn btn-light'><img src={phonepe} alt="" className='upi ' /></button>
                  </div>
                </div>
              </div>




            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger">Pay</button>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
