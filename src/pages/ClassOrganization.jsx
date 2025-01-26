import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

// USER CONTEXT
import { useUser } from '../context/UserContext';

// ASSETS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCirclePlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BasicLoading from '../components/BasicLoading';
import Organisasi from '../assets/organization.jpg';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';


const ClassOrganization = () => {
    // Parameters Page
    const { slug, id } = useParams();

    // Navigation
    const navigate = useNavigate();

    // User Context
    const { courseTopic, setTopicSlug, isLoading, postProgressNonQuiz } = useUser();

    // Effect to Trigger Course Topic
    useEffect(() => {
        setTopicSlug(slug);
    }, []);

    //Function Route Page
    const nextPage = () => {
        postProgressNonQuiz(courseTopic?.id);
        navigate(`/class/${id}/research/${courseTopic?.nextTopic?.slug}`);
    }
    const prevPage = () => {
        navigate(`/class/${id}/orientationQuiz/${courseTopic?.prevTopic?.slug}`);
    }

    console.log(courseTopic)

    if (isLoading) {
        return (
            <BasicLoading loadingNotes="Loading Course" />
        );
    }

    return (
        <>
            <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
                <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                    <div className='w-full h-full flex flex-col gap-8'>
                        <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                            <FontAwesomeIcon icon={faBolt} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                            <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase '>Organisasi Peserta Didik</h3>
                        </div>
                        <div className='w-full h-fit space-y-4'>
                            <div className='flex flex-row items-center justify-start gap-4'>
                                <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                    <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                                </div>
                                <h3 className='text-[20px] text-left leading-none font-semibold'>{courseTopic?.title}</h3>
                            </div>
                        </div>

                        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 items-start gap-6'>
                            <div className='w-full h-fit bg-[var(--color-non-primary)] rounded-3xl overflow-hidden'>
                                <img src={Organisasi} alt='Instruksi LKPD' className='w-full object-cover' />
                            </div>
                            <div className='flex flex-col col-span-1 gap-2 markdown'>
                                <Markdown className='leading-8 space-y-6 text-justify' remarkPlugins={[remarkGfm]}
                                    components={{
                                        code({ inline, children, ...props }) {
                                            return inline ? (
                                                <code
                                                    className="bg-[var(--color-non-primary)] text-[var(--color-secondary)] px-2 py-1 rounded-md text-sm font-mono"
                                                    {...props}
                                                >
                                                    {children}
                                                </code>
                                            ) : (
                                                <pre className="bg-[var(--color-secondary)] text-[var(--color-non-primary)] p-4 rounded-md overflow-x-auto">
                                                    <code {...props}>{children}</code>
                                                </pre>
                                            );
                                        },
                                    }}
                                >{courseTopic?.content[0]?.description}</Markdown>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-fit flex items-center justify-between'>
                        <button onClick={() => prevPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] opacity-80 hover:opacity-100'>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)] rotate-180' />
                            <p className='font-normal transform ease-in-out duration-300 transition-all '>Back</p>
                        </button>
                        <button onClick={() => nextPage()} className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'>
                            <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8 '>Step 3: Research Guide</p>
                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClassOrganization;