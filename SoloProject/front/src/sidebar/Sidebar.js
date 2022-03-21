import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  const menus = [
    { name: "홍보대사", path: "/ambassador" },
    { name: "대학생 교육기부단", path: "/educationalDonation" },
    { name: "전공나래단", path: "/majorDonation" },
    { name: "영상", path: "/activityVideo" }
  ];

  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <p>{menu.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;