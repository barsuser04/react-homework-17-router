import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const iphones = [
  {
    img: "https://mstore.kg/wp-content/uploads/2021/11/iphone-13-pro-max-graphite-sku-header-141021_0-1.png",
    title: "iphone 14 pro",
    price: "$1300",
    id: "1",
  },
  {
    img: "https://www.western.co.uk/wp-content/uploads/2020/10/iPhone-12-mini-Green-VARIATION.png",
    title: "iphone 12 ",
    price: "$1050",
    id: "2",
  },
  {
    img: "https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/mini/1-500x500.jpg",
    title: "iphone 13 mini",
    price: "$950",
    id: "3",
  },
];

export const Products = () => {
  return (
    <SomeDiv>
      <Container>
        {iphones.map((i) => {
          return (
            <Block key={i.id}>
              <Image src={i.img} alt="iphone" />
              <h2>{i.title}</h2>
              <h3>{i.price}</h3>
              <StyledLink to={`/products/${i.id}`}>Details</StyledLink>
            </Block>
          );
        })}
      </Container>
      <Button></Button>
    </SomeDiv>
  );
};

const SomeDiv = styled.div`
  button {
    margin-left: 50px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #3441d5;
  font-weight: 600;
  &:hover {
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px;
`;

const Block = styled.div`
  width: 20%;
  height: 440px;
  padding: 10px;
  background-color: #fff;
  border-radius: 15px;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
`;
