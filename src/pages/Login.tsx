import {auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => { 

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result);
        navigate("/")
    }

    return ( 
        <div className="flex flex-col justify-center items-center p-52">
            <p
                className="pb-5"
            >Sign in with Google to Continue</p>
            <button
                onClick={signInWithGoogle}
                className="bg-[#1F1F1F] p-2 rounded-lg font-bold"
            >Sign in</button>
        </div>
    );
}
 
export default LoginPage;