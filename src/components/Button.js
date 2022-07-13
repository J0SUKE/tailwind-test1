import React from 'react'

export default function Button({text,target}) {
    return <button className='text-gray-200'>
            <a className='block px-4 py-3.5 bg-black text-sm hover:bg-gray-600' href={`${target}`}>{text}</a>
        </button>
}
