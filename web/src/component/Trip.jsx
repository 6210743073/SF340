import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { mobile } from "../component/responsive";
const Container = styled.div`
  height: 45vh;
  display: flex;
  column-gap: 30px;
  margin-bottom: 50px;
`;
const ImgContainer = styled.div`
  height: 45vh;
  width: 8vw;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 25px;
  object-fit: inherit;
  transition: all 0.2s linear;
  ${mobile({ display: "none" })}

  &:hover {
    transform: scale(1.1);
  }
`;
const InfoContainer = styled.div`
  justify-content: center;
  flex: 1.5;
  margin-top: 10px;
`;

const Title = styled.a`
  display: flex;
  font-size: 1.25rem;
  font-weight: 700;
  color: black;
  text-decoration: none;
  ${mobile({ fontSize: "1rem" })}

  &:hover {
    cursor: pointer;
  }
`;

const Description = styled.p`
  color: rgb(170, 170, 170);
  margin-top: 10px;
  margin-bottom: 10px;
  white-space: pre-line;
  font-size: 15px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

const URL = styled.a`
  display: flex;
  color: #2c9cdb;
  text-decoration: underline;
  font-size: 15px;
  width: 50px;
  &:hover {
    cursor: pointer;
  }
`;
const Tagsinfo = styled.div`
  color: rgb(170, 170, 170);
  font-size: 13px;
  margin-top: 5px;
  display: flex;
  flex-wrap: wrap;
`;
const Tags = styled.div`
  color: rgb(170, 170, 170);
  margin: 0 5px;
  font-size: 13px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;
const InfoImgWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-top: 15px;
`;
const InfoImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 30px;
  object-fit: inherit;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;
const Trip = (trips) => {
  const url = `${trips.url}`;
  return (
    <Container>
      <ImgContainer>
        <Image src={trips.photos[0]} />
      </ImgContainer>
      <InfoContainer>
        <Title href={url}>{trips.title}</Title>
        <Description>{trips.description}</Description>
        <URL href={url}>อ่านต่อ</URL>
        <Tagsinfo>
          หมวด
          <Link to={`${trips.tags[0]}`}>
            <Tags>{trips.tags[0]}</Tags>
          </Link>
          <Link to={`${trips.tags[1]}`}>
            <Tags>{trips.tags[1]}</Tags>
          </Link>
          <Link to={`${trips.tags[2]}`}>
            <Tags>{trips.tags[2]}</Tags>
          </Link>
          <Link to={`${trips.tags[3]}`}>
            <Tags>{trips.tags[3]}</Tags>
          </Link>
          <Link to={`${trips.tags[4]}`}>
            <Tags>{trips.tags[4]}</Tags>
          </Link>
          <Link to={`${trips.tags[5]}`}>
            <Tags>{trips.tags[5]}</Tags>
          </Link>
          <Link to={`${trips.tags[6]}`}>
            <Tags>{trips.tags[6]}</Tags>
          </Link>
        </Tagsinfo>
        <InfoImgWrapper>
          <InfoImg src={trips.photos[1]} />
          <InfoImg src={trips.photos[2]} />
          <InfoImg src={trips.photos[3]} />
        </InfoImgWrapper>
      </InfoContainer>
    </Container>
  );
};

export default Trip;
