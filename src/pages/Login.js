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
                Email: <Field type="text" name="email" placeholder="enter email address"/>
                {touched.email && errors.email && (
                    <p>{errors.email}</p>
                )}
                Password: <Field type="password" name="password" placeholder="enter your password"/>
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
            </div>
            <button>Sign In</button>
        </Form>
        {users.map(event => (
        <ul className = "list"key={event.id}>
          <li>Email: {event.email}</li>
          <li>Password: {event.password} </li>
        </ul>
      ))}
    </div>
    );
};
const FormikLogin = withFormik({
    mapPropsToValues({email,password}){
        return {
            email: email ||"",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email must be entered"),
        password: Yup.string().required("Password must be entered")    
    }),
    handleSubmit(values, { setStatus }){
    axios
    .post("https://reqres.in/api/users/", values)
    .then(event => {
        setStatus(event.data);
        console.log(event.data)
    })
    .catch(err => console.log(err.e));



}

})(Login);
console.log(FormikLogin)
export default FormikLogin;



