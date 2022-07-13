import React from 'react'
import '../index.css'
import Button from './Button';
import Link from './Link';

export default function Hero() {
  return (
    <main className='flex flex-col lg:flex-row justify-between m-auto w-5/6 lg:h-[calc(100vh-7rem)] pt-6'>
        <div className='h-full'>
            <img className='block w-48 m-auto lg:w-auto lg:h-full' src="/images/illustration.png" alt="" />
        </div>
        <div className='flex flex-col items-center justify-between w-full lg:w-2/4'>
            <h1 className='text-8xl font-semibold lg:pt-12 text-center lg:text-left'>
                <p className='inline'>The bank that does it all</p>
                <img className='inline w-24 ml-4' src="/images/arrow.svg" alt="" />
            </h1>
            <div className='flex items-center justify-center w-full gap-10 lg:justify-start mt-4 mb-4 lg:mt-0 lg:mb-0'>
                <p className='w-64 '>From easy money mangement, to travel perks and investments. Open your account in a flesh</p>
                <Button text={'Open bank account'} target={'#'}/>
            </div>
            <div className='flex items-center w-full gap-6 mt-4 justify-center  lg:justify-start mt-4 lg:mt-0 mb-8 lg:mb-0'>
                <div>
                    <img className='w-14' src="/images/card.jpg" alt="" />
                </div>
                <div>
                    <p className='text-sm'>Cards with style and substance</p>
                    <a href='#' className='inline font-semibold border-b border-black pb-1 text-sm'>Get a card</a>
                    <img className='w-4 inline' src="/images/arrow-right.svg" alt="" />
                </div>
            </div>
        </div>
    </main>
  )
}
