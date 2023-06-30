import React from 'react'
import { Helmet } from 'react-helmet'
import { Spinner } from '../../OdsComponents/Spinner'
import { Topbar } from '../../OdsComponents/Topbar'
import { Navbar } from '../Navbar'

export const Team1 = () => {

    // team-style-start
    const style12 = {
        "max-width": "600px;"
    }
    // team-style-end

    return (
        <div>

            <Spinner />
            <Topbar />
            <Navbar />

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

            {/* <!-- Team Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={style12}>
                        <p class="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                        <h1>Our Experience Doctors</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-1.jpg" alt="" />
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Dr. Sai Chauhan</h5>
                                    <p class="text-primary">Dentist</p>
                                    <div class="team-social text-center">
                                        <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-2.jpg" alt="" />
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Dr.Devendra K. Doshi</h5>
                                    <p class="text-primary">Pathology</p>
                                    <div class="team-social text-center">
                                        <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-3.jpg" alt="" />
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Dr. Hetvi Surti</h5>
                                    <p class="text-primary">General Physician</p>
                                    <div class="team-social text-center">
                                        <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div class="team-item position-relative rounded overflow-hidden">
                                <div class="overflow-hidden">
                                    <img class="img-fluid" src="img/team-4.jpg" alt="" />
                                </div>
                                <div class="team-text bg-light text-center p-4">
                                    <h5>Dr. Amit Sangavi</h5>
                                    <p class="text-primary">ENT</p>
                                    <div class="team-social text-center">
                                        <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Team End --> */}

        </div>
    )
}
