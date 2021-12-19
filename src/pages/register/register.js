import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { registerInitiate } from '../../redux/actions/authenticationAction';
// rsc 
const Register = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
        name: '',
        confirmPassword: ""

    })
    const { currentUser } = useSelector(state => state.user)



    useEffect(() => {
        if (currentUser) {
            alert('success')
        }
    }, [currentUser])

    const dispatch = useDispatch()

    const { email, password, name, confirmPassword } = state;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return;
        }
        dispatch(registerInitiate(email, password, name))
        setState({ email: '', name: '', password: '', confirmPassword: '' })


    }
    const handleChange = (e) => {
        let { name, value } = e.target
        setState({ ...state, [name]: value })
    }
    return (
        <div className='container w-25 shadow p-5 my-5'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input
                        type="text"
                        name='name'
                        value={name}
                        onChange={handleChange}
                        class="form-control"
                        id="name" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input
                        type="email"
                        name='email'
                        value={email}
                        onChange={handleChange}
                        class="form-control"
                        id="exampleInputEmail1" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input
                        type="password"
                        name='password'
                        value={password}
                        onChange={handleChange}
                        class="form-control"
                        id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                    <input
                        type="password"
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        class="form-control"
                        id="confirmPassword" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button> <br />
                <Link to='/login'>Already have an account?</Link>
            </form>
        </div>
    );
};

export default Register;