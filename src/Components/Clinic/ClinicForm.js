import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'

export const ClinicForm = () => {
  
  const [city,setcity]= useState()
  const [state,setstate]= useState()
  const { register,handleSubmit } = useForm()

  const submit = (data) => {

    axios.post("http://localhost:4001/clinic/addClinic", data).then((res) => {
        if (res.status === 201) {
            alert("Clinic Registered Successfully")

        }
        else {
            alert("Clinic Registeration Failed")
        }
    }).catch((err) => {
        console.log(err)
    })
}

const getcity = () => {

  axios.get("http://localhost:4001/city/getCity").then((res) => {
      setcity(res.data.data)
  })
}
useEffect(() => {

  getcity()

}, [])

const getstate = () => {

  axios.get("http://localhost:4001/state/getState").then((res) => {
      setstate(res.data.data)
  })
}
useEffect(() => {

  getstate()

}, [])

  return (
    <div>
      
      <Helmet>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />

        {/* <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js"></script>
        <script src="assets/js/script.js"></script> */}
      </Helmet>

      <div class="registration-form">
        <form onSubmit={handleSubmit(submit)}>
          <div class="form-icon">
            <span><i class="icon icon-home"></i></span>
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="name" placeholder="Name of Your Clinic" {...register('name')}/>
          </div>
          <div class="form-group">
            <input type="text" class="form-control item" id="timing" placeholder="Set Timing" {...register('timing')}/>
          </div>
          <div class="form-group">
            <textarea class="form-control item" id="address" placeholder="Address" {...register('address')}></textarea>
          </div>
          <div class="form-group">
            <input type="number" class="form-control item" id="phoneno" placeholder="Phone Number" {...register('phoneno')} />
          </div>
          <div class="form-group">
            <input type="number" class="form-control item" id="rating" placeholder="Rating" {...register('rating')} />
          </div>
          <div class="form-group">
                {/* <label>Select City</label> */}
                                    <select {...register('state')} class="form-control item" placeholder='Select State'>
                                    <option>Select State</option>
                                        {
                                            state?.map((state) => {
                                                return (
                                                    <option value={state._id}>{state.statename}</option>
                                                )
                                            }) 
                                        }
                                    </select>
          </div>
          <div class="form-group">
                {/* <label>Select City</label> */}
                                    <select {...register('city')} class="form-control item" placeholder='Select City'>
                                    <option>Select City</option>
                                        {
                                            city?.map((city) => {
                                                return (
                                                    <option value={city._id}>{city.cityname}</option>
                                                )
                                            }) 
                                        }
                                    </select>
          </div>
          
          <div class="form-group">
            <input type="number" class="form-control item" id="pincode" placeholder="Pincode" {...register('pincode')} />
          </div>
         
          <div class="form-group">
            <button class="btn btn-block create-account" type="submit">Register</button>
          </div>
        </form>
        {/* <div class="social-media">
          <h5>Sign up with social media</h5>
          <div class="social-icons">
            <a href="#"><i class="icon-social-facebook" title="Facebook"></i></a>
            <a href="#"><i class="icon-social-google" title="Google"></i></a>
            <a href="#"><i class="icon-social-twitter" title="Twitter"></i></a>
          </div>
        </div> */}
      </div>
    </div>
  )
}
