import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../firebase/Firebase"
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUser, setLogoutUser, selectUserName, selectUserEmail } from '../../redux2/userSlice/userSlice'

export default function Login() {
    // const [state, setState] = useState({
    //     email: "",
    //     password: ""
    // })
    // const { email, password } = state;

    const handleSubmit = () => { }
    const handleChange = () => { }

    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    const userEmail = useSelector(selectUserEmail)

    const handleSignIn = () => {
        signInWithPopup(auth, googleAuthProvider)
            .then((result) => dispatch(setActiveUser({
                userName: result.user.displayName,
                userEmail: result.user.email
            })))
    }

    const handleSignOut = () => {
        auth.signOut().then(() => dispatch(setLogoutUser()))
            .catch(err => alert(err.message))
    }

    return (
        <div className='container w-25 shadow p-5 my-5'>
            <h2>Login</h2>

            {

                userName ? (
                    <button onClick={handleSignOut}>Sign out</button>
                ) : (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" onChange={handleChange} className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button> <br />
                            <Link to='/register'>Don't have an account?</Link>

                            <p>OR</p>
                        </form>
                        <button onClick={handleSignIn}>Sign in with google</button>
                    </>
                )
            }

        </div>
    )
}
