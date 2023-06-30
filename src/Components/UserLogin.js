import React from 'react'
import { Helmet } from 'react-helmet'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom';

export const UserLogin = () => {
    const style1 = {
        visibility: "visible; animation-delay: 0.5s; animation-name: fadeInUp;"
    }

    const style2 = {
        height: "55px;"
    }

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const submit = (data) => {

        axios.post('http://localhost:4001/register/loginuser', data).then((res) => {
            if (res.data.data) {
                console.log("user found....Login Successful")
                //console.log(res.data.data[0].role.name)
                console.log(res.data.data[0]?._id)
                localStorage.setItem("_id", res.data.data[0]?._id)
                console.log(res.data.data[0]?.role.name)
                if (res.data.data[0]?.role.name === "Doctor") {

                    navigate("/docdas")
                }
                else if (res.data.data[0]?.role.name === "Patient") {
                    navigate("/paidas")
                }
                else{
                    navigate("/admindas")
                }
                //role... 

            }

        }).catch((err) => {
            console.log("user not found....Login Failed")
            alert("Login Failed")
        })
    }

    return (
        <div>
            <Helmet>

                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />


                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                <link rel="stylesheet" href="css/stylee.css" />


            </Helmet>


            <div class="box-form">
                <div class="left">
                    <div class="overlay">
                        <h1>Hello User</h1>
                        <p>Fill Up The Login Form For Login in Online Doctor System</p>
                        <span>
                            <p>Login With Social Media</p>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </span>
                    </div>
                </div>


                <div class="right">
                    <h5>Login</h5>
                    <p>Don't have an account? <a href="#">Register Your Self</a> it takes less than a minute</p>
                    <form onSubmit={handleSubmit(submit)}>
                        <div class="inputs">
                            <input type="email" placeholder="Enter Your Email" {...register('email')} />
                            <br />
                            <input type="password" placeholder="Enter Your Password" {...register('password')} />
                        </div>

                        <br /><br />

                        <div class="remember-me--forget-password">

                            <label>
                                <input type="checkbox" name="item" checked="" />
                                <span class="text-checkbox">Remember me</span>
                            </label>
                            <p>forget password?</p>
                        </div>

                        <br />
                        <button class="btn btn-primary w-100 py-3" type='submit'>Login</button>
                    </form>
                </div>

            </div>


        </div>
    )
}
