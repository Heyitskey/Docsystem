import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Footer } from '../../OdsComponents/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const DashContent = () => {

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
    // useEffect(() => {

       
    //     getLoggedinUserData()

    // }, [])

    const [doc, setdoc] = useState([])
    const [flag, setflag] = useState('')
    const getAllDoc = () => {

        axios.get("http://localhost:4001/doctor/getDoc").then((res) => {

            console.log(res.data)
            setdoc(res.data.data)
            setflag('')

        }).catch((err) => {

            console.log(err)

        })

    }
    useEffect(() => {

        getAllDoc()

    }, [])

    const searchHandler = (e) => {
        console.log(e.target.value)
        const searchValue = e.target.value
        axios.get(`http://localhost:4001/doctor/search/${searchValue}`).then((res) => {
            console.log(res.data)
            setdoc(res.data.data)
        }).catch((err) => {

            getAllDoc()
            setflag(<tr><td colSpan="3">No Doctor found</td></tr>)
        })

    }


    return (
        <div>
            <Helmet>
                <link type="image/x-icon" href="assestpro/img/favicon.png" rel="icon" />

                <link rel="stylesheet" href="assestpro/css/bootstrap.min.css" />

                <link rel="stylesheet" href="assestpro/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="assestpro/plugins/fontawesome/css/all.min.css" />

                <link rel="stylesheet" href="assestpro/css/aos.css" />

                <link rel="stylesheet" href="assestpro/css/style.css" />
            </Helmet>

            {/* <div>
                <h1>Doctors</h1>
                <input type="text" placeholder="Search Doctor By Specialization" onChange={(e) => { searchHandler(e) }} />
                <table>
                    <thead>
                        <tr>
                            
                            <th>Doctor Specialization</th>
                            <th>Doctor About</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doc?.map((d) => {
                                return (
                                    <tr>
                                        <td>{d.specialization}</td>
                                        <td>{d.about}</td>
                                       
                                    </tr>
                                )
                            }
                            )
                        }
                        <h1>{flag}</h1>
                    </tbody>
                </table>
            </div> */}

            <section class="section section-search">
                <div class="container-fluid">
                    <div class="banner-wrapper">
                        <div class="banner-header text-center">
                            <h1>Search Doctor, Make an Appointment</h1>
                            <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
                        </div>
                        <div class="search-box">
                            <form action="/home">
                                <div class="form-group search-location">
                                    <input type="text" class="form-control" placeholder="Search Location" fdprocessedid="z8l13o" />
                                    <span class="form-text">Based on your Location</span>
                                </div>
                                <div class="form-group search-info">
                                 <input type="text" class="form-control" placeholder="Search Doctor By Specialization" onChange={(e) => { searchHandler(e) }} />
                                    {/* <input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" fdprocessedid="ykwhv5" /> */}
                                    <span class="form-text">Ex : Dental or Sugar Check up etc</span>
                                </div>
                                <button type="submit" class="btn btn-primary search-btn mt-0" fdprocessedid="gnizfm">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                                        </path>
                                    </svg>
                                    <span>Search</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <div class="row g-4">
                {

                    doc?.map((d) => {
 
                        return (

                            <div class="col-lg-3 col-md-60 wow fadeInUp" data-wow-delay="0.1s" style={style1}>
                                <div class="team-item position-relative rounded overflow-hidden">
                                    <div class="overflow-hidden">
                                        
                                        <img class="img-fluid" src={`${process.env.PUBLIC_URL}/fileuploads/${d?.profile_pic.name}`} alt="Image" /> 
                                    </div>
                                    <div class="team-text bg-light text-center p-4">
                                        <h5>{d?.userId?.name}</h5>
                                        
                                        {/* <h5>{d.qualification}</h5> */}
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

            <section class="section home-tile-section">
                <div class="container-fluid"><div class="row">
                    <div class="col-md-9 m-auto">
                        <div class="section-header text-center"><h2>What are you looking for?</h2></div><div class="row"><div class="col-lg-4 mb-3">
                            <div class="card text-center doctor-book-card">
                                <img src="assestpro/img/doctors/doctor-07.jpg" alt="" class="img-fluid" />
                                <div class="doctor-book-card-content tile-card-content-1">
                                    <div><h3 class="card-title mb-0">Visit a Doctor</h3>
                                        <Link to='/findDoc' class="btn book-btn1 px-3 py-2 mt-3" tabindex="0" href="/react/template/patient/search-doctor">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div class="col-lg-4 mb-3">
                                <div class="card text-center doctor-book-card">
                                    <img src="assestpro/img/img-pharmacy1.jpg" alt="" class="img-fluid" />
                                    <div class="doctor-book-card-content tile-card-content-1"><div>
                                        <h3 class="card-title mb-0">Find a Pharmacy</h3>
                                        <a class="btn book-btn1 px-3 py-2 mt-3" tabindex="0" href="/react/template/Pharmacy/pharmacy-search">Coming Soon</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 mb-3">
                                <div class="card text-center doctor-book-card">
                                    <img src="assestpro/img/lab-image.jpg" alt="" class="img-fluid" />
                                    <div class="doctor-book-card-content tile-card-content-1">
                                        <div>
                                            <h3 class="card-title mb-0">Find a Lab</h3><a href="" class="btn book-btn1 px-3 py-2 mt-3" tabindex="0">Coming Soon</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
