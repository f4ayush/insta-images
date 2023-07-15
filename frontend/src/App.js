import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google'

import "./App.css";
import Login from "./components/Login";
import Home from "./container/Home";
console.log(process.env)
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Router>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
