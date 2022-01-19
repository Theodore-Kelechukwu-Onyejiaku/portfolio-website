import { Switch, Route } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import "./App.css";
import "aos/dist/aos.css";

import Home from "./components/Home";
import Response from "./components/Response";

function App() {
  return (
    <SimpleReactLightbox>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/response/:contactId" component={Response} />
        </Switch>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
