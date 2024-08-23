import React from "react";
import styled from "styled-components";
import BannerImage from "../asset/Background/Banner.svg";

function Banner() {
  return (
    <Wrapper>
      <BannerImg src={BannerImage} alt="" />
    </Wrapper>
  );
}

export default Banner;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerImg = styled.img`
  /* height: 400px; */
`;
