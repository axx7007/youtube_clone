import React, { useContext, useState } from "react";
import { Side } from "../../context/activecontext";
import { Kino } from "../../context/datacontext";
import MainPic from "../../assets/imgs/main.jpg";
import {
  Container,
  MenuIcon,
  Logo,
  Flexing,
  SearchInput,
  SearchDiv,
  SearchIcon,
  VideoIcon,
  GridIcon,
  NotifIcon,
  MainPicture,
} from "./style";

const Navbar = () => {
  const [kino, setKino] = useContext(Kino);
  const [data, setData] = useContext(Side);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    console.log(e.target.value);
    var filtered = kino.map((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    setKino(filtered);
  };

  return (
    <Container>
      <Container.Wrapper>
        <Flexing>
          <MenuIcon onClick={() => setData(!data)} />
          <Logo />
        </Flexing>
        <Flexing>
          <SearchInput type="text" placeholder="search" onChange={onSearch} />
          <SearchDiv>
            <SearchIcon />
          </SearchDiv>
        </Flexing>
        <Flexing>
          <VideoIcon />
          <GridIcon />
          <NotifIcon />
          <MainPicture src={MainPic} />
        </Flexing>
      </Container.Wrapper>
    </Container>
  );
};

export default Navbar;
