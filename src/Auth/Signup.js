import React, { useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import axios from 'axios'

const Signup = () => {
    const Nvgt = useNavigate()
    const { user, setUser } = useContext(userContext)

    const refName = useRef()
    const refEmail = useRef()
    const refPassword = useRef()

    const handleClick = async (e) => {
        e.preventDefault();

        const newRefName = refName.current.value;
        const newRefEmail = refEmail.current.value;
        const newRefPassword = refPassword.current.value;

        const value = {
            name: newRefName,
            email: newRefEmail,
            password: newRefPassword
        };
        console.log(value);

        setUser([...user, value]);

        try {
            const data = {
                "name": newRefName,
                "email": newRefEmail,
                "password": newRefPassword
            }
            await axios.post('http://localhost:4000/auth/signup', data).then((res) => {
                console.log(res);
                Nvgt('/login')
            }).catch((err) => {
                console.error(err)
            })
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="container-fluid" style={{ position: 'relative', top: '200px', }}>
            <form className="mx-auto" >
                <h4 className="text-center" style={{ color: 'black', fontFamily: 'inherit' }}>SignUp</h4>
                <div className="mb-2 mt-3">
                    <label htmlFor="exampleInputname" className="form-label" style={{ color: 'black' }} >Name</label>
                    <input type="name" className="form-control" id="exampleInputname" aria-describedby="emailHelp" placeholder='Enter your name..' ref={refName} />
                </div>
                <div className="mb-2 mt-2">
                    <label htmlFor="exampleInputEmail" className="form-label" style={{ color: 'black' }}>Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder='Enter your email..' ref={refEmail} />
                </div>
                <div className="mb-2">
                    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black' }}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password..' ref={refPassword} />
                </div>
                <button type="submit" className="btn btn-primary mt-2" style={{ border: 'none' }} onClick={handleClick}>Register</button>
            </form>
        </div>
    )
}

export default Signup