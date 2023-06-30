import React from 'react'
import { Helmet } from 'react-helmet'

export const Header = () => {
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

            {/* <!-- Header Start --> */}
            <div class="container-fluid header bg-primary p-0 mb-5">
                <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
                    <div class="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                        <h1 class="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
                        <div class="row g-4">
                            <div class="col-sm-4">
                                <div class="border-start border-light ps-4">
                                    <h2 class="text-white mb-1" data-toggle="counter-up">23</h2>
                                    <p class="text-light mb-0">Expert Doctors</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="border-start border-light ps-4">
                                    <h2 class="text-white mb-1" data-toggle="counter-up">50</h2>
                                    <p class="text-light mb-0">Medical Stuff</p>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <div class="border-start border-light ps-4">
                                    <h2 class="text-white mb-1" data-toggle="counter-up">100</h2>
                                    <p class="text-light mb-0">Total Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="owl-carousel header-carousel">
                            <div class="owl-carousel-item position-relative">
                                <img class="img-fluid" src="img/carousel-1.jpg" alt="" />
                                <div class="owl-carousel-text">
                                    <h1 class="display-1 text-white mb-0">Pathology</h1>
                                </div>
                            </div>
                            <div class="owl-carousel-item position-relative">
                                <img class="img-fluid" src="img/carousel-2.jpg" alt="" />
                                <div class="owl-carousel-text">
                                    <h1 class="display-1 text-white mb-0">Neurology</h1>
                                </div>
                            </div>
                            <div class="owl-carousel-item position-relative">
                                <img class="img-fluid" src="img/carousel-3.jpg" alt="" />
                                <div class="owl-carousel-text">
                                    <h1 class="display-1 text-white mb-0">Cardiology</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}


        </div>
    )
}
