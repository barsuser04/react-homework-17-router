import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <h1>iStore</h1>
      <LinkDiv>
        <StyledNavLink to="/products" className="link">
          Products
        </StyledNavLink>
        <StyledNavLink to="/myCards" className="link">
          My cards
        </StyledNavLink>
        <StyledNavLink to="/myOrder" className="link">
          My order
        </StyledNavLink>
      </LinkDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: blue;
  justify-content: space-between;
  h1 {
    color: #fff;
    margin-left: 20px;
  }
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  width: 50%;
`;

const StyledNavLink = styled(NavLink)`
  font-weight: 600;
  color: aliceblue;
  font-size: 20px;
  text-decoration: none;
  margin-right: 28px;
  padding-bottom: 2px;

  &.active {
    color: rgb(156, 160, 163);
  }
`;

export default Header;
