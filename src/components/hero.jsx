import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'
import HeroPic from '../assets/profile2.jpg'

export default function Hero() {
  return (
    <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white '>
        <div className='lg:w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-5 text-slate-300'>
                I'm
            </p>
            <h1 className='text-5xl'>Woro Susanto</h1>
            <hr/>
            <p className='mt-10  text-slate-300 font-sans'>
            Vestibulum eu leo et augue pretium laoreet iaculis at mauris. Mauris ipsum purus, ullamcorper vitae turpis id, ornare faucibus ipsum. Donec dapibus consectetur purus, non congue mauris vestibulum at. Fusce quis dictum neque. Nulla tincidunt tincidunt ipsum, vitae faucibus tortor consectetur suscipit. Ut nisl ligula, congue vel massa nec, sodales varius dui. Aliquam egestas nisl nec urna laoreet blandit. In consequat quis felis et ornare. Nam et lobortis mi.
            </p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
            <img src={HeroPic} alt="" width={250} height={250} className='rounded-full w-full border-8 border-white'/>
        </div>
        <div className='w-1/3 ssm:w-fit'>
            <p className='text-4xl mb-4'>About me</p>
            <p className='text-slate-300 '>
                let's build quality desaign in programming and design with our services 
            </p>
            <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
                Show More...
            </button>

            <div className='flex mt-5 space-x-4 cursor-pointer'>
                <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full' />
                <BsYoutube size={40} className='border-4 hover:border-indigo-800 rounded-full' />
            </div>
        </div>
    </section>
  )
}
