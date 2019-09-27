import React, { useState, useEffect } from "react";
import AddRestForm from "../components/AddRestForm";
import EditRestForm from "../components/EditRestForm";
import RestaurantList from '../components/RestaurantList'
import Header from '../components/Header'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components'

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

// DISPLAY BUSINESSES
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

// DELETE A BUSINESS
  const deleteRest = id => {
    axiosWithAuth()
      .delete(
        `https://business-rec-web-be.herokuapp.com/api/users/${
          user.id
        }/companies`,
        { data: { id: `${id}` } }
      )
      .then(res => {
        console.log(res);
        const id = res.data.id;
        setNewRest(rests.filter(rest => rest.id !== id));
      });
  };


  const [editing, setEditing] = useState(false);  
  const [currentRest, setCurrentRest] = useState(initialFormState);


  const editRest = rest => {
    setEditing(true);
    setCurrentRest({  
        city: rest.city,
        name: rest.name, 
        state: rest.state,
        streetName: rest.streetName,
        streetAddress: rest.streetAddress,
        type: rest.type,
        zipCode: rest.zipCode

    });
  };

  const updateRest = (id, updateRest) => {
    setEditing(false);
    setRests(rests.map(rest => (rest.id === id ? updateRest : rest)));
  };
 
/* 
const updateRest = (id, updatedrest) => {
  axiosWithAuth()
    .patch(
      `https://business-rec-web-be.herokuapp.com/api/users/${
        user.id
      }/companies`,
      {data: updatedrest}
    )
    .then(res => {
      setEditing(false);
      setRests(rests.map(rest => (rest.id === id ? updateRest : rest))); 
    });
};
 */

  return (
    <div>
      <div>
        <Header user={user.username} />
        <div>
          {editing ? (
            <div>
              <Hheader>Edit Business</Hheader>
              <EditRestForm
                editing={editing}
                setEditing={setEditing}
                currentRest={currentRest}
                updateRest={updateRest}
              />
            </div>
          ) : (
            <div>
              <Hheader>Add a Business</Hheader>
              <AddRestForm  addRest={addRest}/>
            </div>
          )}
        </div>
        <div>
          <Hheader>My Businesses</Hheader>
          <RestaurantList rests={rests} deleteRest={deleteRest} editRest={editRest} />
        </div>

      </div>
    </div>
  );
};

export default Home;

const Hheader = styled.h2`
text-align: center;
padding: 1%;



`