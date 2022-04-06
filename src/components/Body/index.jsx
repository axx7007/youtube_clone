import React, { useState } from "react";
import { data } from "../../mock/kino";
import { Card, Cards, Container, Img, MiniImg, Title, Header } from "./style";

export const Body = () => {
  return (
    <Container>
      <Header>
        <Header.Wrapper>Uzbek</Header.Wrapper>
        <Header.Wrapper>Jangari</Header.Wrapper>
        <Header.Wrapper>Comedy</Header.Wrapper>
      </Header>
      <Cards>
        {data.map((value) => {
          console.log(value.name);
          return (
            <Card>
              <Img src={value.url} />
              <Container.Wrapper>
                <MiniImg src={value.url} />
                <Title>{value.name}</Title>
              </Container.Wrapper>
            </Card>
          );
        })}
      </Cards>
    </Container>
  );
};
export default Body;
