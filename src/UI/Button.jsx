import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Button = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return <MyButton onClick={goBack}>Go Back</MyButton>;
};

const MyButton = styled.button`
  width: 100px;
  padding: 12px;
  background-color: teal;
  font-weight: 600;
  color: aliceblue;
  border-radius: 15px;
  border: none;
  &:hover {
    background-color: #024747;
  }
`;

export default Button;
