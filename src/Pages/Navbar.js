import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Slider from 'react-slick'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

export const Navbar = () => {

    const style1 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn; top: -100px;"
    }

    const style2 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn;"
    }

    const style3 = {
        transform: "translate3d(-1519px, 0px, 0px); transition: all 0s ease 0s; width: 5318px;"
    }

    const style4 = {
        width: "759.6px;"
    }

    // service-style-start
    const style6 = {
        "max-width": "600px;"
    }

    const style7 = {
        "width": "65px;",
        "height": "65px;"
    }
    // service-style-end

    // feature-style-Start
    const style9 = {
        "width": "55px;",
        "height": "55px;"
    }

    const style10 = {
        "min-height": "400px;"
    }

    const style11 = {
        "object-fit": "cover;"
    }
    // feature-style-end


    // team-style-start
    const style12 = {
        "max-width": "600px;"
    }
    // team-style-end

    //footer-style-start
    const style15 = {
        "max-width": "400px;"
    }
    //footer-style-end

    const style8 = {
        "margin-top": "-25%"
    }


    // appointment-style-start
    const style13 = {
        "height": "55px;"
    }
    // appointment-style-end


    //testimonial-style-start
    const style14 = {
        "width": "100px;",
        "height": "100px;"
    }
    //testimonial-style-end

    // const settings = {
    //     infinite: true,
    //     dots: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     lazyLoad: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,

    // };

    // Header carousel

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

            {/*Navbar-start*/}

            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s" style={style1}>
                <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 class="m-0 text-primary"><i class="far fa-hospital me-3"></i>Health Cure</h1>
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
                            <Link to="/about" className="nav-item nav-link">About</Link>
                        </li>
                        <li>
                            <Link to="/service" className="nav-item nav-link">Service</Link>
                        </li>

                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                                <Link to="/feature" class="dropdown-item">Feature</Link>
                                <Link to="/team" class="dropdown-item">Our Doctor</Link>
                                <Link to="/testimonial" class="dropdown-item">Testimonial</Link>
                                <Link to="/error" class="dropdown-item">404 Page</Link>
                            </div>
                        </div>
                        <li>
                            <Link to="/appointment" className="nav-item nav-link">Appointment</Link>
                        </li>

                    </div>
                    <Link to='/userRegi' class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">REGISTER<i class="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>

            {/*Navbar-end*/}


            {/* <!-- Back to Top --> */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>

        </div>
    )
}
