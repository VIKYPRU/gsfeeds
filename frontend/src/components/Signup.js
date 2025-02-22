import React, { useState } from 'react'

export default function Signup() {
    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

  return (
    <div>
        <form >
            <label>Name</label><br/>
            <input type='text' value={username} onChange={(e)=>{setUserName(e.target.value)}}/><br/>
            <label>Email</label><br/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <label>Password</label><br/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
            <button type='submit'>Sign up</button>

        </form>
    </div>
  )
}