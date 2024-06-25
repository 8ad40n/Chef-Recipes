import { useState } from 'react'
import './App.css'
import Banner from './components/banner/banner'
import Header from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Banner></Banner>
    </>
  )
}

export default App
