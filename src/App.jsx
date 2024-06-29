import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Bookmarks from './components/bookmarks/bookmarks'
import Foods from './components/foods/foods'
import Header from './components/header/header'


function App() {
  const [cooks, setCooks] = useState([]);

  const handleWantToCook = (food) => {
    const newCooks= [...cooks, food];
    setCooks(newCooks);
    console.log(food);
  }
  return (
    <>
    <Header></Header>
    <Banner></Banner>

    <div className='container mx-auto mb-[2.5rem] md:mb-[4.5rem] lg:mb-[6.25rem] px-2 md:px-15 lg:px-20 text-center max-w-5xl'>
      <h1 className='text-2xl lg:text-3xl font-bold mb-3'>Our Recipes</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
    </div>

    <div className='lg:flex gap-14 mx-auto container mb-[2.5rem] md:mb-[4.5rem] lg:mb-[6.25rem] px-2 md:px-15 lg:px-20'>
      <div className=''>
        <Foods handleWantToCook={handleWantToCook}></Foods>
      </div>
      <div className=''>
        <Bookmarks cooks={cooks}></Bookmarks>
      </div>
    </div>
    </>
  )
}

export default App
