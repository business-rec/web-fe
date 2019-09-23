import React, { useState } from "react";
import AddRestForm from "../components/AddRestForm";
import EditRestForm from "../components/EditRestForm";
import RestaurantList from '../components/RestaurantList'

const App = () => {

  const restData = [
    { id: 1, name: "AAA", type: "aiueo", adress: '123', city: 'sf' },
    { id: 2, name: "BBB", type: "kakikukeko", adress: '123', city: 'la' },
    { id: 3, name: "CCC", type: "sasisuseso", adress: '123', city: 'ny' }
  ];

  const [rests, setRests] = useState(restData);

  const addRest = rest => {
    rest.id = rests.length + 1;
    setRests([...rests, rest]);
  };

  const deleteRest = id => {
    setRests(rests.filter(rest => rest.id !== id));
  };

  const [editing, setEditing] = useState(false);
  
  // ADD 
  const initialFormState = { 
      id: null, 
      name: "", 
      type: "",
      adress: "",
      city: ""
    };
  
  const [currentRest, setCurrentRest] = useState(initialFormState);

  // ADD
  const editRow = rest => {
    setEditing(true);
    setCurrentRest({ 
        id: rest.id, 
        name: rest.name, 
        type: rest.type,
        adress: rest.adress,
        city: rest.city
    });
  };


  const updateRest = (id, updateRest) => {
    setEditing(false);
    setRests(rests.map(rest => (rest.id === id ? updateRest : rest)));
  };

  return (
    <div>
      <div>
        <div>
          {editing ? (
            <div>
              <h2>Edit Restaurant</h2>
              <EditRestForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentRest}
                updateUser={updateRest}
              />
            </div>
          ) : (
            <div>
              <h2>Add Restaurant</h2>
              <AddRestForm addUser={addRest} />
            </div>
          )}
        </div>
        <div>
          <h2>My Restaurants</h2>
          <RestaurantList users={rests} deleteUser={deleteRest} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default App;
  
