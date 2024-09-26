import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

const Navbar = () => {

  const [user] = useAuthState(auth)

  const signUserOut = async () => {
    await signOut(auth)
  }

  return (
    <div className='flex justify-around items-start bg-[#1F1F1F] pt-5 pb-5  rounded-lg'>
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
          > Main</Link>

          <Link
            to="/contact"
            className='hover:bg-[#161515] p-2 rounded-lg'
          > Contact</Link>

          {!user ? <Link
            to="/login"
            className='hover:bg-[#161515] p-2 rounded-lg'
          > Login</Link> :
            <Link
              to="/createPost"
              className='hover:bg-[#161515] p-2 rounded-lg'
            > Create Post</Link>}
        </div>
        <div className='flex'>
          <div className='pr-2'>
            <img
              className='rounded-3xl'
              src={user?.photoURL || "/path/to/default-avatar.png"}
              width="20"
              height="20"
            />
          </div>
          
          {user && (
            <>
              <div className='pr-10'>
                <p>{user?.displayName}</p>
              </div>
              <div className=' hover:bg-[#161515] rounded-lg'>
                <button className='' onClick={signUserOut}>Sign out</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar