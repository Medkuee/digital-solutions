import React from "react";
import Logo from "../images/logo.png";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

function Header({ toggle }) {
  return (
    <Container>
      <Image to="home">
        <Logoo src={Logo} alt="" />
      </Image>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>

      <NavMenu>
        <NavItem>
          <NavLinks
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Home
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            About Us
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Skills
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="ourworks"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Our Works
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="products"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Products
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="roadmap"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Roadmap
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="partnerships"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Partnerships
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="contactus"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-5}
          >
            Contact Us
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 920px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const Image = styled(LinkS)``;

const Logoo = styled.img`
  width: 75px;
  cursor: pointer;
  @media screen and (max-width: 1420px) {
    width: 55px;
  }
  @media screen and (max-width: 1080px) {
    width: 40px;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -12px;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 920px) {
    display: none;
  }
`;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 15px;
  position: relative;
  &:before {
    background-color: rgb(249, 249, 249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    content: "";
    height: 3px;
    left: 0px;
    opacity: 0;
    position: absolute;
    right: 0px;
    transform-origin: left right;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
    width: auto;
    z-index: 213;
  }

  &.active {
    &:before {
      transform: scaleX(0.7);
      visibility: visible;
      opacity: 1 !important;
    }
  }
  @media screen and (max-width: 1080px) {
    font-size: 13px;
  }
`;
const NavItem = styled.li`
  &:hover {
    a:before {
      transform: scaleX(0.7);
      visibility: visible;
      opacity: 1 !important;
    }
  }
`;
export default Header;
