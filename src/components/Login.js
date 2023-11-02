import { GoogleAuthProvider ,signInWithPopup } from 'firebase/auth'
import LoginForm from './LoginForm'
import { auth } from '../utils'
export default function Login(){
    const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth,provider)  
    console.log(response?.user)  // optional chaning operator
    }
    return(
        <section>
            <h2>Login</h2>
            <LoginForm />
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </section>
    )
}