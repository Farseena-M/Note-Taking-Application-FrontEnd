import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
const Nvgt = useNavigate()
const LrefEmail = useRef()
const LrefPass = useRef()

const handleClick = async (e) => {
    e.preventDefault();

    const LreffEmail = LrefEmail.current.value;
    const LreffPassword = LrefPass.current.value;

    Nvgt('/show')
    try {
        const data = {
          "email": LreffEmail,
          "password": LreffPassword
        }
        await axios.post('http://localhost:4000/auth/login', data).then((res) => {
          console.log(res);
          const userToken = res.data.token
          localStorage.setItem('userToken', userToken)
          Nvgt('/show')
        }).catch((err) => {
          console.error(err)
        })
      } catch (err) {
        console.error(err);
      }
}
  return (
    <div className="container-fluid" style={{ position: 'relative', top: '200px', }}>
   <form className="mx-auto">
   <h4 className="text-center" style={{ color: 'black', fontFamily: 'inherit' }}>Login</h4>
    <div className="mb-2">
    <label htmlFor="exampleInputemail" className="form-label" style={{ color: 'black' }}>email</label>
    <input type="email" className="form-control" id="exampleInputemail" placeholder='Enter your email..' ref={LrefEmail} />
  </div>
    <div className="mb-2">
    <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black' }}>Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password..'ref={LrefPass}/>
  </div>
  <button type="submit" className="btn btn-primary mt-2" style={{ border: 'none' }} onClick={handleClick}>Login</button>
</form>
</div>
  )
}

export default Login