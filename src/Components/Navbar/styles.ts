import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.div`
  display: flex;
  h1 {
    margin: auto 0.8rem;
    font-family: "Roboto";
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

export const HamburguerButton = styled.div`
  height: 50px;
  width: 50px;
  display: none;

  @media (max-width: 980px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #333;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
`;
