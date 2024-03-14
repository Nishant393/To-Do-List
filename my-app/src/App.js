// import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios";
// import Login from "./Auth/Login"
// import Signup from "./Auth/Signup";
import Home from "./component/home/Home";
import Collections from "./component/Collections";
import About from "./component/About";
import Contact from "./component/Contact";
const App=()=> {
  // useEffect(() => {
  //   axios.get("http://localhost:3001/servies")
  //     .then((response) => {
  //       console.log(response)
  //     })
  //     .catch((e) => {
  //       console.log(e.message)
  //     })
  // }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/Login" element={<Login />} /> */}
          {/* <Route path="/Signup" element={<Signup />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collections/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// https://codepen.io/ResoGuy/pen/PaaWde
// https://pin.it/fHGbjMkkK
// https://pin.it/6hQobj0Kc
export default App;