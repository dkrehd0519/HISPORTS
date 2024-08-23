import React, { useState } from "react";
import TitleContainer from "./TitleContainer";
import InfoContainer from "./InfoContainer";
import dummy from "../../db/data.json";
import footballBackground from "../../asset/Background/football.svg";
import BasketballBackground from "../../asset/Background/Basketball.svg";

function MainContent() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const maxPage = Math.ceil(dummy.match.length / itemsPerPage);

  return (
    <div>
      <TitleContainer currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage} MatchTpye={"축구"} />
      <InfoContainer currentPage={currentPage} footballBackground={footballBackground} />
      <TitleContainer currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={maxPage} MatchType={"농구"} />
      <InfoContainer currentPage={currentPage} BasketballBackground={BasketballBackground} />
    </div>
  );
}

export default MainContent;
