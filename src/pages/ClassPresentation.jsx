import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

// USER CONTEXT
import { useUser } from '../context/UserContext';

// AXIOS
import axios from 'axios';

// ASSETS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThunderstorm, faCirclePlay, faCat, faDownload, faUpload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BasicLoading from '../components/BasicLoading';
import Instruksi from '../assets/instruksi.jpg';

const ClassPresentation = () => {
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

    const nextPage = () => {
        postProgressNonQuiz(courseTopic?.id);
        navigate(`/class/${id}/evaluation/${courseTopic?.nextTopic?.slug}`);
    }

    const prevPage = () => {
        navigate(`/class/${id}/research/${courseTopic?.prevTopic?.slug}`);
    }

    const handleDownloadFile = (fileLink) => {
        const file = `${process.env.REACT_APP_API_IMGURL}${fileLink}`;
        window.open(file, '__blank');
    };

    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const token = localStorage.getItem("token");

        if (!file) {
            setUploadStatus('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('files', file);

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                },
            });

            setUploadStatus('File uploaded successfully!');
        } catch (error) {
            console.error('File upload failed:', error);
            setUploadStatus('Failed to upload the file. Please try again.');
        }
    };


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
                                    <div className='w-full h-fit bg-[var(--color-non-primary)] rounded-3xl overflow-hidden'>
                                        <img src={Instruksi} alt='Instruksi LKPD' className='w-full object-cover' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <p className='text-sm font-bold'>Instruksi dan Petunjuk</p>
                                        <p className='text-sm leading-6'>Perhatikan instruksi pada gambar berikut ini ya!</p>
                                    </div>
                                </div>
                                <div className='w-full h-full col-span-1 flex flex-col items-start gap-6 rounded-3xl'>
                                    <div className='w-full flex flex-col items-left justify-center gap-2 p-8 bg-[var(--color-non-primary)] rounded-3xl'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FontAwesomeIcon icon={faCat} className='text-[var(--color-secondary)]' />
                                            <p className='text-sm font-bold'>File Modul</p>
                                        </div>
                                        <p className='text-sm leading-6'>Modul pembelajaran untuk menambah pemahaman dan pengetahuan-mu!</p>
                                        <button className="mt-4 px-4 py-2 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-accent)] hover:bg-[var(--color-shadow)] rounded-full transition duration-300" onClick={() => handleDownloadFile(courseTopic?.content[0]?.moduleFile.url)}>Unduh File</button>
                                    </div>
                                    <div className='w-full flex flex-col items-left justify-center gap-2 p-8 bg-[var(--color-non-primary)] rounded-3xl'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FontAwesomeIcon icon={faDownload} className='text-[var(--color-secondary)]' />
                                            <p className='text-sm font-bold'>File LKPD</p>
                                        </div>
                                        <p className='text-sm leading-6'>Klik modul di bawah ini untuk mengunduh dokumen pengerjaan LKPD!</p>
                                        <button className="mt-4 px-4 py-2 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-accent)] hover:bg-[var(--color-shadow)] rounded-full transition duration-300" onClick={() => handleDownloadFile(courseTopic?.content[0]?.lkpdFile.url)}>Unduh File</button>
                                    </div>
                                    <div className='w-full flex flex-col items-left justify-center gap-2 p-8 bg-[var(--color-non-primary)] rounded-3xl'>
                                        <div className='flex flex-row items-center gap-4'>
                                            <FontAwesomeIcon icon={faUpload} className='text-[var(--color-secondary)]' />
                                            <p className='text-sm font-bold'>Upload File LKPD</p>
                                        </div>
                                        <p className='text-sm leading-6'>Unggah hasil pekerjaanmu disini ya!</p>
                                        <input type="file" onChange={handleFileChange} className="mt-4 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-accent)] file:text-white hover:file:bg-[var(--color-shadow)]" />
                                        <button className="mt-4 px-4 py-2 text-sm font-medium text-[var(--color-primary)] bg-[var(--color-accent)] hover:bg-[var(--color-shadow)] rounded-full transition duration-300" onClick={handleUpload}>Upload File</button>
                                        {uploadStatus && <p className="mt-2 text-sm text-[var(--color-secondary)]">{uploadStatus}</p>}
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