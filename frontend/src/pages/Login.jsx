import React from 'react'
import Google from '../img/google.jpg'
import Facebook from '../img/facebook.png'

function Login() {

  
    const google = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };

    const facebook = () => {
      window.open("http://localhost:5000/auth/facebook", "_self");
    };



  return (
    <div className='login'>
        <h1 className= "loginTitle">Choose a login method</h1>
        <div className="wrapper">
            <div className= "left">
                <div className="loginButton google" onClick={google}>
                  <img src={Google} alt="" className="icon" /> 
                    Google
                </div>
                <div className="loginButton facebook" onClick={facebook}>
                  <img src={Facebook} alt="" className="icon" />  
                    Facebook
                </div>
            </div>
            <div className='center'>
                <div className='line'/>
                <div className='or'>OR</div>
            </div>
            <div className= "right">
                <input className="login-input" type="text" placeholder='Username'/>
                <input className="login-input" type="text" placeholder='Password'/>
                <button className="submit">Login</button>
               
            </div>
        </div>
    </div>
  )
}

export default Login