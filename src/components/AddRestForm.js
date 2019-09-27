import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components'

const AddRestForm = props => {
   
    const initialFormState = { 
      city: '',
      name: '',
      state: '',
      streetAddress: '',
      streetName: '',
      type: '',
      zipCode: '',
    };

  const [rest, setRest] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRest({ ...rest, [name]: value });
  };

const [type, setType] = useState([]);

  const getType = () => {
    axiosWithAuth()
      .get(
        `https://business-rec-web-be.herokuapp.com/api/companies/companytypes`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        setType(res.data)
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getType();
  }, []);

  return (
    <Fmain
      onSubmit={event => {
        event.preventDefault();
        props.addRest(rest);
        setRest(initialFormState);
        console.log(rest)
      }}
    >
      <label>City</label>
      <input
        type="text"
        name="city"
        value={rest.city}
        onChange={handleInputChange}
      />
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={rest.name}
        onChange={handleInputChange}
      />
     
     <label>State</label>
     <input
        type="text"
        name="state"
        value={rest.state}
        onChange={handleInputChange}
      />

     <label>streetAddress</label>
     <input
        type="text"
        name="streetAddress"
        value={rest.streetAddress}
        onChange={handleInputChange}
      />

      <label>User Review</label>
     <input
        type="text"
        name="streetName"
        value={rest.streetName}
        onChange={handleInputChange}
      />

      <label>type</label>
      <select
        type="dropddown"
        name="type"
        value={rest.type}
        onChange={handleInputChange}
      >
      {type.map(type => (
        <option value={type.type}>{type.type}</option>
      ))}
      </select>

      <label>zipCode</label>
      <input
        type="text"
        name="zipCode"
        value={rest.zipCode}
        onChange={handleInputChange}
      />
      
      <Fbutton>Add a business</Fbutton>
    </Fmain>
  );
};

export default AddRestForm;

const Fmain = styled.form`
height: 10vh;
display: flex;
align-items: center;
justify-content: space-around;

`
const Fbutton = styled.button`
background-color: #DC143C;
color: #fff;
text-align: center;
padding: 0.5%;
margin-right: 2%;

`