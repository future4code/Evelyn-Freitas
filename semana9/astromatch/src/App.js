import { useEffect, useState } from "react";
import MatchPage from "./components/MatchPage/MatchPage";
import ViewMatches from "./components/ViewMatches/ViewMatches";
import { MainContainer, BigContainer } from "./Styles/Styles";

export default function App() {
  return (
    <BigContainer>
      <MainContainer>
        <MatchPage />
      </MainContainer>
    </BigContainer>
  );
}


