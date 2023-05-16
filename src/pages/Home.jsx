import React from "react";
import { styled } from "styled-components";

const Home = () => {
  return (
    <Container>
      {" "}
      <h1>Home Page</h1>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  height: 120px;
  background-color: teal;
  margin-left: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  border-radius: 20px;
  h1{
    color: #ffff;
  }
`;

export default Home;
