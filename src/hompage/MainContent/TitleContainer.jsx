import React from "react";
import styled from "styled-components";
import Right from "../../asset/Icon/Right.svg";
import Left from "../../asset/Icon/Left.svg";
import { useNavigate } from "react-router-dom";

function TitleContainer({ currentPage, setCurrentPage, maxPage }) {
  const navigate = useNavigate();
  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < maxPage - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleCreateMatch = () => {
    navigate("/createMatch");
  };

  return (
    <Wrapper>
      <Container>
        <TitleWrapper>
          <div>
            축구{" "}
            <span onClick={handleCreateMatch} style={{ cursor: "pointer" }}>
              ⊕
            </span>{" "}
          </div>
        </TitleWrapper>
        <MoveWrapper>
          <MoveBtn
            style={{ marginRight: "11px", opacity: currentPage === 0 ? 0.5 : 1 }}
            onClick={handlePrevClick}
            disabled={currentPage === 0}
          >
            <img src={Left} alt="" />
          </MoveBtn>
          <MoveBtn
            style={{ opacity: currentPage === maxPage - 1 ? 0.5 : 1 }}
            onClick={handleNextClick}
            disabled={currentPage === maxPage - 1}
          >
            <img src={Right} alt="" />
          </MoveBtn>
        </MoveWrapper>
      </Container>
    </Wrapper>
  );
}

export default TitleContainer;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;
`;

const Container = styled.div`
  width: 1363px;
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const MoveWrapper = styled.div`
  display: flex;
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
