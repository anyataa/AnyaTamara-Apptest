import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ListContact } from "./ShowListContact/Index";
import { ContactItem } from "./ShowListContact/ContactItem";
import { LeftBar } from "./LeftBar/Index";

function App() {
  return (
    <div className="container">
      <div class="d-flex justify-content-around">
        <LeftBar />
        <Switch>
          <Route exact path="/" component={ContactItem}></Route>
          <Route path="/listContact" component={ListContact}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
