import React from "react";
import Content from "./components/Content";

//Content holds Header, page content, and Footer
export default function App() {
  return (
    <div id="page-container" className="bgColor">
      <Content />
    </div>
  );
}
