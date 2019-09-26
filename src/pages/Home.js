import React, { useState } from "react";
import AddRestForm from "../components/AddRestForm";
import EditRestForm from "../components/EditRestForm";
import RestaurantList from '../components/RestaurantList'
import Header from '../components/Header'


const App = () => {

  const restData = [
    { id: 1, name: "AAA", type: "aiueo", address: '123', city: 'sf' },
    { id: 2, name: "BBB", type: "kakikukeko", address: '123', city: 'la' },
    { id: 3, name: "CCC", type: "sasisuseso", address: '123', city: 'ny' }
  ];

  const initialFormState = { 
    id: null, 
    name: "", 
    type: "",
    address: "",
    city: ""
  };

  const [rests, setRests] = useState(restData);
  const [currentRest, setCurrentRest] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  const addRest = rest => {
    rest.id = rests.length + 1;
    setRests([...rests, rest]);
  };

  const deleteRest = id => {
    setRests(rests.filter(rest => rest.id !== id));
  };

  const editRest = rest => {
    setEditing(true);
    setCurrentRest({ 
        id: rest.id, 
        name: rest.name, 
        type: rest.type,
        address: rest.address,
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
        <Header  />
        <div>
          {editing ? (
            <div>
              <h2>Edit Restaurant</h2>
              <EditRestForm
                editing={editing}
                setEditing={setEditing}
                currentRest={currentRest}
                updateRest={updateRest}
              />
            </div>
          ) : (
            <div>
              <h2>Add Restaurant</h2>
              <AddRestForm addRest={addRest} />
            </div>
          )}
        </div>
        <div>
          <h2>My Restaurants</h2>
          <RestaurantList rests={rests} deleteRest={deleteRest} editRest={editRest} />
        </div>

      </div>
    </div>
  );
};

export default App;
  
