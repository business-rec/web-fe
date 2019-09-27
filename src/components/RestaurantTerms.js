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
      <div>
        {terms.length > 0 ? (
          terms.map(term => (
            <div key={term.id}>
              <p>{term.term}</p>
              <p>{term.ratingscore}</p>
              <p>{term.termtype}</p>
            </div>
          ))
        ) : (
          <div>
            <p>No users</p>
          </div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-left: 100px;
`;

export default RestaurantTerms; 
