

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comprehensive from "./pages/Comprehensive";
import Footer from "./components/shared/footer/Footer";
import Navbar from "./components/shared/navbar/Navbar";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/comprehensive" element={<Comprehensive />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
