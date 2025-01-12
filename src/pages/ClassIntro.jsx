import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';
import { useUser } from '../context.jsx/UserContext';

import Character from '../assets/chara.png'

const ClassIntro = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const { courseDetails, image, isLoading, courseId, setCourseId, setIsLoading } = useUser();

    useEffect(() => {
        if (id) {
            setCourseId(id);
        }
    }, [id]);
    
    if (isLoading) {
        return (
            <main>
                <div className="flex flex-col items-center justify-center h-screen">
                    <p className="ml-4 text-lg">Loading Course</p>
                    <svg className='animate-spin h-20 w-20 text-[var(--color-secondary)]' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                    </svg>
                </div>
            </main>
        );
    }

    if (!courseDetails) {
        return (
            <main>
                <div className="text-center text-red-500">
                    <p>Failed to Load Course details</p>
                </div>
            </main>
        );
    }

    const nextPage = () => {
        setIsLoading(true);
        navigate(`/class/${courseId}/orientation`)
    }

    return (
        <main>
            <section className="w-full h-screen grid grid-cols-2 gap-6 pt-[120px] p-6">
                <div className="w-full h-full bg-[var(--color-accent)] rounded-3xl overflow-hidden">
                    <img
                        className="w-full h-auto hover:scale-110 transition-all duration-300 ease-in-out object-cover"
                        src={image === "" ? `${process.env.REACT_APP_API_IMGURL}${courseDetails.attributes?.thumbnail.data.attributes?.url}` :  Character }
                        alt="Character"
                    />
                </div>
                <div className="w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6">
                    <div className="w-full h-full flex flex-col gap-8">
                        <div className="w-full h-fit space-y-4">
                            <h3 className="w-fit text-[20px] text-center leading-none font-semibold uppercase px-6 py-2 border border-[var(--color-secondary)] rounded-full">
                                Pertemuan {courseDetails.id}
                            </h3>
                            <h2 className="text-[48px] text-left leading-tight font-bold text-balance">
                                {courseDetails.attributes?.title || 'No Title Available'}
                            </h2>
                        </div>
                        <div className="w-full h-fit space-y-4">
                            <div className="flex flex-row items-center justify-start gap-4">
                                <FontAwesomeIcon
                                    icon={faBolt}
                                    className="ease-in-out transition-all duration-300 hover:rotate-45"
                                />
                                <h3 className="text-[20px] text-left leading-none font-semibold">
                                    Overview Materi
                                </h3>
                            </div>
                            <p className="text-sm leading-6">
                                {courseDetails.attributes?.overview || 'No Overview Available'}
                            </p>
                        </div>
                        <div className="w-full h-fit space-y-4">
                            <div className="flex flex-row items-center justify-start gap-4">
                                <FontAwesomeIcon
                                    icon={faRocket}
                                    className="ease-in-out transition-all duration-300 hover:rotate-45"
                                />
                                <h3 className="text-[20px] text-left leading-none font-semibold">
                                    Tujuan Pembelajaran
                                </h3>
                            </div>
                            <p className="text-sm leading-6">
                                {courseDetails.attributes?.objective || 'No Objective Available'}
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-fit">
                        <button
                            onClick={() => nextPage()}
                            className="w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group"
                        >
                            <p className="font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8">
                                Mulai Belajar
                            </p>
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="w-[12px] h-[12px] text-[var(--color-secondary)]"
                            />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClassIntro;
