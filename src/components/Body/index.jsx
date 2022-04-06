import React from "react";
import { data } from "../../mock/kino";
import { Card, Container, Img, Title } from "./style";

export const Body = () => {
  return (
    <Container>
      {data.map((value) => {
        return (
          <Card>
            <Img />
            <Title src={value.url} />
          </Card>
        );
      })}
    </Container>
  );
};
export default Body;
