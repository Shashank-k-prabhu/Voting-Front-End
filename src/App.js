import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import User from "./Components/Userlogin";
import Admin from "./Components/Adminlogin";
import Header from "./Components/Header";
function App() {
  return (
    <ChakraProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
