import { Switch, Route} from "react-router-dom";

import "./App.css"

import Home from "./components/Home";
import Response from "./components/Response";


function App() {
  return (
    <div className="App">
      <Switch>
		      <Route path="/" component={Home}/>
				  
	    </Switch>
    </div>
  );
}

export default App;
