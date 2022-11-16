import React from 'react';

const TestimoniCard = ({testimonidata}) => {
    const {name, image, details, place} = testimonidata
    return (
        <div className='shadow-md w-[30%] p-4 rounded-md'>
            <p className='text-justify '>{details}</p>
            <div  className='flex items-center mt-4' >
                <img src={image} alt=''/>
                <div className='text-left px-5'>
                    <p>{name}</p>
                    <p className='text-sm'>{place}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimoniCard;