import React from "react";
import styled from "styled-components";

import { useState } from "react";
const PageWrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  cursor: none;
`;

const Circle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: red;
  position: absolute;
`;

const Main = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <PageWrapper style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      <Circle style={{ top: position.y, left: position.x }} />
    </PageWrapper>
  );
};

export default Main;
