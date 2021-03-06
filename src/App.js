import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import DataList from "./DataList";
import ContactForm from "./ContactForm";
import Landkit from "./Landkit"

import "./App.css";
import Account from "./Account";

function App() {

  return (
    <div className="App">
        <Router>
          <Route path="/:page" component={Header} />
          <Route exact path="/" component={Header} /> 
          <Route exact path="/" component={Landkit} /> 
          <Route exact path="/landkit." component={Landkit} /> 
          <Route exact path="/dataList" component={DataList} />
          <Route exact path="/contactform" component={ContactForm} />
          <Route exact path="/account" component={Account} />
        </Router>
    </div>
  );
}

export default App;
