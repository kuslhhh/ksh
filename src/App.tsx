import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Error from './pages/Error'
import { Main } from './pages/main'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className=" bg-gradient-to-r from-[#1a1a1a] to-black h-screen text-[#a9a9a9] flex  p-10 bg-black flex-col">
          <Router>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App