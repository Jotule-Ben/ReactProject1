import React from "react";
import img1 from "../asset/costco34.png";
import img2 from "../asset/costco35.png";
import img3 from "../asset/costco36.png";
import img4 from "../asset/costco37.png";
import img5 from "../asset/costco22.png";
import "../css/rewards.css";

const Rewards = () => {
  return (
    <div className="reward">
      <h1>DON'T MISS CASH BACK REWARDS</h1>
      <div className="rewardContainer">
        <div className="rewardContent1">
          <p>
            <img src={img1} alt="" />
            <span>
              ON ELIGIBLE GAS AND EV CHARGING for the year and then 1%
              thereafter
            </span>
          </p>
        </div>

        <div className="rewardContent2">
          <p>
            {" "}
            <img src={img4} alt="" />
            <span>ON RESTURANTS AND ELIGIBLE TRAVEL</span>
          </p>
        </div>

        <div className="rewardContent3">
          <p>
            <img src={img3} alt="" />
            <span>ON ALL OTHER PURCHASES FROM COSTCO AND COSTCO.COM</span>
          </p>
        </div>

        <div className="rewardContent4">
          <p>
            <img src={img2} alt="" /> <span>ON ALL OTHER PURCHASES</span>
          </p>
        </div>
        <div className="cardImg">
          <img src={img5} alt="" />
          <span>The Costco Anywhere Visa® Card by Citi</span>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
