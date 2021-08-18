import { Switch, Route} from "react-router-dom";

import "./App.css"

import Home from "./components/Home";
import Response from "./components/Response";


function App() {
  return (
    <div className="App">
      <Switch>
		      <Route exact path="/" component={Home}/>
				  <Route path="/response/:contactId" component={Response}/>
	    </Switch>
    </div>
  );
}

export default App;
