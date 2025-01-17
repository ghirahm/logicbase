import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

// USER CONTEXT
import { useUser } from '../context.jsx/UserContext';

// ASSETS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThunderstorm, faCirclePlay, faCat, faDownload, faUpload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BasicLoading from '../components/BasicLoading';

const ClassPresentation = () => {
    // Parameters Page
    const { slug, id } = useParams();

    // Navigation
    const navigate = useNavigate();

    // User Context
    const { courseTopic, setTopicSlug, isLoading, setProcessedTopics, handleProgressNonQuiz } = useUser();

    // Effect to Trigger Course Topic
    useEffect(() => {
        setTopicSlug(slug);
    }, []);

    // Function to Handle Topic Already Processed
    useEffect(() => {
        setProcessedTopics((prev) => new Set(prev).add(courseTopic?.id));
    }, [courseTopic]);

    const nextPage = () => {
        handleProgressNonQuiz(courseTopic?.id);
        navigate(`/class/${id}/evaluation/${courseTopic?.nextTopic?.slug}`)
    }

    const prevPage = () => {
        navigate(`/class/${id}/research/${courseTopic?.nextTopic?.slug}`)
    }

    if (isLoading) {
        return (
            <BasicLoading loadingNotes='Loading Course' />
        );
    }

    return (
        <>
            <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
                <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                    <div className='w-full h-full flex flex-col gap-8'>
                        <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                            <FontAwesomeIcon icon={faThunderstorm} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                            <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase'>Analisis dan Menyajikan Masalah</h3>
                        </div>
                        <div className='w-full h-fit space-y-4'>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                    <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                                </div>
                                <h3 className='text-[20px] text-left leading-none font-semibold'>Lembar Kerja Peserta Didik</h3>
                            </div>
                        </div>
                        <div className='w-full h-fit rounded-3xl'>
                            <div className='w-full h-fit grid grid-cols-2 gap-6'>

                                <div className='w-full h-full col-span-1 flex flex-col items-start gap-6'>
                                    <div className='w-full h-[360px] bg-[var(--color-non-primary)] rounded-3xl'>

                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-sm font-bold'>Materi Pembelajaran</p>
                                        <p className='text-sm leading-6'>SQL queries are made up of components that work together to retrieve and manipulate data from a database. The structure of an SQL query is defined by several clauses that specify the query's purpose, scope, and output. Some components of an SQL.</p>
                                    </div>
                                </div>
                                <div className='w-full h-full col-span-1 flex flex-col items-start gap-6 rounded-3xl'>
                                    <div className='w-full flex flex-col items-left justify-center gap-2 p-6 bg-[var(--color-non-primary)] rounded-3xl'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FontAwesomeIcon icon={faCat} className='text-[var(--color-secondary)]' />
                                            <p className='text-sm font-bold'>File Modul</p>
                                        </div>
                                        <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                                    </div>
                                    <div className='w-full flex flex-col items-left justify-center gap-2 p-6 bg-[var(--color-non-primary)] rounded-3xl'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FontAwesomeIcon icon={faDownload} className='text-[var(--color-secondary)]' />
                                            <p className='text-sm font-bold'>File LKPD</p>
                                        </div>
                                        <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                                    </div>
                                    <div className='w-full flex flex-col items-left justify-center gap-2 p-6 bg-[var(--color-non-primary)] rounded-3xl'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FontAwesomeIcon icon={faUpload} className='text-[var(--color-secondary)]' />
                                            <p className='text-sm font-bold'>Upload LKPD</p>
                                        </div>
                                        <p className='text-sm leading-6'>Berdasarkan video tersebut apa yang kamu pahami tentang database?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit flex items-center justify-between'>
                        <button onClick={() => prevPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] rotate-180' />
                            <p className='font-normal transform ease-in-out duration-300 transition-all'>Back</p>
                        </button>
                        <button onClick={() => nextPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                            <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Step 5: Evaluasi</p>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClassPresentation