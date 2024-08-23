import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../asset/Logo/Logo.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid #e0dfde;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1290px;
  display: flex;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  cursor: pointer;
`;
const RightContainer = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
`;

const Heart = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: 31px;
`;

const HomeBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
`;

function Header() {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };
  return (
    <div>
      <Wrapper>
        <Container>
          <LogoImg onClick={handleClickHome} src={Logo} alt="" />
          <RightContainer>
            <Heart>♡</Heart>
            <HomeBtn onClick={handleClickHome}>MY</HomeBtn>
          </RightContainer>
        </Container>
      </Wrapper>
    </div>
  );
}

export default Header;
