import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/*  {route.map((route) => {
          return <Route path={route.path} element={route.component} />
        })} */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
