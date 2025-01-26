import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';

//USER CONTEXT
import { useUser } from '../context/UserContext';

//COMPONENTS
import BasicLoading from '../components/BasicLoading';
import Alert from '../utils/Alert';

//ASSET
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCirclePlay, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Happy from '../assets/happy.png';
import Background from '../assets/score.gif';

const ClassOrientationQuiz = () => {
    // Parameters Page
    const { slug, id } = useParams();

    // Navigation
    const navigate = useNavigate();

    // User Context
    const { username, courseTopic, setTopicSlug, isLoading, postProgressQuiz } = useUser();

    // Answer State
    const [answers, setAnswers] = useState({});

    // Already Answer State
    const [savedAnswers, setSavedAnswers] = useState({});
    const [score, setScore] = useState(0);
    const [scoreDescription, setScoreDescription] = useState("");
    const [showScore, setShowScore] = useState(false);

    const [isError, setIsError] = useState(false);

    // Effect to Trigger Course Topic
    useEffect(() => {
        setTopicSlug(slug);
    }, []);

    // Effect to Trigger Answered
    useEffect(() => {
        if (courseTopic && courseTopic.topicActivity?.answers) {
            setSavedAnswers(courseTopic.topicActivity?.answers);
        }
        if (courseTopic && courseTopic.topicActivity?.value) {
            setScore(parseInt(courseTopic.topicActivity.value) || 0);
            if (courseTopic.topicActivity.value >= 0 && courseTopic.topicActivity.value <= 40) {
                setScoreDescription(`Sayang sekali, ${username}, nilaimu masih dibawah rata-rata. Terus belajar dan tingkatkan!`);
            } else if (courseTopic.topicActivity.value > 40 && courseTopic.topicActivity.value <= 60) {
                setScoreDescription(`Usaha yang baik, ${username}! Masih ada ruang untuk berkembang!`);
            } else if (courseTopic.topicActivity.value > 60 && courseTopic.topicActivity.value <= 80) {
                setScoreDescription(`Kerja bagus, ${username}! Hampir sempurna!`);
            } else if (courseTopic.topicActivity.value > 80 && courseTopic.topicActivity.value <= 100) {
                setScoreDescription(`Luar biasa! Nilai sempurna, selamat ${username}!`);
            }
            setShowScore(true);
        }
    }, [courseTopic]);

    // Function Route Page
    const nextPage = () => {
        navigate(`/class/${id}/organization/${courseTopic?.nextTopic?.slug}`)
    }
    const prevPage = () => {
        navigate(`/class/${id}/orientation/${courseTopic?.prevTopic?.slug}`)
    }

    // Function Handle Quiz Answer Select
    const handleAnswerSelect = (questionId, selectedOption) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: selectedOption,
        }));
    };

    // Function Handle Quiz Submit
    const handleSubmit = () => {
        const unansweredQuestions = question.filter((q) => !answers[q.id]);

        if (unansweredQuestions.length > 0) {
            setIsError('Please, Answer All Question First!')
            return;
        }

        postProgressQuiz(courseTopic?.id, answers);
        setShowScore(true);
        setAnswers({});
    };

    const question = courseTopic?.questions;

    if (isLoading) {
        return (
            <BasicLoading loadingNotes="Loading Quiz" />
        );
    }

    return (
        <main>
            {
                isError && <Alert isError={isError} setIsError={setIsError} />
            }
            <section className='w-full h-fit flex flex-col gap-6 pt-[120px] p-6'>
                <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl lg:p-6 gap-12'>
                    <div className='w-full h-full flex flex-col gap-8'>
                        <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 border border-[var(--color-secondary)] rounded-full'>
                            <FontAwesomeIcon icon={faBullseye} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                            <h3 className='w-fit text-[20px] text-center leading-none font-semibold uppercase'>Quiz Orientasi Permasalahan</h3>
                        </div>
                        <p className='text-sm leading-6'>Sebelum memasuki pembelajaran lebih lanjut. Silahkan kerjakan quiz berikut sebaik mungkin!</p>

                        {savedAnswers.length > 0 ?
                            (question.map((q, index) => {
                                const option = q.terms;
                                const currentQuestion = savedAnswers[index];

                                return (
                                    <section className='space-y-4'>
                                        <div key={index} className='w-full h-fit flex flex-row justify-between items-center p-6 border border-[var(--color-secondary)] rounded-full'>
                                            <div className='flex flex-row items-center justify-start gap-4'>
                                                <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                                    <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                                                </div>
                                                <h3 className='text-[20px] text-left leading-none font-semibold'>Soal No. {index + 1}</h3>
                                            </div>
                                            <div className='w-fit flex flex-row items-center gap-2'>
                                                <FontAwesomeIcon icon={faStar} className='text-[var(--color-secondary)]' />
                                                <p className='text-sm'>{q.point} Points</p>
                                            </div>
                                        </div>

                                        <div className={`w-full h-fit grid ${q.image ? "grid-cols-2" : "grid-cols-1"}`}>
                                            {
                                                q.image &&
                                                <div className='w-full h-fit bg-[var(--color-non-primary)] rounded-3xl overflow-hidden'>
                                                    <img className='w-full h-full bg-cover' src={`${process.env.REACT_APP_API_IMGURL}${q.image.url}`} alt='Quiz-Image' />
                                                </div>
                                            }
                                            <div className='w-full h-full flex flex-col gap-4 lg:p-6'>
                                                <h3 className='w-full text-[24px] lg:text-[36px] text-left font-semibold'>{q.question}</h3>
                                                {
                                                    option.map((i, index) => {
                                                        let buttonStyle;

                                                        if (currentQuestion?.terms[0]?.title === i.title) {
                                                            if (currentQuestion?.terms[0]?.correct) {
                                                                buttonStyle = "bg-green-500 font-bold";
                                                            }
                                                            else {
                                                                buttonStyle = "bg-red-500 font-bold";
                                                            }
                                                        } else {
                                                            buttonStyle = "bg-[var(--color-non-primary)]";
                                                        }

                                                        return (
                                                            <button key={index} className={`w-full h-fit rounded-3xl ${buttonStyle} p-6 text-center`}>
                                                                <p className='text-sm leading-6'>{i.title}</p>
                                                            </button>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </section>
                                )
                            })
                            )
                            :
                            (
                                <>

                                    {question.map((q, index) => {
                                        const option = q.terms;
                                        return (
                                            <section className='space-y-4'>
                                                <div key={index} className='w-full h-fit flex flex-row justify-between items-center p-6 border border-[var(--color-secondary)] rounded-full'>
                                                    <div className='flex flex-row items-center justify-start gap-4'>
                                                        <div className='w-[36px] h-[36px] bg-[var(--color-accent)] flex justify-center items-center rounded-xl text-[var(--color-primary)]'>
                                                            <FontAwesomeIcon icon={faCirclePlay} className='ease-in-out transition-all duration-300 hover:rotate-45' />
                                                        </div>
                                                        <h3 className='text-[20px] text-left leading-none font-semibold'>Soal No. {index + 1}</h3>
                                                    </div>
                                                    <div className='w-fit flex flex-row items-center gap-2'>
                                                        <FontAwesomeIcon icon={faStar} className='text-[var(--color-secondary)]' />
                                                        <p className='text-sm'>{q.point} Points</p>
                                                    </div>
                                                </div>

                                                <div className={`w-full h-fit grid ${q.image ? "grid-cols-2" : "grid-cols-1"}`}>
                                                    {
                                                        q.image &&
                                                        <div className='w-full h-fit bg-[var(--color-non-primary)] rounded-3xl overflow-hidden'>
                                                            <img className='w-full h-full bg-cover' src={`${process.env.REACT_APP_API_IMGURL}${q.image.url}`} alt='Quiz-Image' />
                                                        </div>
                                                    }
                                                    <div className='w-full h-full flex flex-col gap-4 p-6'>
                                                        <h3 className='w-full text-[36px] text-left font-semibold'>{q.question}</h3>
                                                        {
                                                            option.map((i, index) => {
                                                                return (
                                                                    <button key={index} onClick={() => handleAnswerSelect(q.id, i.id)} className={`w-full h-fit rounded-3xl ${answers[q.id] === i.id ? "bg-[var(--color-tertiary)] font-bold" : "bg-[var(--color-non-primary)]"} p-6 text-center hover:font-bold hover:bg-[var(--color-tertiary)]`}>
                                                                        <p className='text-sm leading-6'>{i.title}</p>
                                                                    </button>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>

                                            </section>
                                        )
                                    })}
                                    <div className='w-full h-fit flex items-center justify-end'>
                                        <button
                                            onClick={() => handleSubmit()}
                                            className='w-fit h-auto flex items-center justify-center gap-2 bg-[var(--color-tertiary)] text-[var(--color-secondary)] rounded-full pt-[8px] pb-[10px] px-[20px] group'
                                        >
                                            <p className='font-normal transform ease-in-out duration-300 transition-all group-hover:mr-8'>Submit Quiz</p>
                                            <FontAwesomeIcon icon={faArrowRight} className='w-[12px] h-[12px] text-[var(--color-secondary)]' />
                                        </button>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </section>

            {showScore &&
                <section className='w-full h-fit flex flex-col justify-center items-center p-6'>
                    <div className='w-full h-full flex flex-col justify-between text-[var(--color-secondary)] rounded-3xl p-6 gap-12'>
                        <div className='w-full h-[80vh] relative flex flex-col gap-4 justify-center items-center text-[var(--color-primary)] rounded-3xl p-6 overflow-hidden'>
                            <img src={Background} className="absolute w-full h-full blur-lg object-cover" alt="" />
                            <img src={Happy} alt='' className='w-[10%] z-20' />
                            <div className='w-fit h-fit flex flex-row items-center gap-2 px-6 py-2 z-20 border border-[var(--color-primary)] rounded-full'>
                                <p className='w-fit text-sm text-center leading-none font-semibold'>Congratulations</p>
                            </div>
                            <h3 className='w-fit text-[36px] text-center font-bold z-20'>{score} Point</h3>
                            <p className='w-full md:w-[30%] text-sm leading-6 z-20 text-center'>{scoreDescription}</p>
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
            }
        </main>
    )
}

export default ClassOrientationQuiz;