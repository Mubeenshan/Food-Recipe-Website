
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Faviorite from './pages/favourite'
import Details from './pages/details'

function App() {


  return (
    <div>
    <div className='min-h-screen p-6 bg-white text-gray-600 text-lg '> 
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favourite' element={<Faviorite/>}/>
        <Route path='/recipe-item/:id' element={<Details/>}/>
      </Routes>
      
    </div>
    </div>
  )
}

export default App
