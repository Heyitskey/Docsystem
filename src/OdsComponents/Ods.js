import React from 'react'

import { Navbar } from '../Pages/Navbar'
import { Appointment } from './Appointment'
import { Feature } from './Feature'
import { Footer } from './Footer'
import { Header } from './Header'
import { Spinner } from './Spinner'
import { Team } from './Team'
import { Testimonial } from './Testimonial'
import { Topbar } from './Topbar'
import { About } from './About'
import { Service } from './Service'

export const Ods = () => {
    return (
        <div>
            {/* <h1>Online Doctor System</h1> */}
            {/* <Helmet/> */}

            <Spinner />
            <Topbar />
            <Navbar />
            <Header />
            <Service />
            <Feature />
            <Team />
            <Appointment />
            <Testimonial />
            <About/>
            <Footer />

        </div>
    )
}
