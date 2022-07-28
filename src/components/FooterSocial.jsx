import React from 'react'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiOutlineInstagram, AiFillGithub} from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
const FooterSocial = () => {
    return (
        <div className='flex justify-center items-center text-5xl'>
            <div className='p-[50px]'><AiFillGithub /></div>
            <div className='p-[50px]'><AiOutlineTwitter /></div>
            <div className='p-[50px]'><AiOutlineGooglePlus /></div>
            <div className='p-[50px]'><AiOutlineInstagram /></div>
            <div className='p-[50px]'><FaLinkedinIn /></div>
        </div>
    )
}

export default FooterSocial