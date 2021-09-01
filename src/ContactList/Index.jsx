import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { ContactDetail } from "../ContactDetail/Index";
import { ContactItem } from "./ContactItem";

export const ListContact = () => {
  let { path } = useRouteMatch();

  return (
    <div className="right container">
      <Switch>
        <Route path={`${path}`} component={ContactItem} exact></Route>
        <Route path={`${path}/:id`} component={ContactDetail}></Route>
      </Switch>
    </div>
  );
};
