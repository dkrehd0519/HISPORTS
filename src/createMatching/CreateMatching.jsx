import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../common/Header";
import Left from "../asset/Icon/Left.svg";
import Camera from "../asset/Icon/Camera.svg";
import Users from "../asset/Icon/Users.svg";
import Location from "../asset/Icon/BigLocation.svg";
import Calendar from "../asset/Icon/Calendar.svg";
import Clock from "../asset/Icon/Clock.svg";
import { useNavigate } from "react-router-dom";

function CreateMatching() {
  const fileInputRef = useRef(null);
  const handleImageUploadClick = () => {
    fileInputRef.current.click();
  };

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Header />
      <TitleContainer>
        <BackButton>
          <MoveBtn onClick={handleGoBack}>
            <img src={Left} alt="" />
          </MoveBtn>
        </BackButton>
        <Title>NEW MATCHING</Title>
      </TitleContainer>
      <ThumbnailContainer>
        <Thumbnail onClick={handleImageUploadClick}>
          <input type="file" style={{ display: "none" }} ref={fileInputRef} />

          <img src={Camera} alt="" />
        </Thumbnail>
        <MatchTitle placeholder="예) 손양원 RC 축구대전 모집!!"></MatchTitle>
      </ThumbnailContainer>
      <DetailContainer>
        <Images src={Users} alt="" />
        <InfoText>참여 인원 (호스트포함)</InfoText>
        <InputContainer>
          <span>최소</span>
          <SmallBox />
          <sapn>~최대</sapn>
          <SmallBox />
        </InputContainer>
      </DetailContainer>
      <DetailContainer>
        <div></div>
        <InfoText>성비</InfoText>
        <InputContainer>
          <span>여자</span>
          <SmallBox />
          <sapn style={{ marginLeft: "12px" }}>남자</sapn>
          <SmallBox />
        </InputContainer>
      </DetailContainer>
      <DetailContainer>
        <div></div>
        <InfoText>학번</InfoText>
        <InputContainer>
          <span>최소</span>
          <SmallBox />
          <sapn>~최대</sapn>
          <SmallBox />
        </InputContainer>
      </DetailContainer>
      <DetailContainer>
        <Images src={Location} alt="" />
        <InfoText>장소</InfoText>
        <InputContainer>
          <BigBox />
        </InputContainer>
      </DetailContainer>{" "}
      <DetailContainer>
        <Images src={Calendar} alt="" />
        <InfoText>날짜</InfoText>
        <InputContainer>
          <BigBox />
        </InputContainer>
      </DetailContainer>{" "}
      <DetailContainer>
        <Images src={Clock} alt="" />
        <InfoText>시간</InfoText>
        <InputContainer>
          <span>시작</span>
          <SmallBox />
          <sapn style={{ marginLeft: "12px" }}>종료</sapn>
          <SmallBox />
        </InputContainer>
      </DetailContainer>{" "}
      <DetailContainer style={{ gridTemplateColumns: "1fr 5fr 7fr" }}>
        <div />
        <InfoText>전달사항</InfoText>
        <InputContainer>
          <Deliverance />
        </InputContainer>
      </DetailContainer>
      <ButtonContainer>
        <SubmitBtn>신청하기</SubmitBtn>
      </ButtonContainer>
    </Wrapper>
  );
}

export default CreateMatching;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  height: 91px;
`;

const BackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoveBtn = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  align-items: center;
  height: 397px;
`;

const Thumbnail = styled.div`
  width: 176px;
  height: 176px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background-color: #d9d9d9;
`;

const MatchTitle = styled.input`
  width: 587px;
  height: 50px;
  background-color: #e6e6e6;
  margin-top: 21px;
  border: 1px solid #e6e6e6;
  text-align: center;
`;

const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr 4fr;
  font-size: 20px;
  height: 88px;
  align-items: center;
  border-bottom: 1px solid #656565;
`;

const Images = styled.img`
  margin-left: 58px;
`;

const InfoText = styled.div``;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SmallBox = styled.input`
  width: 118px;
  height: 34px;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
  margin-left: 10px;
  margin-right: 10px;
`;

const BigBox = styled.input`
  width: 294px;
  height: 34px;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
  margin-left: 55px;
`;

const Deliverance = styled.input`
  width: 715px;
  height: 34px;
  background-color: #d9d9d9;
  border: 1px solid #d9d9d9;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  height: 61px;
  background-color: #028202;
  color: white;
  font-size: 24px;

  margin-top: 53px;
  margin-bottom: 53px;
  border: 1px solid #028202;
`;
