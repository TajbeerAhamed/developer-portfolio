import Home from "./Components/Home/Home";
import Navbar from "./Components/Shared/Navbar";
import Footer from "./Components/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Project from "./Components/Home/Project";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Home/ContactMe";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/contactMe" element={<Contact></Contact>}></Route>
        <Route path="/project/:index" element={<Project/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
