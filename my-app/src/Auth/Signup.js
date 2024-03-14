import React from 'react'

function Signup() {
  return (
    <div>
      <h1>Login</h1>
      <form >
        <div>
        <label>First Name</label>
        <input placeholder='First Name' type='name' width={"80%"} />
        </div>
        <div>
        <label>Last Name</label>
        <input placeholder='Last Name' type='name' width={"80%"} />
        </div>
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

export default Signup