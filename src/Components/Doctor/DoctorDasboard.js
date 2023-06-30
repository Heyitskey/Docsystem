import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { DashContentDoc } from './DashContentDoc';
import { DocNav } from './DocNav';

export const DoctorDasboard = () => {

    // const style1 = {
    //     visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn;"
    // }
    // const style2 = {
    //     height: "100px"
    // }

    // const [user, setuser] = useState('')


    // const getLoggedinUserData = () =>{
    //     var id = localStorage.getItem("_id")
    //     axios.get("http://localhost:4001/register/getregiuser/"+id).then((res)=>{
    //         console.log(res.data.data)
    //         setuser(res.data.data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // useEffect(() => {

    //     getLoggedinUserData()

    // }, [])

    // const logout = () => {
    //     localStorage.clear();
    //     alert("Logout Successfullyyy Done ....");
    //     Navigate("/");
    // };

    // const [docList, setdoc] = useState()
    // var id =  useParams().id

    // const getDocApi = () => {
    //     var id = localStorage.getItem("_id")
    //     axios.get("http://localhost:4001/doctor/getDoc/"+id).then((res) => {
    //         setdoc(res.data.data)
    //         console.log(res.data.data)
    //         // if (res.data.data) {
    //         //     console.log(res)
    //         //     navigate("/listDoc")
    //         // }
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }
    // useEffect(() => {

    //     getDocApi()

    // }, [])


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

            <DocNav />

            <DashContentDoc />

        </div>
    )
}





