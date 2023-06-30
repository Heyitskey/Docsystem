import axios from 'axios';
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form';
import { DoctorDasboard } from './DoctorDasboard'
import { DocNav } from './DocNav';


export const DocProfile = () => {

    const { register, handleSubmit } = useForm();

    const submit = (data) => {

        axios.post("http://localhost:4001/doctor/adddoc", data).then((res) => {
            if (res.status === 201) {
                alert("Profile Updated")

            }
            else {
                alert("Updation Failed")
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    

    return (
        <div>
            <Helmet>

                <link href="assestpro/img/favicon.png" rel="icon" />

                <link rel="stylesheet" href="assestpro/css/bootstrap.min.css" />

                <link rel="stylesheet" href="assestpro/plugins/fontawesome/css/fontawesome.min.css" />
                <link rel="stylesheet" href="assestpro/plugins/fontawesome/css/all.min.css" />

                <link rel="stylesheet" href="assestpro/css/feather.css" />

                <link rel="stylesheet" href="assestpro/css/bootstrap-datetimepicker.min.css" />

                <link rel="stylesheet" href="assestpro/plugins/select2/css/select2.min.css" />

                <link rel="stylesheet" href="assestpro/css/style.css"></link>

            </Helmet>
            <DocNav />
            <form onSubmit={handleSubmit(submit)}>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Update Profile</h4>
                    <div class="row form-row"><div class="col-md-12">
                        <div class="form-group">
                            <div class="change-avatar">
                                <div class="profile-img">
                                    <img src="/react/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg" alt="User" />
                                </div>
                                <div class="upload-img">
                                    <div class="change-photo-btn">
                                        <span><i class="fa fa-upload"></i> Upload Photo</span>
                                        <input type="file" class="upload" />
                                    </div>
                                    <small class="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
                                </div>
                            </div>
                        </div></div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label> Qualification <span class="text-danger">*</span></label>
                                <input type="text"  class="form-control" {...register('qualification')} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Specialization<span class="text-danger">*</span></label>
                                <input type="text"  class="form-control" {...register('specialization')} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Experience <span class="text-danger">*</span></label>
                                <input type="number"  class="form-control" {...register('experience')} />
                            </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                <label>Phone Number <span class="text-danger">*</span></label>
                                <input type="number"  class="form-control" {...register('phonono')} />
                                </div>
                            </div>
                        <div >
                        <div class="form-holder">
                                <textarea placeholder="About" class="form-control" {...register('about')} />
                            </div>
                        </div>
                       
                        

                        </div></div></div>
            <div>
                <button class="btn btn-primary w-100 py-3" type='submit'>Submit</button>
            </div>
            </form>
        </div>

    )
}


{/* <div class="wrapper">
                <form action="" onSubmit={handleSubmit(submit)}>
                    <div id="wizard"> */}
{/* <!-- SECTION 1 --> */ }
{/* <h4></h4>
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
                                <div class="form-group"> */}
{/* <div class="form-holder">
                                        <input type="text" placeholder="Name" class="form-control" {...register('name')} />
                                    </div>
                                    <div class="form-holder">
                                        <input type="email" placeholder="Email" class="form-control" {...register('email')} />
                                    </div>
                                    <div class="form-holder">
                                        <input type="number" placeholder="Age" class="form-control" {...register('age')} />
                                    </div> */}
{/* <div class="form-holder">
                                        <label for="gender">Gender </label>
                                        <input type="radio" name='gender' value="male" id="male"  {...register("gender")} />
                                        <label for="male" >Male</label>
                                        <input type="radio" name='gender' value="female" id="female"  {...register("gender")} />
                                        <label for="female">Female</label>
                                    </div> */}

{/* </div>
                            </div>
                            <div class="form-holder">
                                <input type="text" placeholder="Qualification" class="form-control" {...register('qualification')} />
                            </div>
                            <div class="form-holder">
                                <input type="text" placeholder="Specialization" class="form-control" {...register('specialization')} />
                            </div>
                            <div class="form-holder">
                                <input type="number" placeholder="Experience" class="form-control" {...register('experience')} />
                            </div>
                            <div class="form-holder">
                                <input type="number" placeholder="Phone Number" class="form-control" {...register('phonono')} />
                            </div>
                            <div class="form-holder">
                                <textarea placeholder="About" class="form-control" {...register('about')} />
                            </div>
                        </section> */}

