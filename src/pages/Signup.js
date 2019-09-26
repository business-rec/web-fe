import React, {useState} from "react";
import axios from 'axios';

const Signup = (props) => {
 
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const onSignup = e => {
    e.preventDefault();
    axios
      .post('https://business-rec-web-be.herokuapp.com/api/auth/register', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/home')
      })
  }

  return (
    <>
      <h1>Signup Form</h1>
      <form onSubmit={onSignup}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={credentials.username}
          onChange={handleChange}
        />
        
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Sign up</button>
      </form>
    </>
  );
};

export default Signup;