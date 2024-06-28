import React, { useState } from 'react'

const CardOutput = ({ name, khodam }) => {
    return (
        <div className='w-full h-56 border border-slate-200/10 hover:border-slate-200 transition-all duration-500 backdrop-blur-md bg-slate-600/25 p-5 rounded-lg flex flex-col justify-center items-center gap-5 shadow-md'>
            <p className='text-slate-200 text-sm md:text-base'>{name}, Khodam mentor IL kamu adalah...</p>
            <p className='text-2xl md:text-3xl font-bold text-slate-300'>Kak {khodam}✨</p>
        </div>
    )
}

export default CardOutput