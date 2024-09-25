import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-around items-start bg-[#1F1F1F] p-4 rounded-lg'>
            <div>
              <Link 
                to="/" 
                className='hover:bg-[#161515] p-2 rounded-lg'
              > Dashboard</Link>
              
            </div>
            <div className=' space-x-10 '>
              <Link 
               to="/    "
               className='hover:bg-[#161515] p-2 rounded-lg'
              > MAIN</Link>

              <Link 
                to="/contact"
                className='hover:bg-[#161515] p-2 rounded-lg'
              > CONTACT</Link>

              <Link 
                to="/login"
                className='hover:bg-[#161515] p-2 rounded-lg'
              > LOGIN</Link>
            </div>
          </div>
  )
}

export default Navbar