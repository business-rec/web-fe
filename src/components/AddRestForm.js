import React, { useState } from "react";

const AddRestForm = props => {
   
    const initialFormState = { 
      id: null, 
      name: "", 
      type: "",
      address: "",
      city: ""
    };

  const [rest, setRest] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRest({ ...rest, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.addRest(rest);
        setRest(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={rest.name}
        onChange={handleInputChange}
      />
      <label>Type</label>
      <input
        type="text"
        name="type"
        value={rest.type}
        onChange={handleInputChange}
      />
     
     <label>Address</label>
     <input
        type="text"
        name="adress"
        value={rest.address}
        onChange={handleInputChange}
      />


     <label>City</label>
     <input
        type="text"
        name="city"
        value={rest.city}
        onChange={handleInputChange}
      />

      <button>Add new user</button>
    </form>
  );
};

export default AddRestForm;
