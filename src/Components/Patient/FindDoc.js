import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { PatientDashboard } from './PatientDashboard'

export const FindDoc = () => {

    const style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn;"
    }
    
    const [user, setuser] = useState('')

    const getLoggedinUserData = () => {
        var id = localStorage.getItem("_id")
        axios.get("http://localhost:4001/register/getregiuser/" + id).then((res) => {
            console.log(res.data.data)
            setuser(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {

       
        getLoggedinUserData()

    }, [])


    const [docList, setdoc] = useState()
    // const navigate = useNavigate()
    const getDocApi = () => {
        axios.get("http://localhost:4001/doctor/getDoc").then((res) => {
            setdoc(res.data.data)
            console.log(res.data.data)
            // if (res.data.data) {
            //     console.log(res)
            //     navigate("/listDoc")
            // }
        }).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {

        getDocApi()

    }, [])


    return (
        <div>
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
            {/* <PatientDashboard/> */}
            {/*Navbar-start*/}
            
            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s" style={style1}>
                <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 class="m-0 text-primary"><i class="fas fa-bed me-3"></i> Welcome '{user.name}'</h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        {/* <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="about.html" class="nav-item nav-link">About</a>
                        <a href="service.html" class="nav-item nav-link">Service</a> */}
                        <li>
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                        </li>
                        <li>
                            <Link to="/findDoc" className="nav-item nav-link">Find Doctors</Link>
                        </li>
                        <li>
                            <Link to="/appoint" className="nav-item nav-link">Appointment</Link>
                        </li>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{user.name}</a>
                            <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                                <Link to="/patientprofile" class="dropdown-item">Update Profile</Link>
                                <Link to="/team" class="dropdown-item">My Appointment</Link>
                                <Link to="/testimonial" class="dropdown-item">My Test</Link>
                                <Link to="/error" class="dropdown-item">Logout</Link>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </nav>

            {/*Navbar-end*/}
            <div class="row g-4">
                {

                    docList?.map((d) => {
 
                        return (

                            <div class="col-lg-3 col-md-60 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                                <div class="team-item position-relative rounded overflow-hidden">
                                    <div class="overflow-hidden">
                                        
                                        <img class="img-fluid" src={`${process.env.PUBLIC_URL}/fileuploads/${d?.profile_pic.name}`} alt="Image" /> 
                                    </div>
                                    <div class="team-text bg-light text-center p-4">
                                        <h5>{d.userId.name}</h5>
                                        
                                        {/* <h5>{d.experience}</h5> */}
                                        <p class="text-primary">{d.specialization}</p>
                                       <p class="text-primary"><Link  to={`/viewprofile/${d._id}`}>View Profile</Link></p>
                                        <div class="team-social text-center">
                                            <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                            <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                            <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )

                    })

                }
            </div>
        </div>
    )
}


{/* <Link  to={`/viewprofile/${d._id}`}>View Profile</Link> */}