import React from "react";
import styled from "styled-components";
import RestaurantTerms from "./RestaurantTerms";

function RestaurantList(props) {
  return (
    <Container>
      <Container2>
        {props.rests.length > 0 ? (
          props.rests.map(rest => (
            <Blist key={rest.id}>
              <p>{rest.city}</p>
              <p>{rest.name}</p>
              <p>{rest.state}</p>
              <p>{rest.streetName}</p>
              <p>{rest.streetAddress}</p>
              <p>{rest.type}</p>
              <p>{rest.zipCode}</p>
              <div>
                <button
                  className="button muted-button"
                  onClick={() => props.editRest(rest)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => props.deleteRest(rest.id)}
                >
                  Delete
                </button>
              </div>
              <RestaurantTerms rest={rest} />
            </Blist>
          ))
        ) : (
          <div>
            <p>No companies</p>
          </div>
        )}
      </Container2>
    </Container>
  );
}

const Container = styled.div`
`
const Container2 = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: space-around;
`


const Users = styled.p`
text-align: center;

`
const Blist = styled.div`
width: 25%;
padding: 2%;
margin: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid black;


`

export default RestaurantList