import React from 'react'

export default function Link({text,target,icon}) 
{
    return <a className='flex gap-1 mx-3 link-hover' href={`${target}`}>
            {icon && <img className='w-5' src={`${icon}`}/>}
            {text}
        </a>
}