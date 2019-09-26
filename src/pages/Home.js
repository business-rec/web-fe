import React, { useState, useEffect } from "react";
import AddRestForm from "../components/AddRestForm";
import EditRestForm from "../components/EditRestForm";
import RestaurantList from '../components/RestaurantList'
import Header from '../components/Header'
import axiosWithAuth from '../utils/axiosWithAuth'

const Home = () => {

  const currentUser = JSON.parse(window.localStorage.getItem('user'));
  const [user, setUser]= useState(currentUser)

  const initialFormState = { 
    id: null, 
    name: "", 
    type: "",
    address: "",
    city: ""
  };

  const [rests, setRests] = useState({});

  const getRest = () => {
    axiosWithAuth()
      .get(
        `https://business-rec-web-be.herokuapp.com/api/users/${user.id}/companies`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        setRests(res.data)
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getRest();
  }, []);

  const [editing, setEditing] = useState(false);  
  const [currentRest, setCurrentRest] = useState(initialFormState);
  const [newRest, setNewRest] = useState(initialFormState);

  // ADD A BUSINESS
  const addRest = rest => {
    axiosWithAuth()
    .post(`https://business-rec-web-be.herokuapp.com/api/users/${user.id}/newcompany`,
    rest)
    .then(res => {
      const newrest = res.data
      setRests([...rests, newrest])
    })
    .catch(err => console.log(err.response));
  }; 


  const deleteRest = id => {
    const restId = id;
    console.log(restId)
    axiosWithAuth()
    .delete(`https://business-rec-web-be.herokuapp.com/api/users/${user.id}/companies`, restId 
    )
    .then(res => {
      console.log(res)
      const id = res.data.id;
      const New = rests.filter(rest => rest.id !== id)
      setNewRest(New);
    })
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
        <Header user={user.username} />
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
              <AddRestForm  addRest={addRest}/>
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

export default Home;
  
