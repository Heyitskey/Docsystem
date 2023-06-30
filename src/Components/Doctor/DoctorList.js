import axios from 'axios'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link, useNavigate } from 'react-router-dom'

export const DoctorList = () => {
    const [docList, setdoc] = useState()
    // const navigate = useNavigate()
    const getDocApi = () => {
        axios.get("http://localhost:4001/doctor/getDoc").then((res) => {
            setdoc(res.data.data)
            // if (res.data.data) {
            //     console.log(res)
            //     navigate("/listDoc")
            // }
        }).catch((err) => {
            console.log(err)
        })
    }

    const deleteDoc = (id) => {
        axios.delete("http://localhost:4001/doctor/deleteDoc/" + id).then((res) => {
            getDocApi()
        }).catch((err) => {
            console.log(err)
        })
    }

    const [ClinicList, setclinic] = useState()

    const getClinicApi = () => {
        axios.get("http://localhost:4001/clinic/getClinic").then((res) => {
            setclinic(res.data.data)
        }).catch((err) => {
            console.log(err)
        })
    }

   
    // ///register its an array object
    // //handleSubmit its a function

    // const submit = (data) => {
    //     console.log(data);
    //     axios.post("http://localhost:4001/doctor/adddoc", data).then((res) => {
    //         if (res.data.data) {
    //             console.log(res)
    //             navigate("/docList")
    //         }
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    return (
        <div>
            <Helmet>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />


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
            <button className="btn btn-danger" onClick={getDocApi}>Doctor List</button>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope='col' class="bg-info">Dr. Profile ID</th>
                        <th scope='col' class="bg-info">User ID</th>
                        <th scope='col' class="bg-info">Qalification</th>
                        <th scope='col' class="bg-info">Specialization</th>
                        <th scope='col' class="bg-info">Profile Pic</th>
                        <th scope='col' class="bg-info">About</th>
                        <th scope='col' class="bg-info">Clinic</th>
                        <th scope='col' class="bg-info">Delete Doctor</th>


                    </tr>
                </thead>
                <tbody>
                    {
                        docList?.map((d) => {
                            return (
                                <tr>

                                    <th scope='row'>{d._id}</th>
                                    <td>{d.userId}</td>
                                    <td>{d.qualification}</td>
                                    <td>{d.specialization}</td>
                                    <td>{d.profile_pic}</td>
                                    <td>{d.about}</td>

                                    <td>
                                        <button className="btn btn-light"><Link to='/clinic'>Add Clinic</Link></button>
                                    </td>

                                    <td>
                                        <button className="btn btn-danger" onClick={() => { deleteDoc(d._id) }}>Delete</button>
                                    </td>

                                </tr>)
                        })
                    }
                </tbody>
            </table> 

            <br/>
            <br/>
            <br/>

            <button className="btn btn-danger" onClick={getClinicApi}>Clinic List</button>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope='col' class="bg-info">ID</th>
                        <th scope='col' class="bg-info">Clinic Name</th>
                        <th scope='col' class="bg-info">Timing</th>
                        <th scope='col' class="bg-info">Address</th>
                        <th scope='col' class="bg-info">Phone Number</th>
                        <th scope='col' class="bg-info">Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ClinicList?.map((c) => {
                            return (
                                <tr>

                                    <th scope='row'>{c._id}</th>
                                    <td>{c.name}</td>
                                    <td>{c.timing}</td>
                                    <td>{c.address}</td>
                                    <td>{c.phoneno}</td>
                                    <td>{c.pincode}</td>
                                  

                                   

                                </tr>)
                        })
                    }
                </tbody>
            </table>

        </div>
 
    )
}
