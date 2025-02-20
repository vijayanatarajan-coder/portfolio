import React from "react";
import { MdOutlineMail } from "react-icons/md";
const EmailIcon = () => {
  return (
    <div>
      <a href="mailto:nviji94@gmail.com" title="email">
        <MdOutlineMail className="footer-icon" />
      </a>
    </div>
  );
};

export default EmailIcon;
