import React from 'react'
import { Helmet } from 'react-helmet'
import { PatientDashboard } from './PatientDashboard'
import { PatientNav } from './PatientNav'

export const PatientProfile = () => {
    
    return (
        <div>
            <Helmet>
                <link rel="stylesheet" href="profonts/material-design-iconic-font/css/material-design-iconic-font.css" />
                <link rel="stylesheet" href="procss/style.css" />

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
            <PatientNav/> 
            <div class="wrapper">
                <form action="">
                    <div id="wizard">
                        {/* <!-- SECTION 1 --> */}
                        <h4></h4>
                        <section>
                            <div class="form-header">
                                <div class="avartar">
                                    <a href="#">
                                        <img src="images/avartar.png" alt="" />
                                    </a>
                                    <div class="avartar-picker">
                                        <input type="file" name="file-1[]" id="file-1" class="inputfile" data-multiple-caption="{count} files selected" multiple />
                                        <label for="file-1">
                                            <i class="zmdi zmdi-camera"></i>
                                            <span>Choose Picture</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-holder active">
                                        <input type="text" placeholder="First Name" class="form-control" />
                                    </div>
                                    <div class="form-holder">
                                        <input type="text" placeholder="Last Name" class="form-control" />
                                    </div>
                                    <div class="form-holder">
                                        <input type="text" placeholder="Team Name" class="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-holder">
                                <input type="text" placeholder="Email" class="form-control" />
                            </div>
                            <div class="form-holder">
                                <input type="password" placeholder="Create a password" class="form-control" />
                            </div>
                        </section>
                        <div>
                            <button class="btn btn-primary w-100 py-3">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


{/* <div class="col-md-7 col-lg-8 col-xl-9">
                <div class="card">
                <div class="card-body"><h4 class="card-title">Basic Information</h4>
                    <div class="row form-row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <div class="change-avatar">
                                    <div class="profile-img">
                                        <img src="/react/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg" alt="User" />
                                    </div><div class="upload-img"><div class="change-photo-btn"><span><i class="fa fa-upload">
                                    </i> Upload Photo</span>
                                        <input type="file" class="upload" />
                                    </div>
                                        <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6"><div class="form-group">
                            <label>Username <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" readonly="" fdprocessedid="7qiy2q" />
                        </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" readonly="" fdprocessedid="i8b7v" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>First Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" fdprocessedid="j1k1ha" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Last Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" fdprocessedid="resfhh" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Phone Number</label><input type="text" class="form-control" fdprocessedid="rloom7" />
                            </div>
                        </div>
                        <div class="col-md-6"><div class="form-group"><label>Gender</label><select class="select form-control" fdprocessedid="m3xdml"><option>Select</option><option>Male</option><option>Female</option></select></div></div>
                        <div class="col-md-6"><div class="form-group mb-0"><label>Date of Birth</label><input type="text" class="form-control" fdprocessedid="bv9k6" /></div></div>
                    </div></div>
            </div>
                <div class="card"><div class="card-body"><h4 class="card-title">About Me</h4><div class="form-group mb-0"><label>Biography</label><textarea class="form-control" rows="5"></textarea></div></div>
                </div>
                <div class="card"><div class="card-body"><h4 class="card-title">Clinic Info</h4><div class="row form-row">
                    <div class="col-md-6"><div class="form-group"><label>Clinic Name</label><input type="text" class="form-control" fdprocessedid="epud5n" /></div></div>
                    <div class="col-md-6"><div class="form-group"><label>Clinic Address</label><input type="text" class="form-control" fdprocessedid="mt4iqf" /></div></div>
                    <div class="col-md-12"><div class="form-group"><label>Clinic Images</label><div><div tabindex="0" class="MuiDropzoneArea-root"><input accept="" multiple="" type="file" autocomplete="off" tabindex="-1" style={style1} />
                        <div class="MuiDropzoneArea-textContainer">
                            <p class="MuiTypography-root MuiDropzoneArea-text MuiTypography-h5">Drag and drop a file here or click</p>
                        </div>
                    </div>
                    </div>
                    </div>
                        <div class="upload-wrap"><div class="upload-images"><img src="/react/template/1eb95d47909144cd3761c65e9c4c776c.jpg" alt="Upload Image" /><a href="#" class="btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a></div><div class="upload-images"><img src="/react/template/5f512084522e55e7d0b0558624d98a9a.jpg" alt="Upload Image" /><a href="#" class="btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a></div></div>
                    </div>
                </div>
                </div>
                </div>

                <div class="card contact-card">
                    <div class="card-body"><h4 class="card-title">Contact Details</h4>
                        <div class="row form-row"><div class="col-md-6"><div class="form-group"><label>Address Line 1</label>
                            <input type="text" class="form-control" fdprocessedid="itvrsl" />
                        </div>
                        </div>
                            <div class="col-md-6"><div class="form-group">
                                <label class="control-label">Address Line 2</label>
                                <input type="text" class="form-control" fdprocessedid="v0q3gq" />
                            </div>
                            </div>
                            <div class="col-md-6"><div class="form-group"><label class="control-label">City</label>
                                <input type="text" class="form-control" fdprocessedid="dx8xii" />
                            </div>
                            </div>
                            <div class="col-md-6"><div class="form-group"><label class="control-label">State / Province</label>
                                <input type="text" class="form-control" fdprocessedid="jczu3p" />
                            </div>
                            </div>
                            <div class="col-md-6"><div class="form-group">
                                <label class="control-label">Country</label>
                                <input type="text" class="form-control" fdprocessedid="upc5l" />
                            </div>
                            </div>
                            <div class="col-md-6"><div class="form-group">
                                <label class="control-label">Postal Code</label>
                                <input type="text" class="form-control" fdprocessedid="vkh7qo" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="submit-section submit-btn-bottom"><button type="submit" class="btn btn-primary submit-btn" fdprocessedid="x36vr">Save Changes</button>
                </div>
            </div> */}
