import React, { useContext, useState } from "react";
import { data } from "../../mock/kino";
import { Card, Cards, Container, Img, MiniImg, Title, Header } from "./style";
import { Kino } from "../../context/datacontext";
export const Body = () => {
  const [dataContext, setDataContext] = useContext(Kino);
  const [kinodata, setKinoData] = useState(data);

  const onUzbek = () => {
    var filtereduz = data.filter((value) => value.type == "uzbek");
    setKinoData(filtereduz);
  };
  const onJangari = () => {
    var filjang = data.filter((value) => value.type === "jangari");
    setKinoData(filjang);
  };
  const onComedy = () => {
    var comedyFilter = data.filter((value) => value.type === "comedy");
    setKinoData(comedyFilter);
  };
  const onAll = () => {
    setKinoData(data);
  };
  return (
    <Container>
      <Header>
        <Header.Wrapper onClick={onAll}>Hammasi</Header.Wrapper>
        <Header.Wrapper onClick={onUzbek}>Uzbek</Header.Wrapper>
        <Header.Wrapper onClick={onJangari}>Jangari</Header.Wrapper>
        <Header.Wrapper onClick={onComedy}>Comedy</Header.Wrapper>
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
