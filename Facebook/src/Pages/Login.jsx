import React, { useState } from 'react'
import './Login.scss'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = data;
    if (!email || !password) {
      alert("Please fill in both email and password.");
      return;
    }

    // If everything is valid, navigate to the home page (or wherever)
    navigate("/home");
    function handleCreateAccount(){
      navigate('/signup');
    };
  };
  return (
    <div>
      <div className="login_container">
        <div className="main_logo">
          <img className='logo_image' src="	https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
          <p className='container_h2'>Facebook helps you connect and share <br /> with the people in your life.</p>
        </div>

        <div className='login_right_container'>
          <div className="login_card">
            <h2 className='login_card_head' >Log in to Facebook</h2>
            <input className='login_card_input' type="text" placeholder="Email address or phone number" name='email' onChange={handleChange} required />
            <input className='login_card_input' type="password" placeholder="Password" name='password' onChange={handleChange} required />
            <button className="login_btn" type='submit' onClick={handleSubmit} >Log in</button>
            <div className="login_links">
              <a href="/">Forgot Password</a>
            </div>
            <hr />
            <button className="create_btn" onClick={handleCreateAccount} >Create new account</button>
          </div>
          <div className='login_a_tag'>
            <a className='a_link' href="#">Create a Page</a> for a celebrity, brand or business.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login