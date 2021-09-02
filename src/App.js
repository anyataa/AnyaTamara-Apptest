import { Route, Switch } from "react-router-dom";
import "./App.css";
import { ListContact } from "./ContactList/Index";
import { LeftBar } from "./LeftBar/Index";
import { Navbar } from "./Navbar/Index";
import { HomePage } from "./HomePage/Index";
import { Footer } from "./Footer/Index";
import { UiDesign } from "./UiDesign/Index";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <div class="d-flex justify-content-around">
          <LeftBar />
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/contactList" component={ListContact}></Route>
            <Route path="/designPortfolio" component={UiDesign}></Route>
          </Switch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
