import React, {useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStar, faCat, faDownload, faTents, faCirclePlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

import { useUser } from '../context.jsx/UserContext'

import ReactMarkdown from 'react-markdown';

const ClassResearch = () => {

    const navigate = useNavigate();

    const { courseTopic, setTopicSlug, isLoading, courseId, setIsLoading } = useUser();
    
     useEffect(() => {
            setTopicSlug("research-guide-course-1-2");
        }, []);
    

    const nextPage = () => {
        setIsLoading(true);
        navigate(`/class/${courseId}/presentation`)
    }

    console.log(courseTopic);
    
    return (
    <>
        <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
            <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                <div className='w-full h-full flex flex-col gap-8'>
                    <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                        <FontAwesomeIcon icon={faStar} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase '>Research Guide</h3>
                    </div>
                    <div className='w-full h-fit space-y-4'>
                        <div className='flex flex-row items-center justify-start gap-4'>
                            <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                <FontAwesomeIcon icon={faBook} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                            </div>
                            <h3 className='text-[20px] text-left leading-none font-semibold'>Structure Query</h3>
                        </div>
                    </div>
                    <div className='w-full h-[360px] bg-[var(--color-non-primary)] rounded-3xl'>
                        {/* <img src=' ' alt=' '/> */}
                    </div>
                    <div className='w-full h-fit rounded-3xl'>
                        <div className='w-full h-fit grid grid-cols-2 gap-6'>
                            <div className='w-full h-full col-span-1 flex flex-col items-start gap-2'>
                                <p className='text-sm font-bold'>Materi Pembelajaran</p>
                                <div className="text-sm leading-6">
                                        {courseTopic?.content[0]?.learningMaterial ? (
                                            <ReactMarkdown>{courseTopic.content[0].learningMaterial}</ReactMarkdown>
                                        ) : (
                                            <p>No learning material available</p>
                                        )}
                                    </div>
                            </div>
                            <div className='w-full h-full col-span-1 flex flex-col items-start gap-6 rounded-3xl'>
                                <div className='w-full flex flex-col items-left justify-center gap-2 p-6 bg-[var(--color-non-primary)] rounded-3xl'>
                                    <div className='flex flex-row items-center gap-4'>
                                        <FontAwesomeIcon icon={faCat} className='text-[var(--color-secondary)]'/>
                                        <p className='text-sm font-bold'>File Modul</p>
                                    </div>
                                    <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                                </div>
                                <div className='w-full flex flex-col items-left justify-center gap-2 p-6 bg-[var(--color-non-primary)] rounded-3xl'>
                                    <div className='flex flex-row items-center gap-4'>
                                        <FontAwesomeIcon icon={faDownload} className='text-[var(--color-secondary)]'/>
                                        <p className='text-sm font-bold'>File LKPD</p>
                                    </div>
                                    <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                                </div>
                                <div className='w-full flex flex-col items-left justify-center gap-2 p-6 bg-[var(--color-non-primary)] rounded-3xl'>
                                    <div className='flex flex-row items-center gap-4'>
                                        <FontAwesomeIcon icon={faBook} className='text-[var(--color-secondary)]'/>
                                        <p className='text-sm font-bold'>References</p>
                                    </div>
                                    <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-4'>
                        <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                            <FontAwesomeIcon icon={faTents} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        </div>
                        <h3 className='text-[20px] text-left leading-none font-semibold'>Drag and Drop Quiz</h3>
                    </div>
                    <div className='w-full h-[240px] bg-[var(--color-non-primary)] rounded-3xl'>
                    </div>
                    <div className='flex flex-row items-center justify-start gap-4'>
                        <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                            <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45'/>
                        </div>
                        <h3 className='text-[20px] text-left leading-none font-semibold'>Learning Video</h3>
                    </div>
                    <div className='w-full h-[480px] bg-[var(--color-non-primary)] rounded-3xl'>
                    <iframe src={courseTopic?.content[0].youtubeLink} className='w-full h-full' title='Youtube Video' allowFullScreen />
                    </div>
                </div>
                <div className='w-full h-fit flex items-center justify-between'>
                    <button onClick={() => navigate('/class/organization')} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] rotate-180' />
                        <p className='font-normal transform ease-in-out duration-300 transition-all'>Back</p> 
                    </button>
                    <button onClick={() => nextPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                        <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Step 4: Analisis dan Menyajikan Masalah</p>
                        <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                    </button>
                </div>
            </div>
        </section>
    </>
    )
}

export default ClassResearch