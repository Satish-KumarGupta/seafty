
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Login from "./Component/auth/login";

const App=()=> {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
