import React from "react";
import styled from "styled-components";
import { mobile } from "../component/responsive";
const Title = styled.h1`
  width: 100%;
  font-weight: 400;
  font-size: 100px;
  text-align: center;
  color: #2c9cdb;
  margin-top: 10vh;
  ${mobile({ fontSize:"5rem"})}
`;
const Topsection = () => {
  return <Title>เที่ยวไหนดี</Title>;
};

export default Topsection;
