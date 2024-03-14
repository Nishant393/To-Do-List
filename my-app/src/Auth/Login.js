import React,{useEffect} from 'react'
import axios from 'axios'
import { user } from './api'

function Login() {
  useEffect(() => {
    user()
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  }, [])
  return (

    <div>
      <h1>Login</h1>
      <form >
        <div>
        <label>Mail </label>
        <input placeholder='G-mail' type='mail' width={"80%"} />
        </div>
        <div>
        <label>password</label>
        <input placeholder='******' type='password' width={"80%"} />
        </div>
      </form>
    </div>
  )
}

export default Login