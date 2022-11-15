import React from 'react';

const Service = ({service}) => {
    const {name, description, logo} = service
    return (
        <div className='text-center shadow-lg shadow-black w-[30%] p-5 rounded-md'>
            <div className='w-24 mx-auto'>
            <img src={logo} alt=''/>
            </div>
            <h3 className='font-bold text-lg mt-2'>{name}</h3>
            <p className='text-justify mt-2'>{description}</p>
        </div>
    );
};

export default Service;