import React from 'react';
import { Link } from 'react-router-dom';
import logoimg from '../../Images/logo.png'

const Navbar = () => {
    return (
        <navbar className='flex justify-between items-center p-2 border-b-4 border-double border-black fixed top-0 w-full bg-white hover:bg-slate-200'>
            <div className='flex items-center px-5'>
                <div className='w-10'>
                    <img src={logoimg} alt=''/>
                </div>
                <Link to='/'><h1 className='text-3xl font-bold px-3'>Doctors Portal</h1></Link>
            </div>
            <div>
                <Link className='px-2 text-lg hover:underline' to='/home'>Home</Link>
                <Link className='px-2 text-lg hover:underline' to='/about'>About</Link>
                <Link className='px-2 text-lg hover:underline' to='/appointment'>Appointment</Link>
                <Link className='px-2 text-lg hover:underline' to='/reviews'>Reviews</Link>
                <Link className='px-2 text-lg hover:underline' to='/contact'>Contact Us</Link>
                <Link className='px-2 text-lg hover:underline' to='/login'>Login</Link>
            </div>
        </navbar>
    );
};

export default Navbar;