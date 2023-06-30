import logo from './logo.svg';
import './App.css';


import { Route, Routes } from 'react-router-dom';
import { UserRegi } from './Components/UserRegi';
import { UserLogin } from './Components/UserLogin';
import { DoctorDasboard } from './Components/Doctor/DoctorDasboard';
import { PatientDashboard } from './Components/Patient/PatientDashboard';
import { DoctorList } from './Components/Doctor/DoctorList';
import { Ods } from './OdsComponents/Ods';
import { About1 } from './Pages/About1';
import { Service1 } from './Pages/Service1';
import { Appointment1 } from './Pages/Appointment1';
import { Feature1 } from './Pages/DropdownPages.js/Feature1';
import { Team1 } from './Pages/DropdownPages.js/Team1';
import { Testimonial1 } from './Pages/DropdownPages.js/Testimonial1';
import { Error } from './Pages/DropdownPages.js/404';
import { PatientProfile } from './Components/Patient/PatientProfile';
import { FindDoc } from './Components/Patient/FindDoc';
import { DocProfile } from './Components/Doctor/DocProfile';
import { ViewDoctorProfile } from './Components/Doctor/ViewDoctorProfile';
import ProtectedRoutes from './ProtectedRoutes';
import { ClinicForm } from './Components/Clinic/ClinicForm';
import { AdminDash } from './Components/Admin/AdminDash';
import { Appoint } from './Components/Patient/Appoint'
import { DocAppoints } from './Components/Doctor/DocAppoints';

import { Adminappoints } from './Components/Admin/Adminappoints';
import { Users } from './Components/Admin/Users';
import { Doctors } from './Components/Admin/Doctors';
import { Payment } from './Components/Patient/Payment';
import { Physician } from './Pages/Physician';
import { Cardiology } from './Pages/Cardiology';
import { Nurology } from './Pages/Nurology';
import { Orthopedics } from './Pages/Orthopedics';
import { Dentiest } from './Pages/Dentiest';
import { Laboratry } from './Pages/Laboratry';



function App() {
  return (
    <div className="App">

      <Routes>
 
        <Route path='/' element={<Ods />} />
        <Route path='/userRegi' element={<UserRegi />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/docdas' element={<DoctorDasboard />} />
        <Route path='/paidas' element={<PatientDashboard/>} />
        <Route path='/docList' element={<DoctorList />} />
        <Route path='/admindas' element={<AdminDash />} />

        
        <Route path='/about' element={<About1 />} />
        {/* <Route path='/home' element={<Home />} /> */}
        <Route path='/service' element={<Service1 />} />
        
        
        <Route path='/feature' element={<Feature1/>}/>
        <Route path='/appointment' element={<Appointment1/>}/>
        <Route path='/team' element={<Team1/>}/>
        <Route path='/testimonial' element={<Testimonial1/>}/>
        <Route path="/*" element={<h1>404 :- Page Not Found</h1>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/patientprofile' element={<PatientProfile/>}/>
        <Route path='/findDoc' element={<FindDoc/>}/>
        <Route path='/docProfile' element={<DocProfile/>}/>
        <Route path='/viewprofile/:id' element={<ViewDoctorProfile/>}></Route>
        <Route path='/addclinic' element={<ClinicForm/>}/>

        <Route element={<ProtectedRoutes/>}>
        <Route path='/appoint' element={<Appoint/>}/>
        </Route>

        <Route path='/admindas' element={<AdminDash/>}/>
        <Route path='/myappoints/:id' element={<DocAppoints/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adminappoint' element={<Adminappoints/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/payment' element={<Payment/>}/>

        <Route path='/physician' element={<Physician/>}/>
        <Route path='/cardio' element={<Cardiology/>}/>
        <Route path='/neuro' element={<Nurology/>}/>
        <Route path='/ortho' element={<Orthopedics/>}/>
        <Route path='/dentiest' element={<Dentiest/>}/>
        <Route path='/lab' element={<Laboratry/>}/>
        

      </Routes>

      {/* <ImageCarousel images={images}/> */}
    </div>
  );
}

export default App;
