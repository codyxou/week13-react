import React from 'react'

function Login() {
  return (
    <div>
        
        <div className='loginBox'>
        <h3>Login</h3>
            <form>
                <input type='email' name='email' placeholder='email' /><br></br>
                <input type='password' name='password' placeholder='password' />
            </form>
            <button>Login</button>
        </div>
    </div>
  )
}

export default Login