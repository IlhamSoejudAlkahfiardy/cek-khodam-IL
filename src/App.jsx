import React, { useEffect, useState } from 'react'
import './app.css'
import Title from '../src/components/Title'
import Footer from './components/Footer'
import CardInput from './components/CardInput'
import CardOutput from './components/CardOutput'
import data from './assets/data/data'

function App() {
  const [name, setName] = useState(null);
  const [showCardOutput, setShowCardOutput] = useState(false);
  const [khodam, setKhodam] = useState(null);

  const handleClick = () => {
    const randomKhodam = data[Math.floor(Math.random() * data.length)];
    setKhodam(randomKhodam);
  }

  useEffect(() => {
    if (name != '' && name != null) {
      setShowCardOutput(true);
    } else {
      setShowCardOutput(false);
    }
  }, [name]);

  return (
    <>
      <div className='w-screen h-screen md:justify-center flex items-center'>
        <div className="w-full md:max-w-lg h-fit flex flex-col gap-8 m-5">
          <div className="w-full h-fit flex justify-center md:justify-start gap-5">
            <Title text={"Cek Khodam Mentor IL Kamu Disini"} />
          </div>
          <CardInput name={name} setName={setName} handleClick={handleClick} />
          {showCardOutput ? <CardOutput name={name} khodam={khodam} /> : null}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
