import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div id='homecontact' className='p-10'>
            <div className='w-1/3 mx-auto'>
            <p className='text-[#19D3AE]'>Contact Us</p>
            <h3 className='text-2xl text-white font-semibold'>Stay Connected With Us</h3>
            <br/>
            <br></br>
            <input className='p-2 w-full rounded-md' type='email' placeholder='Email Address'/>
            <br></br>
            <br></br>
            <input className='p-2 w-full rounded-md' type='text' placeholder='Subject'/>
            <br/>
            <br/>
            <textarea className='p-2 w-full rounded-md' type='text' placeholder='Your Message Here'></textarea>
            <br></br>
            <br></br>
            <button className='bg-[#19D3AE] p-2 rounded-md hover:shadow-lg hover:shadow-white'>Submit</button>
            </div>
        </div>
    );
};

export default Contact;