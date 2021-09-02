import React from "react";
import { FriendsNumber } from "./FriendsNumber";
import { TopHome } from "./Top";

export const HomePage = () => {
  return (
    <div className="right container">
      <TopHome></TopHome>
      <FriendsNumber />
    </div>
  );
};
