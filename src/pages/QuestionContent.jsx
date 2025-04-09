import { useState } from 'react';

/* Icon Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

/* Context */
import { useUser } from '../context/UserContext';

/* Assets */
import Avatar from '../assets/avatar.png';

/* Question Data */
const faqs = [
    {
        question: "Apa itu Logic Base?",
        answer: "Logic Base adalah platform pembelajaran yang dirancang untuk meningkatkan kemampuan logika Anda melalui konten dan latihan interaktif."
    },
    {
        question: "Apakah aplikasi website logic base bisa diakses di smartphone?",
        answer: "Saat ini aplikasi website logic base hanya bisa diakses melalui browser pada personal computer. Mode smartphone direncanakan untuk pembaruan mendatang"
    },
    {
        question: "Apakah saya bisa mengakses Logic Base secara offline?",
        answer: "Saat ini, Logic Base hanya dapat diakses secara online. Mode offline direncanakan untuk pembaruan mendatang."
    },
    {
        question: "Bagaimana cara mengatur ulang progres saya?",
        answer: "Progres Anda adalah hasil dari pekerjaan dan usaha Anda, sehingga tidak dapat diatur ulang. Namun, Anda selalu dapat memulai kembali materi dari awal untuk memperkuat pemahaman Anda."
    },
    {
        question: "Apakah saya dapat mengakses quiz berulang-ulang?",
        answer: "Hasil pekerjaan quiz anda tidak dapat diulang, tetapi kami menunjukkan hasil jawaban quiz Anda benar atau salah sebagai bahan untuk evaluasi selanjutnya."
    },
    {
        question: "Bagaimana jika saya melupakan password untuk sign in?",
        answer: "Anda dapat menghubungi administrator untuk melalukan reset password."
    }
];

const QuestionContent = () => {
    const { username } = useUser();
    const [activeIndex, setActiveIndex] = useState(0);

    /* Accordion Toggle Function */
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <main className='w-full h-fit flex justify-center lg:justify-end my-6 mb-[120px] lg:my-6' id='question'>
            <div className='w-full lg:w-[85%] h-fit flex flex-col gap-4 lg:mr-6 px-4'>

                {/* Header */}
                <nav className='w-full h-[100px] flex justify-between items-center bg-[var(--color-non-primary)] rounded-full px-6 lg:px-12'>
                    <div className='w-fit h-fit flex flex-row justify-start items-center gap-2'>
                        <h2 className='text-[32px] text-left leading-none font-bold text-[var(--color-secondary)]'>FAQ'S</h2>
                        <FontAwesomeIcon icon={faChartSimple} className='w-[24px] h-[24px] text-[var(--color-secondary)]' />
                    </div>

                    <div className='w-fit h-fit hidden md:flex flex-row justify-center items-center gap-2'>
                        <img id="avatarButton" type="button" className="w-10 h-10 rounded-full" src={Avatar} alt="User Dropdown" />
                        <p className='text-sm'>Halo, {username}</p>
                    </div>
                </nav>

                {/* Question Accordion */}
                <section className='w-full flex flex-col gap-4'>
                    {faqs.map((faq, index) => (
                        <div key={index} className='border-2 bg-[var(--color-non-primary)] p-6 rounded-3xl'>
                            <div
                                className='flex justify-between items-center cursor-pointer'
                                onClick={() => toggleAccordion(index)}
                            >
                                <h4 className='text-[18px] font-medium text-[var(--color-secondary)]'>{faq.question}</h4>
                                <FontAwesomeIcon
                                    icon={activeIndex === index ? faChevronUp : faChevronDown}
                                    className='text-[var(--color-secondary)]'
                                />
                            </div>
                            {activeIndex === index && (
                                <p className='mt-4 text-sm leading-7 text-[var(--color-secondary)]'>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </section>
            </div>
        </main>
    )
}

export default QuestionContent;