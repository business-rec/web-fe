import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login=({errors, touched, status}) => {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        if (status){
            setUsers([...users, status]);
        }
    },[status]);

    return(

    <div>
        <Form>
            <div>
                <label>Username</label>
                <Field 
                type="text" 
                name="username" 
                placeholder="enter username"/>
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}
                <label>Password</label>
                <Field 
                type="password" 
                name="password" 
                placeholder="enter your password"/>
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <button>Sign In</button>
            </div>
        </Form>
    </div>
    );
};
const FormikLogin = withFormik({
    mapPropsToValues({username,password}){
        return {
            username: username ||"",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username must be entered"),
        password: Yup.string().required("Password must be entered")    
    }),
    handleSubmit(values, { setStatus }){
    axios
    .post("https://business-rec-web-be.herokuapp.com/api/auth/login", values)
    .then(event => {
        setStatus(event.data);
            Login.history.push('/home')
    })
    .catch(err => console.log(err.e));

}

})(Login);
console.log(FormikLogin)
export default FormikLogin;

