import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import './Login.css'
import logo from './logo.jpg'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const clientid = "623748812411-her0nqpmmlt4pfds92vlv5nj9el4mmft.apps.googleusercontent.com";

const Login = () => {
  const responseGoogleSuccess = (response) => {
    console.log("Login Success:", response);

  };

  const responseGoogleFailure = (error) => {
    console.error("Login Failure:", error);
   
  };

  const navigate= useNavigate()

  return (
    <div> 
      <div className='background'>
      <div className="containerr">
          <div className="image">
            <div><img className='logo' src={logo} alt="" /></div>
            <div className='titi'>PS PORTAL</div>
          </div>
          <div className="gree">
          <h3 className='welcome'  onClick={() => navigate('Dashboard')}>Hi, Welcome Back</h3> 
          </div>
          <div >
          <button className='google' ><GoogleLogin
              clientId="623748812411-her0nqpmmlt4pfds92vlv5nj9el4mmft.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogleSuccess}
              onFailure={responseGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
    </button> 
          </div>
          <div >
            <h6 className="infor">Sign In with your BIT Sathy Account</h6>
          </div>
      </div>
    </div>
    
    </div>
  );
};


export default  Login






