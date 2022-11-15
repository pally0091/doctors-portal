import React from 'react';


const Bcard = ({cardInfo}) => {
    const {name, description, image, bClass} =cardInfo
    return (
        <div className={` text-white p-4 rounded-md w-[30%] flex items-center ${bClass}`}>
            <div>
                <img src={image} alt=''/>
            </div>
            <div className='text-left px-5'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Bcard;