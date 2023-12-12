import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import User from "./Components/User";
import Admin from "./Components/Adminlogin";
import Header from "./Components/Header";
import UserSignUp from "./Components/User/usersignup";
import UserLogin from "./Components/User/userlogin";
import UserDash from "./Components/User/userDash";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="user" element={<User />}>
            <Route path="signup" element={<UserSignUp />} />
            <Route path="login" element={<UserLogin />} />
          </Route>
          <Route path="userdash" element={<UserDash />}>
            <Route path="info"/>
            <Route path="votingreg"/>
            <Route path="voting"/>
            <Route path="result"/>
          </Route>
          <Route path="admin" element={<Admin />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
