import React, { useContext, useState } from "react";
import { data } from "../../mock/kino";
import { btnData } from "../../mock/button";
import {
  Card,
  Cards,
  Container,
  Img,
  MiniImg,
  Title,
  Header,
  CategoryBtn,
} from "./style";
import { Kino } from "../../context/datacontext";
export const Body = () => {
  const [dataContext, setDataContext] = useContext(Kino);
  const [kinodata, setKinoData] = useState(data);
  const [variable, setVariable] = useState("");
  const onChange = (btndata) => {
    console.log(typeof btndata);
    var filtered = kinodata.filter((item) => item.type === btndata);
    console.log(filtered);
    // setDataContext(filtered);
  };
  return (
    <Container>
      <Header>
        {btnData.map((value) => {
          return (
            <CategoryBtn key={value.id} onClick={() => onChange(value.item)}>
              {value.item}
            </CategoryBtn>
          );
        })}
      </Header>
      <Cards>
        {dataContext.map((value) => {
          console.log(value.name);
          return (
            <Card key={value.id}>
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
