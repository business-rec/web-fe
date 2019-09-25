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
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={rest.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="type"
        value={rest.type}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="address"
        value={rest.address}
        onChange={handleInputChange}
      />

     <input
        type="text"
        name="city"
        value={rest.city}
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
