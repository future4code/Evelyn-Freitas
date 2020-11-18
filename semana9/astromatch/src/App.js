import { useEffect, useState } from "react";
import MatchPage from "./components/MatchPage/MatchPage";
import ViewMatches from "./components/ViewMatches/ViewMatches";
import { MainContainer, BigContainer } from "./styles/Styles";

import { baseUrl } from "./constants/constants";

export default function App() {
  const [page, setPage] = useState("MatchPage")

  const onClickChangePage = () => {
    if (page === "MatchPage") {
      setPage("")
    } else {
      setPage("MatchPage")
    }
  }

  const renderedPage = () => {
    switch (page) {
      case "MatchPage":
        return <MatchPage onClickChangePage={onClickChangePage} />
      default:
        return <div><h1>Error 404:</h1><p>Page not found</p></div>
    }
  }  
  
  return (
    <BigContainer>
      {renderedPage()}
    </BigContainer>
  );
}