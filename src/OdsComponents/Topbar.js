import React from 'react'
import { Helmet } from 'react-helmet'

export const Topbar = () => {

    const style2 = {
        visibility: "visible; animation-delay: 0.1s; animation-name: fadeIn;"
    }

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



            {/*TopBar-Start*/}

            <div class="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s" style={style2}>
                <div class="row gx-0 d-none d-lg-flex">
                    <div class="col-lg-7 px-5 text-start">
                        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small class="fa fa-map-marker-alt text-primary me-2"></small>
                            <small>Ahmedabad, Gujarat</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center py-3">
                            <small class="far fa-clock text-primary me-2"></small>
                            <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                        </div>
                    </div>
                    <div class="col-lg-5 px-5 text-end">
                        <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small class="fa fa-phone-alt text-primary me-2"></small>
                            <small>+91 9328179487</small>
                        </div>
                        <div class="h-100 d-inline-flex align-items-center">
                            <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-sm-square rounded-circle bg-white text-primary me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                            <a class="btn btn-sm-square rounded-circle bg-white text-primary me-0" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/*TopBar-end*/}

        </div>
    )
}
