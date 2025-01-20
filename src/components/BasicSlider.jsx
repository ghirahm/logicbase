import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const BasicSlider = ({ sliderData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-[520px] bg-[var(--color-non-primary)] rounded-3xl overflow-hidden border">
            {sliderData.map((slide, index) => (
                <div key={slide.id} className={`absolute w-full inset-0 transition-opacity duration-500 ${ index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={`${process.env.REACT_APP_API_IMGURL}${slide.url}`} alt={slide.name || `Slide ${index + 1}`} className="w-full h-full object-cover rounded-3xl"/>
                </div>
            ))}

            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[var(--color-primary)] p-2 rounded-full shadow-md"
            >
                <FontAwesomeIcon icon={faAngleLeft} className='w-[24px]' />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[var(--color-primary)] p-2 rounded-full shadow-md"
            >
                <FontAwesomeIcon icon={faAngleRight} className='w-[24px]'/>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {sliderData.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                            index === currentIndex ? 'bg-[var(--color-tertiary)]' : 'bg-[var(--color-non-primary)]'
                        }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BasicSlider;
