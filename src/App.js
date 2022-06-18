import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import Home from "./Page/Home";
import MainSectionWomen from "./Components/MainSectionWomen/Index";
import MainSectionAccessories from "./Components/Accessories/Index";
import MainSectionoOther from "./Components/MainOther/Index";
import MainSectionShoes from "./Components/MainShoes/Index";
import Login from "./Page/Login";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Main />} />
          <Route path="women" element={<MainSectionWomen />} />
          <Route path="accessories" element={<MainSectionAccessories />} />
          <Route path="watch" element={<MainSectionoOther />} />
          <Route path="shoes" element={<MainSectionShoes />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
