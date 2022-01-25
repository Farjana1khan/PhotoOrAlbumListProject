import React, {Component} from "react";
import PhotoList from "./Components/PhotoList";
import PhotoDetails from "./Components/Photodetails";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

  class App extends Component {
  render(){
    return (
    <section>
      <Router>
        {" "}
        <Switch>
          <Route exact path="/" component={PhotoList} />
          <Route path="/:photo_id" component={PhotoDetails} />
        </Switch>
      </Router>
    </section>
  );
  }
}

export default App;
