import React from "react";
import styled from "styled-components";

function Sidebar() {

const RightBar = styled.div`
float: right;
`

  const menus = [
    { name: "홍보대사" },
    { name: "대학생 교육기부단" },
    { name: "전공나래단" },
    { name: "영상" }
  ];

  return (
    <RightBar>
      {menus.map((menu, index) => {
        return (
            <p>{menu.name}</p>
        );
      })}
    </RightBar>
  );
}

export default Sidebar;