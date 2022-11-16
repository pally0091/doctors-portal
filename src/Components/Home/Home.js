import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Services from './Services';
import Testimonials from './Testimonials';
const Home = () => {
    return (
        <div className='mt-16'>
           <Banner></Banner>
           <Services></Services>
           <Appointment></Appointment>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;