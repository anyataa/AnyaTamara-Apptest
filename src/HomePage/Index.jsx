import React from "react";
import { ChatDisplay } from "./ChatDisplay";
import { FriendsNumber } from "./FriendsNumber";
import { TopHome } from "./Top";

export const HomePage = () => {
  return (
    <div className="right container">
      <TopHome></TopHome>
      <div>
        <FriendsNumber />
        <ChatDisplay />
      </div>
    </div>
  );
};
