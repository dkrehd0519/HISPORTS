import React from "react";
import styled from "styled-components";
import ParticipantsIcon from "../../asset/Icon/participants.svg";
import Location from "../../asset/Icon/Location.svg";
import dummy from "../../db/data.json";

function InfoContainer({ currentPage, footballBackground, BasketballBackground }) {
  const itemsPerPage = 3;
  const startIndex = currentPage * itemsPerPage;
  const selectedMatches = dummy.match.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Wrapper>
      <Container>
        {selectedMatches.map((match, index) => (
          <MatchWrapper key={index}>
            {footballBackground ? (
              <MatchImg src={footballBackground} alt="" />
            ) : (
              <MatchImg src={BasketballBackground} alt="" />
            )}
            <MatchInfoContainer>
              <MatchTitle>[{match.title}] </MatchTitle>
              <MatchInfo>
                <img src={Location} alt="" />{" "}
                <span style={{ marginLeft: "3px" }}>
                  {match.location} {match.date} {match.startTime}
                </span>
              </MatchInfo>
              <Participants>
                <img src={ParticipantsIcon} alt="" />
                <span style={{ marginLeft: "3px" }}>
                  {match.Current}/{match.Maximum}
                </span>
              </Participants>
            </MatchInfoContainer>
          </MatchWrapper>
        ))}
      </Container>
    </Wrapper>
  );
}

export default InfoContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 14px;
`;

const Container = styled.div`
  width: 1363px;
  display: flex;
`;

const MatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 447px;
  height: fit-content;
  margin-right: 11px;
`;

const MatchImg = styled.img`
  height: 417px;
`;

const MatchInfoContainer = styled.div`
  height: 143px;
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
`;

const MatchTitle = styled.div`
  font-size: 16px;
  font-weight: bolder;
  margin-top: 15px;
  margin-left: 17px;
`;

const MatchInfo = styled.div`
  font-size: 12px;
  margin-top: 15px;
  margin-left: 17px;
  display: flex;
  align-items: center;
`;

const Participants = styled.div`
  font-size: 12px;
  margin-left: 17px;
  display: flex;
  align-items: center;
  margin-top: 26px;
`;
