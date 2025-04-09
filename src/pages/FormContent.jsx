/* React Hooks */
import { useParams } from 'react-router';

const formList = {
    pretest: "https://docs.google.com/forms/d/e/1FAIpQLSf-oSQj8WkYdQqNUx5Tni0x2UnaOikSCblXaTTj4LiF04AL8w/viewform?embedded=true",
    posttest: "https://docs.google.com/forms/d/e/1FAIpQLScobqiSBys148CLTxPAD6GpPlfkJ0TgQ38ke7mRb-YPBXWa9g/viewform?embedded=true",
    kuisioner: "https://docs.google.com/forms/d/e/1FAIpQLSfFwzfHxZo0g1bLvxHQ2pug23gjWwKvONU-Y1CkBzLBb6Wtag/viewform?embedded=true"
};

const FormContent = () => {
    const { form } = useParams();
    const formEmbed = formList[form];

    return (
        <main className='w-full h-[120vh] flex justify-center lg:justify-end my-6 mb-[120px] lg:my-6' id='profile'>
            <div className='w-full lg:w-[85%] h-full flex flex-col gap-4 lg:mr-6 px-4'>
                <iframe title={form} src={formEmbed} className='w-full h-full' frameborder="0"></iframe>
            </div>
        </main>
    )
}

export default FormContent;