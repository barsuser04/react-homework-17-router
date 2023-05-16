import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

export const MyOrder = () => {
  return (
    <MainDiv>
      <Container>
        {" "}
        <p>Ordered page</p>{" "}
      </Container>
      <Button>Go Back</Button>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  margin-top: 40px;
  margin-left: 60px;
`;

const Container = styled.div`
  width: 90%;
  background-color: #caca83;
  border-radius: 10px;
  height: 100px;
  padding: 10px;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 20px;
  box-shadow: 0px 12px 49px -2px rgba(0, 0, 0, 0.61);
  -webkit-box-shadow: 0px 12px 49px -2px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 0px 12px 49px -2px rgba(0, 0, 0, 0.61);
`;
