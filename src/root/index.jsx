import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import { Change, Container } from "./style";
import { Side } from "../context";

const Root = () => {
  const [data, setData] = useContext(Side);

  return (
    <Container>
      <Navbar />
      <Container.Wrapper>
        {data ? (
          <Change>
            <Sidebar />
            <Body />
          </Change>
        ) : (
          <Body />
        )}
      </Container.Wrapper>
    </Container>
  );
};

export default Root;
