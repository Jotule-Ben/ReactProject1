import React from "react";
import { Link } from "react-router-dom";
import "../css/accountfooter.css";

const AccountFooter = () => {
  return (
    <>
      <div className="accountfooter">
        <div className="footerLinks">
          <ul>
            <li>
              <Link>Terms and Conditions </Link>
            </li>
            <li>
              <Link>Privacy Rights </Link>
            </li>
          </ul>
        </div>
        <div className="footerText">
          <p>&copy; 2024 Costco Wholesale Corporation. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default AccountFooter;
