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
              <P>{rest.city}</P>
              <P>{rest.name}</P>
              <P>{rest.state}</P>
              <P>{rest.streetName}</P>
              <P>{rest.streetAddress}</P>
              <P>{rest.type}</P>
              <P>{rest.zipCode}</P>
              <Newbuttondiv>
                <Newbutton
                  className="button muted-button"
                  onClick={() => props.editRest(rest)}
                >
                  Edit
                </Newbutton>
                <Newbutton
                  className="button muted-button"
                  onClick={() => props.deleteRest(rest.id)}
                >
                  Delete
                </Newbutton>
              </Newbuttondiv>
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
   align-items: flex-start;
   justify-content: space-around;

`


const Users = styled.p`
text-align: center;

`
const Blist = styled.div`
width: 25%;
padding: 2%;
margin: 10px;
border: 5px solid black;


`
const P = styled.p`
text-align: center;
padding: 2%;
background-color: #fff;

`
const Newbutton = styled.button`

background-color: #DC143C;
color: #fff;
text-align: center;
padding: 2%;
margin: 2%;
`
const Newbuttondiv = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export default RestaurantList