import React from "react";
import { useRouteMatch } from "react-router-dom";

export const Index = () => {
  const { path } = useRouteMatch();

  return <div></div>;
};
