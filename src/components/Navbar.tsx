import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'

const Navbar = () => {
  return (
    <div className='flex justify-around items-start bg-[#1F1F1F] p-4 rounded-lg'>
      <div>
        <Link
          to="/"
          className='hover:bg-[#161515] p-2 rounded-lg'
        > Dashboard</Link>

      </div>
      <div className='flex space-x-10 '>

        <div className='space-x-7'>
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
        <div className='flex'>
          <div className='pr-2'>
            <img className='rounded-3xl' src={auth.currentUser?.photoURL || ""} width="30" height="50" />
          </div>
          <div>
            <p>{auth.currentUser?.displayName}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar