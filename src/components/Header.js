import React from 'react'
import Link from './Link'
import Button from './Button';

export default function Header() {
  return (
    <header>
        <div className="flex items-center w-11/12 h-20 m-auto justify-between">
          <div className='flex items-center'>
            <div className='bg-black w-6 h-6 rounded-full'></div>
            <p className="font-bold text-xl mx-2">heybank</p>
          </div>
          <nav className='flex justify-between'>
            <Link text={'Account'} target={'#'}/>
            <Link text={'Financial Products'} target={'#'}/>
            <Link text={'Manage'} target={'#'}/>
            <Link text={'Blog'} target={'#'}/>
          </nav>
          <div className='flex items-center gap-4'>
              
              <Link icon={'/images/lock.svg'} text={'Online banking'} target={'#'}/>
              <Button text={'Sign up'} target={'#'}/>              
          </div>
        </div>
      </header>
  )
}
