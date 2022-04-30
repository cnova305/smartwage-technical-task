import React, { useState } from 'react';

import './Auth.css';

import smartwageLogo from './smartwagetransparent.png';
import mobilePayIcon from './mobilepaypink.svg';

function Auth() {

  // Setting Up Input States

  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  // Setting Up View State

  const [viewsignup, setViewsignup] = useState(true)

  const handleViewsignup = () => {
    setViewsignup(!viewsignup)
  } 


  // Updating Input States

  function handleNumberChange(e: { target: { value: string } }) {
    const numberValue: string = e.target.value;
    setNumber(numberValue)
  }

  function handleEmailChange(e: { target: { value: string } }) {
  const emailValue: string = e.target.value;
  setEmail(emailValue)
  }

  function handlePasswordChange(e: { target: { value: string } }) {
  const passwordValue: string = e.target.value;
  setPassword(passwordValue)
  }

  // Submit Registration Form

  function submitSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if(number !== '+14155238886') {
      setErrMsg('This is the wrong WhatsApp Number')
    } else if (!email) {
      setErrMsg('Please enter your Email Address')
    } else if (!password) {
      setErrMsg('Please enter your Password')
    } else {
      const userSignup = {number, email, password}
      console.log(userSignup) 
    }
  }
  return (
    <>
      <div className='page_container'>
        <div className='page_block'>
          <div className='image_block'>
            <img className='image_block_logo' src={smartwageLogo} alt='Smartwage Logo Icon' />
            <img className='image_block_icon' src={mobilePayIcon} alt='Mobile Pay Icon' />
            <h1>WhatsApp Deck</h1>
          </div>
          <div className='form_block'>
            <form
              className='form_container'
              onSubmit={submitSignUp}> 
              <div className='form_title'>
                <h1> Get Started</h1>
                <div className='form_login'>
                  <span>Already have an account</span>
                  <button className='form_login_button' onClick={handleViewsignup}>Log in</button>
                </div>
              </div>
              <div className='form_input_block'>
                <label className='form_input_label'>WhatsApp Number</label>
                <input 
                  className='form_input' type='text'
                  value={number}
                  onChange={handleNumberChange}
                />
                <label className='form_input_label'>Email</label>
                <input
                  className='form_input' type='text'
                  value={email}
                  onChange={handleEmailChange}
                />
                <label className='form_input_label'>Password</label>
                <input
                  className='form_input' type='text'
                  value={password}
                  onChange={handlePasswordChange}
                  />
              </div>
              <p>{errMsg}</p>
              <button className='submit_button' type='submit'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth