import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const UserRegi = () => {
    const style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn;"
    }
    // const style2 = {
    //     height: "100px"
    // }



    const notify = () => toast.success('User Registered Successfully', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const { register, handleSubmit } = useForm();

    const [roles, setroles] = useState() 
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const navigate = useNavigate()


    const submit = (data) => {

        var userData = {
            name:data.name,
            email:data.email,
            age:data.age,
            gender:data.gender,
            password:data.password,
            role:data.role,
            lat:latitude,
            long:longitude

        }

        axios.post("http://localhost:4001/register/regiuser", userData).then((res) => {
            if (res.status === 201) {
                alert("User Registered Successfully")
                console.log(res.data.data)
                navigate("/userLogin")
            }
            else {
                alert("User Registeration Failed")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
            },
            error => console.error(error),
            { enableHighAccuracy: true }
          );

        getRoles();
    }, [])

    const getRoles = () => {

        axios.get("http://localhost:4001/role/get").then((res) => {
            setroles(res.data.data)
        })
    }




    return (
        <div class="bg-image-1">
            <Helmet>

                {/* <!-- Favicon --> */}
                <link href="img/favicon.ico" rel="icon" />

                {/* <!-- Google Web Fonts --> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap" rel="stylesheet" />

                {/* <!-- Icon Font Stylesheet --> */}
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

                {/* <!-- Libraries Stylesheet --> */}
                <link href="lib/animate/animate.min.css" rel="stylesheet" />
                <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

                {/* <!-- Customized Bootstrap Stylesheet --> */}
                <link href="css/bootstrap.min.css" rel="stylesheet" />

                {/* <!-- Template Stylesheet --> */}
                <link href="css/style.css" rel="stylesheet" />

                {/* <!-- JavaScript Libraries --> */}
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/tempusdominus/js/moment.min.js"></script>
                <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
                <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

                {/* <!-- Template Javascript --> */}
                <script src="js/main.js"></script>


            </Helmet>

            <div class="col-lg-60 wow fadeIn" data-wow-delay="0.1s" style={style1}>

                <div class="bg-light rounded p-5">

                    <h1 class="mb-4">Hello User...!<br></br>Please Register Yourself Here!</h1>

                    <form onSubmit={handleSubmit(submit)}>
                        <div class="row g-3">
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" {...register("name")} />
                                    <label for="name">Enter Your Name</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="email" class="form-control" id="email" placeholder="Your Email" {...register("email")} />
                                    <label for="email">Enter Your Email</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="age" placeholder="Age" {...register("age")} />
                                    <label for="age">Enter Your Age</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <label for="gender">Gender </label>
                                <input type="radio" name='gender' value="male" id="male" {...register("gender")} />
                                <label for="male" >Male</label>
                                <input type="radio" name='gender' value="female" id="female" {...register("gender")} />
                                <label for="female">Female</label>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    
                                    <select {...register('role')} class="form-control">
                                    <option>Select Role</option>
                                        {
                                            roles?.map((role) => {
                                                return (
                                                    <option value={role._id}>{role.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="password" placeholder="Password" {...register("password")} />
                                    <label for="password">Set Password</label>
                                </div>
                            </div>
                            {/* <div class="col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a message here" id="message" style={style2}></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>*/}
                            <div class="col-12">
                                <button onClick={notify} class="btn btn-primary w-100 py-3" type="submit">Register</button>
                                <ToastContainer />

                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="login">
                                    <Link to='/userLogin' class="btn btn-primary w-100 py-3" >Already Register? / Login</Link></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
