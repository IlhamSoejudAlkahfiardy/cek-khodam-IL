import React from 'react'

const openLink = (link) => {
    window.open(link, '_blank')
}

const Footer = () => {
    return (
        <div className='w-full h-20 bg-red-500 fixed bottom-0 border-t border-slate-200/10 backdrop-blur-sm bg-slate-600/25 flex gap-5 justify-center items-center'>
            <p className='font-medium text-slate-200 tracking-wider'>By Alkahfiardy</p>
            <p className='font-medium text-slate-200 tracking-wider'>|</p>
            <p onClick={() => openLink('https://www.instagram.com/ilhamsoejud/')} className='font-medium text-slate-200 tracking-wider hover:cursor-pointer'>Instagram</p>
            <p className='font-medium text-slate-200 tracking-wider '>|</p>
            <p onClick={() => openLink('https://github.com/IlhamSoejudAlkahfiardy/cek-khodam-IL')} className='font-medium text-slate-200 tracking-wider hover:cursor-pointer'>Github</p>
        </div>
    )
}

export default Footer