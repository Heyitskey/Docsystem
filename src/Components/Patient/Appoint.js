import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'



import { PatientNav } from './PatientNav'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

export const Appoint = () => {

    // appointment-style-start
    const style9 = {
        "width": "55px;",
        "height": "55px;"
    }
    const style13 = {
        "height": "55px;"
    }
    // appointment-style-end
    const { register, handleSubmit } = useForm()

    const [patientId, setpatient] = useState()
    const [docId, setdoc] = useState()
    const [clinicId, setclinic] = useState()

    const getpatient = () => {

        axios.get("http://localhost:4001/register/getregiuser").then((res) => {
            setpatient(res.data.data)
        })
    }
    useEffect(() => {

        getpatient()

    }, [])

    const getdoc = () => {

        axios.get("http://localhost:4001/doctor/getDoc").then((res) => {
            setdoc(res.data.data)
        })
    }
    useEffect(() => {

        getdoc()

    }, [])

    const getclinic = () => {

        axios.get("http://localhost:4001/clinic/getClinic").then((res) => {
            setclinic(res.data.data)
        })
    }
    useEffect(() => {

        getclinic()

    }, [])

    const submit = (data) => {

        axios.post("http://localhost:4001/appointment/add", data).then((res) => {
            if (res.status === 201) {
                alert("Appointment Booked")

            }
            else {
                alert("Appointment Booking Failed")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>


            <PatientNav />


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


            {/* <!-- Appointment Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p class="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                            <h1 class="mb-4">Make An Appointment To Visit Our Doctor</h1>
                            <p class="mb-4">A doctor’s job is so much more than just treating patients; it’s about healing the world.The number one rule of healthcare is to never get sick on a weekend.</p>
                            <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={style9}>
                                    <i class="fa fa-phone-alt text-primary"></i>
                                </div>
                                <div class="ms-4">
                                    <p class="mb-2">Call Us Now</p>
                                    <h5 class="mb-0">07926756434</h5>
                                </div>
                            </div>
                            <div class="bg-light rounded d-flex align-items-center p-5">
                                <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={style9}>
                                    <i class="fa fa-envelope-open text-primary"></i>
                                </div>
                                <div class="ms-4">
                                    <p class="mb-2">Mail Us Now</p>
                                    <h5 class="mb-0">healthcure90@gmail.com</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                                <form onSubmit={handleSubmit(submit)}>
                                    <div class="row g-3">
                                        <div class="col-12 col-sm-6">
                                            <select {...register('patientId')} class="form-select border-0" placeholder='Patient Name' style={style13}>
                                                <option>Patient Name</option>
                                                {
                                                    patientId?.map((p) => {
                                                        return (
                                                            <option value={p._id}>{p.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                            {/* <input type="text" class="form-control border-0" placeholder="Patient Name" {...register('patientId')} style={style13} /> */}

                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <select {...register('patientId')} class="form-select border-0" placeholder='Patient Age' style={style13}>
                                                <option>Patient Age</option>
                                                {
                                                    patientId?.map((p) => {
                                                        return (
                                                            <option value={p._id}>{p.age}</option>
                                                        )
                                                    })
                                                }
                                            </select>


                                            {/* <input type="number" class="form-control border-0" placeholder="Patient Age" {...register('patientId')} style={style13} /> */}

                                        </div>
                                        <div class="col-12 col-sm-6">
                                            {/* <label for="gender" class="form-lable">Gender </label>
                                            <input type="radio" name='gender' value="male" id="male" {...register("patientId")} />
                                            <label for="male" >Male</label>
                                            <input type="radio" name='gender' value="female" id="female" {...register("patientId")} />
                                            <label for="female">Female</label> */}
                                            <select {...register('docId')} class="form-select border-0" placeholder='Select Doctor' style={style13}>
                                                <option>Select Doctor</option>
                                                {
                                                    docId?.map((d) => {
                                                        return (
                                                            <option value={d?._id}>{d?.userId?.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <select {...register('clinicId')} class="form-select border-0" placeholder='Select Clinic' style={style13}>
                                                <option>Select Clinic</option>
                                                {
                                                    clinicId?.map((c) => {
                                                        return (
                                                            <option value={c._id}>{c.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>

                                        <div class="col-12 col-sm-6">
                                            {/* <div class="date" id="date" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control border-0 datetimepicker-input"
                                                    placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={style13} />
                                            </div> */}
                                            <input type="date" class="form-control border-0" placeholder="Date" {...register('date')} style={style13} />
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            {/* <div class="time" id="time" data-target-input="nearest">
                                                <input type="text"
                                                    class="form-control border-0 datetimepicker-input"
                                                    placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={style13} />
                                            </div> */}
                                            <input type="time" class="form-control border-0" placeholder="Time" {...register('time')} style={style13} />
                                        </div>

                                        <div class="col-12">
                                            <textarea class="form-control border-0" rows="5" placeholder="Describe your problem" {...register('complain')}></textarea>
                                        </div>
                                        
                                        <div class="col-12">
                                        
                                            <button class="btn btn-primary w-100 py-3" type="submit">Book Appointment
                                            (*Pay After Consultancy)</button>
                                        </div>
                                        <div class="col-12">
                                            <Link to='/payment' class="btn btn-primary w-100 py-3">Online Booking
                                            (*Coming Soon)</Link>
                                            {/* <button class="btn btn-primary w-100 py-3" type="submit">Book Appointment</button> */}
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appointment End --> */}


        </div>
    )
}
