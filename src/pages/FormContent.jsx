import React from 'react'
import { useParams } from 'react-router';

const FormContent = () => {

    const { form } = useParams();

    const formList = {
        pretest: "https://docs.google.com/forms/d/e/1FAIpQLSf-oSQj8WkYdQqNUx5Tni0x2UnaOikSCblXaTTj4LiF04AL8w/viewform?embedded=true",
        posttest: "https://docs.google.com/forms/d/e/1FAIpQLScobqiSBys148CLTxPAD6GpPlfkJ0TgQ38ke7mRb-YPBXWa9g/viewform?embedded=true",
        kuisioner: "https://docs.google.com/forms/d/e/1FAIpQLSfFwzfHxZo0g1bLvxHQ2pug23gjWwKvONU-Y1CkBzLBb6Wtag/viewform?embedded=true"
    };

    const formEmbed = formList[form];

    return (
        <div className='w-full h-screen my-2'>
            <iframe title={form} src={formEmbed} className='w-full h-full' frameborder="0">Loading…</iframe>
        </div>
    )
}

export default FormContent;