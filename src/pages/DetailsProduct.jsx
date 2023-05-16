import React from "react";
import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import { styled } from "styled-components";

const iphones = [
  {
    img: "https://mstore.kg/wp-content/uploads/2021/11/iphone-13-pro-max-graphite-sku-header-141021_0-1.png",
    title: "iphone 14 pro",
    price: "$1300",
    id: "1",
    describe:
      "iPhone 14 Pro is very outstanding quality phone who have pretty beautiful camera who catch up decently clear as well as battery also very powerful to support OS and system too ! Thank you so much Apple for this phenomenal phone !iPhone 14 Pro is very outstanding quality phone who have pretty beautiful camera who catch up decently clear as well as battery also very powerful to support OS and system too ! Thank you so much Apple for this phenomenal phone !",
  },
  {
    img: "https://www.western.co.uk/wp-content/uploads/2020/10/iPhone-12-mini-Green-VARIATION.png",
    title: "iphone 12 ",
    price: "$1050",
    id: "2",
    describe:
      "The iPhone 12 is an excellent phone. But, battery life aside, the iPhone 12 is a better phone in every way. It has a more powerful processor, a more striking screen, its design is more modern and the overall feel of the device is simply more impressive than its older sibling. The iPhone 12 is an excellent phone. But, battery life aside, the iPhone 12 is a better phone in every way. It has a more powerful processor, a more striking screen, its design is more modern and the overall feel of the device is simply more impressive than its older sibling.",
  },
  {
    img: "https://login.kg/image/cache/catalog/new/Phones/Apple/IPhone%2013/mini/1-500x500.jpg",
    title: "iphone 13 mini",
    price: "$950",
    id: "3",
    describe:
      "The iPhone 13 mini display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. The iPhone 13 mini display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.",
  },
];

const DetailsProduct = () => {
  const params = useParams();

  const findedProduct = iphones.find((el) => el.id === params.id);
  return (
    <Container>
      <DescribeBlock>
        <Image src={findedProduct.img} alt="phone" />
        <div>
          <Button></Button>
          <h1> {findedProduct.title}</h1>
          <h2> price: {findedProduct.price}</h2>
          <Paragraph>{findedProduct.describe}</Paragraph>
        </div>
      </DescribeBlock>
    </Container>
  );
};

const Container = styled.div`
  padding: 50px;
`;

const DescribeBlock = styled.div`
  padding: 20px;
  display: flex;
  background-color: #fff;
  border-radius: 20px;
`;

const Paragraph = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
`;

const Image = styled.img`
  width: 400px;
  height: 400px;
`;

export default DetailsProduct;
