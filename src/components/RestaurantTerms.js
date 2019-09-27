import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

function RestaurantTerms({ rest }) {
  const [terms, setTerms] = useState([]);
  const restId = rest.id;
  useEffect(() => {
    const getRest = () => {
      axiosWithAuth()
        .get(
          `https://business-rec-web-be.herokuapp.com/api/companies/${restId}/terms`,
          {
            headers: {
              Authorization: `${localStorage.getItem("token")}`
            }
          }
        )
        .then(res => {
          let data = res.data;
          data = data.reduce((obj, item) => {
            obj[item.id] = item;
            return obj;
          });
          setTerms(data.terms);
          console.log(data.terms);
        })
        .catch(err => console.log(err.response));
    };
    getRest();
  }, []);
  
  return (
    <Container>
      <Smallcontainer>
        {terms.length > 0 ? (
          terms.map(term => (
            <div key={term.id}>
              <P>Term:  {term.term}</P>
              <P>Rating Score:  {term.ratingscore}</P>
              <P>Term Type:  {term.termtype}</P>
            </div>
          ))
        ) : (
          <div>
            <p>No users</p>
          </div>
        )}
      </Smallcontainer>
    </Container>
  );
}

const Container = styled.div`

`;
const Smallcontainer = styled.div`
background-color: #fff;

`
const P = styled.p`
text-align: center;
padding: 2%;
background-color: #fff;

`

export default RestaurantTerms; 
