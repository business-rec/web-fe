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
                <label>username</label>
                <Field type= "text" name="username" placeholder="enter username"/>
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}
                <label>Password</label>
                <Field type="password" name="password" placeholder="Create New Password"/>
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <button>Sign Up</button>
            </div>
        </Form>
    </div>
    );
};
const FormikSignup = withFormik({
    mapPropsToValues({username,password}){
        return {
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("You must enter your name before continuing"),
        password: Yup.string().required("Password must be entered"),       
    }),
    handleSubmit(values, { setStatus }){
    axios
    .post("https://business-rec-web-be.herokuapp.com/api/auth/register", values)
    .then(event => {
        setStatus(event.data);
            Signup.history.push('/home')
    })
    .catch(err => console.log(err.e));

}

})(Signup);
export default FormikSignup