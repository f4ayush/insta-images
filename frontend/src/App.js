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
import { fetchUser } from "./utils/fetchUser";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()
  const user = fetchUser()

  useEffect(() => {
    if(!user){
      navigate('/login')
    }
  }, [])
  
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
