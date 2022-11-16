import React from 'react';
import TestimoniCards from './TestimoniCards';

const Testimonials = () => {
    return (
        <div className='mt-10 w-11/12 mx-auto px-10 '>
            <p className='text-[#19D3AE] text-left'>Testimonial</p>
            <h3 className='text-2xl font-semibold text-left'>What Our Patients Says</h3>
            <TestimoniCards></TestimoniCards>
        </div>
    );
};

export default Testimonials ;