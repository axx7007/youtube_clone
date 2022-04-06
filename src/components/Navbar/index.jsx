import React, { useContext } from "react";
import { Side } from "../../context";

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
  const [data, setData] = useContext(Side);
  console.log(data, "navbar");
  return (
    <Container>
      <Container.Wrapper>
        <Flexing>
          <MenuIcon onClick={() => setData(!data)} />
          <Logo />
        </Flexing>
        <Flexing>
          <SearchInput type="text" placeholder="search" />
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
