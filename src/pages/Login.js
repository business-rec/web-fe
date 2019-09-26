import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from 'styled-components'

const Login=({errors, touched, status}) => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        if (status){
            setUsers([...users, status]);
        }
    },[status]);

    return(

    <Main>
      <Form2>
        <Title>Log In</Title>
        <Text>
          <Input type="text" name="username" placeholder="username"/>
            {touched.username && errors.username && (
                <p>{errors.username}</p>
                  )}
          <Input type="password" name="password" placeholder="password"/>
            {touched.password && errors.password && (
                <p>{errors.password}</p>
                  )}
        </Text>
        <Buttonc>
          <Button className = "buttonclass">Sign In</Button>
        </Buttonc>
      </Form2>
    </Main>
    );
};
const FormikLogin = withFormik({
    mapPropsToValues({username,password}){
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username must be entered"),
        password: Yup.string().required("Password must be entered")    
    }),
    
    handleSubmit(values, { props, setStatus }){
    axios
    .post("https://business-rec-web-be.herokuapp.com/api/auth/login", values)
    .then(event => {
        localStorage.setItem("token", event.data.token);
        localStorage.setItem("user", JSON.stringify(event.data.user));
        setStatus(event.data);
        props.history.push('/home')
    })
    .catch(err => console.log(err.e));

}

})(Login);
console.log(FormikLogin)
export default FormikLogin;

//styling

const Main = styled.div`
height: 100vh;
background-color: #4682B4;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`
const Form2 = styled(Form)`
border: 1px solid black;
background-color: #ffffff;
padding: 20px;
`
const Title = styled.label`
text-align: center;
margin: 10%;
`
const Text = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`
const Input = styled(Field)`
width: 100%;
margin-top: 5%;
margin-bottom: 5%;
`
const Buttonc = styled.div`
display: flex;
align-items: center;
justify-content: center;
&: hover .buttonclass{
  background-color: #fff;
  color: black;
  }
`

const Button = styled.button`
background-color: black;
color: #fff;
width: 50%;
text-align: center;
padding: 5%;
`
