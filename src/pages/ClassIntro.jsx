import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

//USER CONTEXT
import { useUser } from '../context/UserContext';

//ASSETS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBolt, faRocket } from '@fortawesome/free-solid-svg-icons';
import Character from '../assets/chara.png';
import BasicLoading from '../components/BasicLoading';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const ClassIntro = () => {
    // Parameters
    const { id } = useParams();

    // Navigation
    const navigate = useNavigate();

    // User Context
    const { courseDetails, image, isLoading, courseId, setCourseId, setTopicSlug, topicSlug } = useUser();

    // Use Effect Trigger Fetch Course Details
    useEffect(() => {
        setCourseId(id);
    }, []);

    // Use Effect Trigger Update Course Slug
    useEffect(() => {
        const topics = courseDetails?.attributes?.topics?.data;
        const result = topics?.find(topic => topic.attributes?.order === 1);
        setTopicSlug(result?.attributes?.slug);
    }, [courseDetails])

    //Function Next Page
    const nextPage = () => {
        navigate(`/class/${courseId}/orientation/${topicSlug}`);
    }

    if (isLoading) {
        return (
            <BasicLoading loadingNotes='Loading Course' />
        );
    }

    return (
        <main>
            <section className="w-full h-screen grid grid-cols-2 gap-6 pt-[72px] p-6 my-12">
                <div className='w-full h-full flex flex-col justify-between items-start gap-12 p-6'>
                    <div className="w-full h-full bg-[var(--color-accent)] rounded-3xl overflow-hidden">
                        <img
                            className="w-full h-full hover:scale-110 transition-all duration-300 ease-in-out object-cover"
                            src={image === "" ? Character : `${process.env.REACT_APP_API_IMGURL}${image}`}
                            alt="Character"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12">
                    <div className="w-full h-full flex flex-col gap-8">
                        <div className="w-full h-fit space-y-4">
                            <h3 className="w-fit text-[20px] text-center leading-none font-semibold uppercase px-6 py-2 border border-[var(--color-secondary)] rounded-full">
                                Pertemuan {courseDetails?.id}
                            </h3>
                            <h2 className="text-[48px] text-left leading-tight font-bold text-balance">
                                {courseDetails?.attributes?.title || 'No Title Available'}
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
                                {courseDetails?.attributes?.overview || 'No Overview Available'}
                            </p>
                        </div>
                        <div className="w-full h-fit space-y-4">
                            <div className="flex flex-row items-center justify-start gap-4">
                                <FontAwesomeIcon icon={faRocket} className="ease-in-out transition-all duration-300 hover:rotate-45" />
                                <h3 className="text-[20px] text-left leading-none font-semibold">
                                    Tujuan Pembelajaran
                                </h3>
                            </div>
                            <div className="text-sm leading-6 markdown">
                                <Markdown className='leading-7 space-y-4 text-justify' remarkPlugins={[remarkGfm]}>
                                    {courseDetails?.attributes?.objective || 'No Objective Available'}
                                </Markdown>
                            </div>
                        </div>
                        <div className="w-full h-fit flex justify-end">
                            <button onClick={() => nextPage()} className="w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group" >
                                <p className="font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8">
                                    Mulai Belajar
                                </p>
                                <FontAwesomeIcon icon={faArrowRight} className="w-[12px] h-[12px] text-[var(--color-secondary)]" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ClassIntro;
