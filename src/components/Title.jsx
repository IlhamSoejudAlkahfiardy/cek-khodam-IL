import React from 'react'

const Title = ({ text }) => {
    return (
        <div className="w-fit border border-slate-200/10 shadow-md backdrop-blur-md bg-slate-600/25 flex justify-center items-center px-3 py-2 rounded-lg">
            <p className="text-slate-200 text-base md:text-lg font-bold tracking-wide">{text} </p>
        </div>
    )
}

export default Title