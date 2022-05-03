import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Auth.css';

import Axios from "axios";

import mobilePayIcon from './mobilepaypink.svg';

function Auth() {

  // Setting Up Input States

  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  // Updating Input States

  function handleUsernameChange(e: { target: { value: string } }) {
  const usernameValue: string = e.target.value;
  setusername(usernameValue)
  }

  function handlePasswordChange(e: { target: { value: string } }) {
  const passwordValue: string = e.target.value;
  setPassword(passwordValue)
  }

  // Setting Up Navigate Function
  let navigator = useNavigate();

  // Submit Registration Form

  function submitSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!username) {
      setErrMsg('Please enter your username Address')
    } else if (!password) {
      setErrMsg('Please enter your Password')
    } else {
      const userSignin = {username, password}
      Axios.post('https://smart-wage-task-backend.herokuapp.com/api/token/',
      userSignin,
      ).then((response) => {
        sessionStorage.setItem('smartWageUserToken', JSON.stringify(response.data.access))
        navigator('/messages')
      })
      .catch((error)=> {
        setErrMsg('Please enter the correct login details')
      })
    }
  }
  return (
    <>
      <div className='page_container'>
        <div className='page_block'>
          <div className='image_block'>
            <img className='image_block_icon' src={mobilePayIcon} alt='Mobile Pay Icon' />
          </div>
          <div className='form_block'>
            <form
              className='form_container'
              onSubmit={submitSignIn}> 
              <div className='form_title'>
                <h1>Welcome</h1>
              </div>
              <div className='form_input_block'>
                <label className='form_input_label'>Username</label>
                <input
                  className='form_input' type='text'
                  value={username}
                  onChange={handleUsernameChange}
                />
                <label className='form_input_label'>Password</label>
                <input
                  className='form_input' type='password'
                  value={password}
                  onChange={handlePasswordChange}
                  />
              </div>
              <p>{errMsg}</p>
              <button className='submit_button' type='submit'>
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='mobile_page_container'>
        <div className='mobile_page_block'>
          <div className='mobile_image_block'>
            <img className='mobile_image_block_icon' src={mobilePayIcon} alt='Mobile Pay Icon' />
          </div>
          <div className='mobile_form_block'>
            <form
            className='form_container'
            onSubmit={submitSignIn}
            >
              <div className='mobile_form_title'>
                <h1>Welcome</h1>
              </div>
              <div className='mobile_form_input_block'>
                <label className='mobile_form_input_label'>Username</label>
                <input
                  className='mobile_form_input' type='text'
                  value={username}
                  onChange={handleUsernameChange}
                />
                <label className='mobile_form_input_label'>Password</label>
                <input
                  className='mobile_form_input' type='text'
                  value={password}
                  onChange={handlePasswordChange}
                  />
              </div>
              <p>{errMsg}</p>
              <button className='mobile_submit_button' type='submit'>
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