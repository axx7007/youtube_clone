import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Body from "../components/Body";
import { Container } from "./style";

const Root = () => {
  return (
    <Container>
      <Navbar />
      <Container.Wrapper>
        <Sidebar />
        <Body />
      </Container.Wrapper>
    </Container>
  );
};

export default Root;
