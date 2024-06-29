import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Foods from './components/foods/foods'
import Header from './components/header/header'

function App() {
  const [cooks, setCooks] = useState([]);

  const handleWantToCook = (id) => {
      // const c = foods.filter(food => food.id === id);
      // setCooks(c);
      console.log("cooking");
  }
  return (
    <>
    <Header></Header>
    <Banner></Banner>

    <div className='container mx-auto mb-[2.5rem] md:mb-[4.5rem] lg:mb-[6.25rem] px-2 md:px-15 lg:px-20 text-center max-w-5xl'>
      <h1 className='text-2xl lg:text-3xl font-bold mb-3'>Our Recipes</h1>
      <p className='font-light'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
    </div>

    <div className='flex justify-between'>
      <div className='flex-1'>
        <Foods handleWantToCook={handleWantToCook}></Foods>
      </div>
      <div>
        {/* <Cooks></Cooks> */}
      </div>
    </div>
    </>
  )
}

export default App
