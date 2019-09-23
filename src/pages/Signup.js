import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Signup=({errors, touched, status}) => {
    const [newUser,setNewUser] = useState([]);
    useEffect(() => {
        if (status){
            setNewUser([...newUser, status]);
        }
    },[status]);

    return(

    <div>
        <Form>
            <div>
                Name: <Field type= "text" name="name" placeholder="enter full name"/>
                {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )}
                Email: <Field type="text" name="email" placeholder="enter your email address"/>
                {touched.email && errors.email && (
                    <p>{errors.email}</p>
                )}
                Password: <Field type="password" name="password" placeholder="Create New Password"/>
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
            </div>
            <button>Sign Up</button>
        </Form>
        {newUser.map(event => (
        <ul className = "list"key={event.id}>
          <li>Name:{event.name}</li>
          <li>Email: {event.email}</li>
          <li>Password: {event.password} </li>
        </ul>
      ))}
    </div>
    );
};
const FormikSignup = withFormik({
    mapPropsToValues({name,email,password}){
        return {
            name: name || "",
            email: email ||"",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("You must enter your name before continuing"),
        email: Yup.string().required("Email must be entered"),
        password: Yup.string().required("Password must be entered"),       
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

})(Signup);
export default FormikSignup

