import React from 'react'
import { Helmet } from 'react-helmet'
import { Spinner } from '../OdsComponents/Spinner'
import { Topbar } from '../OdsComponents/Topbar'
import { Navbar } from './Navbar'

export const Service1 = () => {

    // service-style-start
    const style6 = {
        "max-width": "600px;"
    }

    const style7 = {
        "width": "65px;",
        "height": "65px;"
    }
    // service-style-end

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


            {/* <!-- Service Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={style6}>
                        <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
                        <h1>Health Care Solutions</h1>
                    </div>
                    <div class="row g-4">
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-light rounded h-100 p-5">
                                <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={style7}>
                                    <i class="fa fa-heartbeat text-primary fs-4"></i>
                                </div>
                                <h4 class="mb-3">Cardiology</h4>
                                <p class="mb-4">Cardiology is the study and treatment of disorders of the heart and the blood vessels.</p>
                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-light rounded h-100 p-5">
                                <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={style7}>
                                    <i class="fa fa-x-ray text-primary fs-4"></i>
                                </div>
                                <h4 class="mb-3">Physician</h4>
                                <p class="mb-4">The science of the causes and effects of diseases, especially the branch of medicine.</p>
                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-light rounded h-100 p-5">
                                <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={style7}>
                                    <i class="fa fa-brain text-primary fs-4"></i>
                                </div>
                                <h4 class="mb-3">Neurology</h4>
                                <p class="mb-4">The branch of medicine that deals with the diagnosis and treatment of disorders of the nervous system.</p>
                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item bg-light rounded h-100 p-5">
                                <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={style7}>
                                    <i class="fa fa-wheelchair text-primary fs-4"></i>
                                </div>
                                <h4 class="mb-3">Orthopedics</h4>
                                <p class="mb-4">Relating to the branch of medicine dealing with the correction of deformities of bones or muscles</p>
                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item bg-light rounded h-100 p-5">
                                <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={style7}>
                                    <i class="fa fa-tooth text-primary fs-4"></i>
                                </div>
                                <h4 class="mb-3">Dental Surgery</h4>
                                <p class="mb-4">A person who is qualified to treat diseases and other conditions that affect the teeth and gums.</p>
                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item bg-light rounded h-100 p-5">
                                <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={style7}>
                                    <i class="fa fa-vials text-primary fs-4"></i>
                                </div>
                                <h4 class="mb-3">Laboratory</h4>
                                <p class="mb-4">A room or building equipped for scientific experiments, research, or teaching, or for the manufacture of drugs or chemicals.</p>
                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


        </div>
    )
}
