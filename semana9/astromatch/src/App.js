import { useEffect, useState } from "react";
import MatchPage from "./components/MatchPage/MatchPage";
import ViewMatches from "./components/ViewMatches/ViewMatches";
import { MainContainer } from "./Styles/Styles";

export default function App() {
  return (
    <MainContainer>
      <MatchPage />
    </MainContainer>
  );
}


