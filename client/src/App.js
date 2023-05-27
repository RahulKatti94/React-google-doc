import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid"
import TextEditor1 from "./TextEditor1";

function App() {
  return (
    <>    
    <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to={`/documents/${uuidV4()}`} />
      </Route>
      <Route path="/documents/:id">
      <TextEditor1 />
      </Route>
    </Switch>
  </Router>
  
  </>

  )
}

export default App
