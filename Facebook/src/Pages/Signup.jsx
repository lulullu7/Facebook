import React, { useState } from 'react'
import './Signup.scss'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [data, setData] = useState({
    firstName: "",
    surname: "",
    birthDay: "1",
    birthMonth: "Jan",
    birthYear: "2025",
    gender: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  }

  function handleSubmit(e){ 
    e.preventDefault();
    const { firstName, surname, birthDay, birthMonth, birthYear, gender, email, password } = data;
  if (!firstName || !surname || !birthDay || !birthMonth || !birthYear || !gender || !email || !password) {
    alert("Please fill in all the required fields.");
    return; 
  }
    navigate("/");
  };
  

  return (
    <div>
    <div className='main_div '>
      <div className='inner_div'>
        <div className="main_logo">
          <img src="	https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" style={{ height: '100px', width: '400px' }} />
        </div>
        <div className="signup_box_top">
          <h2 >Create a new account</h2>
          <p>It's quick and easy.</p>
        </div>
        <div className='signup_box_bottom'>
          <form className='signup_box_bottom_form'>
            <div className="signup_box_bottom_row">
              <input className='signup_box_bottom_input' type="text" placeholder="First name"  name='firstName' onChange={handleChange} required/>
              <input className='signup_box_bottom_input' type="text" placeholder="Surname" name='surname'  onChange={handleChange} required />
            </div>

            <label>Date of birth</label>
            <div className="signup_box_bottom_row">
              <select className='signup_box_bottom_select' name='birthDay'  onChange={handleChange} required>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              <select className='signup_box_bottom_select' name='birthMonth'  onChange={handleChange} required>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
              </select>
              <select className='signup_box_bottom_select' name='birthYear'  onChange={handleChange} required>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>

            <label>Gender</label>
            <div className="signup_box_bottom_row" style={{ justifyContent: 'space-between' }}>
              <div className='signup_box_bottom_gender' >
                <label>
                  Female
                </label>
                <input type="radio" name="gender" onChange={handleChange}  />
              </div>
              <div className='signup_box_bottom_gender' >
                <label>
                  Male
                </label>
                <input type="radio" name="gender" onChange={handleChange} />

              </div>
              <div className='signup_box_bottom_gender' >
                <label>
                  Custom
                </label>
                <input type="radio" name="gender" onChange={handleChange} />
              </div>
            </div>

            <input className='signup_box_bottom_input_email' type="email" placeholder="Mobile number or email address"  name='email' onChange={handleChange}/>

            <input className='signup_box_bottom_input_password' type="password" placeholder="New password" name='password' onChange={handleChange}/>

            <p className="signup_box_bottom_info">
              People who use our service may have uploaded your contact information to Facebook.{" "}
              <a href="#">Learn more</a>.
            </p>

            <p className="signup_box_bottom_info">
              By clicking Sign Up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookies Policy</a>.
            </p>

            <button type="submit" className="signup_btn" onClick={handleSubmit}>Sign Up</button>
            <a  href="/" className="login_link">Already have an account?</a>
          </form>
        </div>

      </div>
    </div>
    <br />
    <br /> 
    <br />

    <Footer/>
    </div>


  )
}

export default Signup