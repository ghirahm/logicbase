import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye, faCirclePlay, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Happy from '../assets/happy.png'
import Background from '../assets/score.gif'
import { useNavigate } from 'react-router'
import { useUser } from '../context.jsx/UserContext'
import { useParams } from 'react-router'

const ClassEvaluation = () => {

    const navigate = useNavigate();

    const { slug, id } = useParams();

     const { courseTopic, setTopicSlug, isLoading} = useUser();

     useEffect(() => {
                 setTopicSlug(slug);
         }, []);

         
    const nextPage = () => {
        navigate(`/class/${id}/endClass`)
    }

    const prevPage = () => {
        navigate(`/class/${id}/presentation/${courseTopic?.nextTopic?.slug}`)
    }

    const question = courseTopic?.questions;

    console.log(courseTopic)
    
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

    return (
        <>
            <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
                <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                    <div className='w-full h-full flex flex-col gap-8'>
                        <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                            <FontAwesomeIcon icon={faBullseye} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                            <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase'>Quiz Orientasi Permasalahan</h3>
                        </div>
                        <p className='text-sm leading-6'>Sebelum memasuki pembelajaran lebih lanjut. Silahkan kerjakan quiz berikut sebaik mungkin!</p>

                        {question &&
                            question.map((i, index) => {
                                const option = i.terms;
                                return (
                                    <>
                                        <div key={index} className='w-full h-fit flex flex-row justify-between items-center p-6 border border-[var(--color-secondary)] rounded-full'>
                                            <div className='flex flex-row items-center justify-start gap-4'>
                                                <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                                    <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                                                </div>
                                                <h3 className='text-[20px] text-left leading-none font-semibold'>Soal No. {index+1}</h3>
                                            </div>
                                            <div className='w-fit flex flex-row items-center gap-2'>
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--color-secondary)]' />
                                                <p className='text-sm'>{i.point} Points</p>
                                            </div>
                                        </div>
                                        <div className='w-full h-fit grid'>
                                            {/* <div className='w-full h-full bg-[var(--color-non-primary)] rounded-3xl'>
                                                <img src=' ' alt=' '/>
                                            </div> */}
                                            <div className='w-full h-full flex flex-col gap-4 p-6'>
                                                <h3 className='w-full text-[36px] text-left font-semibold'>{i.question}</h3>
                                                {
                                                    option.map((i, index) => {
                                                        return (
                                                            <>
                                                                <button key={index} className='w-full h-fit rounded-3xl bg-[var(--color-non-primary)] p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]'>
                                                                    <p className='text-sm leading-6'>{i.title}</p>
                                                                </button>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='w-full h-fit flex items-center justify-end'>
                        <button className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px]'>
                            <p className='font-normal transform ease-in-out duration-300 transition-all hover:mr-8 '>Submit Quiz</p>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                        </button>
                    </div>
                </div>
            </section>

            <section className='w-full h-fit flex flex-col justify-center items-center p-6'>
                <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                    <div className='w-full h-[80vh] relative flex flex-col gap-4 justify-center items-center text-[var(--color-primary)] rounded-3xl p-6 overflow-hidden'>
                        <img src={Background} className="absolute w-full h-auto blur-lg object-cover" alt="" />
                        <img src={Happy} alt='' className='w-[10%] z-20' />
                        <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 z-20 border border-[var(--color-primary)] rounded-full'>
                            <p className='w-fit text-sm text-center leading-none font-semibold'>Congratulations</p>
                        </div>
                        <h3 className='w-fit text-[36px] text-center font-bold z-20'>100 Point</h3>
                        <p className='w-[30%] text-sm leading-6 z-20 text-center'>Selamat atas pencapaian yang telah kamu dapatkan Ghirah Madani. Keep your spirits up!</p>
                    </div>
                    <div className='w-full h-fit flex items-center justify-between'>
                        <button onClick={() => prevPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] rotate-180' />
                            <p className='font-normal transform ease-in-out duration-300 transition-all'>Back</p>
                        </button>
                        <button onClick={() => nextPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                            <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Step 2: Organisasi Peserta Didik</p>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClassEvaluation