import React from "react";
import "../Styles/PageHeader.css";

const PageHeader = ({ title, firstPart }) => {
  return (
    <div className="page-heading-container">
      <h1 className="page-heading-title">
        {title}
        <br />
        {firstPart}
      </h1>
    </div>
  );
};

export default PageHeader;
