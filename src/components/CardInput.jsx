import React from 'react'
import { useState } from 'react'

const CardInput = ({ name, setName, handleClick }) => {
    const [inputName, setInputName] = useState('');

    return (
        <div className='w-full border border-slate-200/10 hover:border-slate-200 transition-all duration-500 backdrop-blur-md bg-slate-600/25 p-5 rounded-lg flex flex-col gap-5 shadow-md'>
            <p className='text-base md:text-lg text-slate-200'>Masukkan Nama Kamu</p>

            <div className='w-full h-12 bg-neutral-900 rounded-md'>
                <input required onChange={(e) => setInputName(e.target.value)} autoFocus type="text" className='w-full h-full bg-transparent text-slate-200 px-3 border-neutral-900 border-transparent focus:border-neutral-900 focus:outline-none text-sm' />
            </div>

            <div onClick={() => { setName(inputName); handleClick(); }} className='w-full h-12 bg-slate-200 hover:bg-slate-400 transition-all duration-500 border border-slate-200/20 rounded-md flex justify-center items-center hover:cursor-pointer shadow-md'>
                <p className='text-slate-900 font-semibold'>Cek Khodam!!</p>
            </div>

        </div>
    )
}

export default CardInput