import React from 'react';
import person from '../../assets/images/people1.png';
import TestimoniCard from './TestimoniCard';

const TestimoniCards = () => {
    const testimonidatas =[
        {
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: person ,
            name: 'Winson Herry',
            place: 'California'
        },
        {
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: person ,
            name: 'Winson Herry',
            place: 'California'
        },
        {
            details: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: person ,
            name: 'Winson Herry',
            place: 'California'
        }
    ]
    return (
        <div className='flex justify-evenly mt-10 mb-10'>
            {
                testimonidatas.map(testimonidata => <TestimoniCard
                    key={testimonidata.name}
                    testimonidata={testimonidata}
                ></TestimoniCard>)
            }
        </div>
    );
};

export default TestimoniCards;