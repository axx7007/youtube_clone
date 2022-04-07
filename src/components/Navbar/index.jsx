import React, { useContext, useState } from "react";
import { Side } from "../../context/activecontext";
import { Kino } from "../../context/datacontext";
import MainPic from "../../assets/imgs/main.jpg";
import { data } from "../../mock/kino";
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
  const [datacontext, setDataContext] = useContext(Kino);
  const [datas, setDatas] = useContext(Side);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    var filtered = data.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setDataContext(filtered);
  };

  return (
    <Container>
      <Container.Wrapper>
        <Flexing>
          <MenuIcon onClick={() => setDatas(!datas)} />
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
