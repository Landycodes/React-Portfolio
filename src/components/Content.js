import React, { useState } from "react";
import Header from "./Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function Content() {
  const [currentPage, setPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const changePage = (page) => setPage(page);

  //returns header and page content
  return (
    <div>
      <Header currentPage={currentPage} changePage={changePage} />
      {renderPage()}
    </div>
  );
}
