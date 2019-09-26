import React, { useState, useEffect } from "react";




const EditRestForm = props => {

  const [rest, setRest] = useState(props.currentRest);

  useEffect(
    () => {
      setRest(props.currentRest);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setRest({ ...rest, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateRest(rest.id, rest);
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

      <label>streetName</label>
     <input
        type="text"
        name="streetName"
        value={rest.streetName}
        onChange={handleInputChange}
      />

      <label>type</label>
      <input
        type="text"
        name="type"
        value={rest.type}
        onChange={handleInputChange}
      />

      <label>zipCode</label>
      <input
        type="text"
        name="zipCode"
        value={rest.zipCode}
        onChange={handleInputChange}
      />

      <button>Update</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRestForm;
