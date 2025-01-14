import React, {useEffect} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faStar, faCat, faDownload, faTents, faCirclePlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

import { useUser } from '../context.jsx/UserContext'

import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router'

const ClassResearch = () => {
    const navigate = useNavigate();

    const { slug, id } = useParams();

    const { courseTopic, setTopicSlug, isLoading } = useUser();
    useEffect(() => {
            setTopicSlug(slug);
        }, []);
    

        const nextPage = () => {
            navigate(`/class/${id}/presentation/${courseTopic?.nextTopic?.slug}`)
        }
    
        const prevPage = () => {
            navigate(`/class/${id}/organization/${courseTopic?.prevTopic?.slug}`)
        }

    console.log(courseTopic);

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
                    <button onClick={() => prevPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
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