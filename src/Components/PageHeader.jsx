import React from "react";
import "../Styles/PageHeader.css";

const PageHeader = ({ title, firstPart }) => {
  return (
    <section className="page-heading-container">
      <h1 className="page-heading-title">
        {title}
        <br />
        <span>{firstPart}</span>
      </h1>
    </section>
  );
};

export default PageHeader;
