import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Trip from "./Trip";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Search = styled.input`
  width: 40%;
  font-size: 30px;
  margin-top: 50px;
  align-items: center;
  justify-self: center;
  text-align: center;
  border: none;
  border-bottom: 2px solid rgba(170, 170, 170, 1);
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
  &::placeholder {
    color: rgba(170, 170, 170, 1);
  }
  &:focus {
    outline: none;
    border-color: #2c9cdb;
  }
`;
const Wrapper = styled.div`
  align-items: center;
  column-gap: 100px;
  padding: 0px 400px;
  margin: 40px 0px;
`;
const WarningText = styled.h2`
  color: grey;
  font-weight: 700;
  text-align: center;
`;
const Trips = () => {
  const [searchTerm, setsearchTerm] = useState("");
  console.warn(searchTerm);
  const [offeredTrips, setTrips] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const isTripsEmpty =
    !offeredTrips || (offeredTrips && offeredTrips.length === 0);
  const fetchTrips = async () => {
    setLoading(true);
    const response = await axios
      .get("http://localhost:9000/trips")
      .catch((err) => {
        console.log("Error: ", err);
      });

    if (response) {
      setTrips(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <Container>
      <Search
        type="text"
        placeholder="หาที่เที่ยวแล้วไปกัน..."
        onChange={(e) => {
          setsearchTerm(e.target.value);
        }}
      />
      <Wrapper>
        {isTripsEmpty && !isLoading && (
          <WarningText>ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้</WarningText>
        )}
        {!isTripsEmpty && isLoading && <WarningText>กำลังโหลด</WarningText>}
        {!isTripsEmpty &&
          !isLoading &&
          offeredTrips
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.includes(searchTerm) ||
                val.description.includes(searchTerm) ||
                val.tags.includes(searchTerm)
              ) {
                return val;
              }
            })
            .map((trips, eid) => <Trip key={eid} {...trips} />)}
      </Wrapper>
    </Container>
  );
};

export default Trips;
