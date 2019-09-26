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
        <Form>
            <Container>
                <Title>Log In</Title>
                <Text>
                  <Field type="text" name="username" placeholder="username"/>
                  {touched.username && errors.username && (
                      <p>{errors.username}</p>
                  )}
                  <Field type="password" name="password" placeholder="password"/>
                  {touched.password && errors.password && (
                      <p>{errors.password}</p>
                  )}
                </Text>
                <Button>Sign In</Button>
            </Container>
        </Form>
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
  background-color: #F5F5F5;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Container = styled.div`
border:1px solid black;
padding: 30%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #fff;
`

const Text = styled.div`
margin: 25%;
padding: 10%;

`

const Button = styled.button`

width: 100%;
color: #ffffff;
background-color: black;
padding: 10%;


`
const Title = styled.label`
text-align: center;
margin: 10%;
`