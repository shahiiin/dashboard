import React from 'react'
import FooterSocial from './FooterSocial'

const Footer = () => {
  return (
    <div className=' bg-primary text-white border border-white '>
      <FooterSocial />
      <hr/>
      <div className='flex flex-col justify-center items-center font-bold pt-[25px]'>
        <p>shahin shahi</p>
        <p className='py-[10px]'>shahin.shahi1986@gmail.com</p>
        <p>0546-653-8027</p>
      </div>
    </div>
  )
}

export default Footer