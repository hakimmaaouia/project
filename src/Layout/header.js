import React from "react";
import styled from "styled-components";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
const Ul = styled.ul`
  background: #89a0cf;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Li = styled.li`
  float: left;
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 24px 17px;
    text-decoration: none;
    :hover {
      transition: 1s;
      background-color: #2a3c76;
    }
  }
`;
const Header = () => {
  return (
    <Ul>
      <Li>
        <a class="active" href="home">
          <b>Home</b>
        </a>
      </Li>
      <Li>
        <a href="news">
          <b>News</b>
        </a>
      </Li>
      <Li>
        <a href="contact">
          <b>Contact</b>
        </a>
      </Li>
      <Li>
        {" "}
        <Link to="/about">
          <b>About</b>
        </Link>
      </Li>
      <Li>
        <a href="about">
          <b>Our Causes</b>
        </a>
      </Li>
      <Li>
        <a href="about">
          <b>
            <PersonIcon style={{ fontSize: 15 }} /> Login
          </b>
        </a>
      </Li>
    </Ul>
  );
};
export default Header;
