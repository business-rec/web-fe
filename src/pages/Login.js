import React, {useState} from "react";
import axios from 'axios';
import styled from 'styled-components'

const Login = (props) => {
 
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

  const onLogin = e => {
    e.preventDefault();
    axios
      .post('https://business-rec-web-be.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        props.history.push('/home')
      })
  }
  
  return (
    <Main>
      <Form onSubmit={onLogin}>
      <Header>Login</Header>
        <Container>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
        </Container>
        <Bcontainer>
          <Button>Log In</Button>
        </Bcontainer>
      </Form>
    </Main>
  );
};

export default Login;

//styled

const Main = styled.div`
  background-color: #F5F5F5;

  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Form = styled.form`
  border: 1px solid black;
  background-color: #ffffff;
  padding: 20px;
`
const Header = styled.h1`
  text-align: center;
  margin: 10%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px;
`
const Input = styled.input`
 margin: 5%;
 width: 100%;
`
const Bcontainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Button = styled.button`
background-color: black;
padding: 6%;
margin: 8%;
color: white;
width: 75%;
text-align: center;
`
