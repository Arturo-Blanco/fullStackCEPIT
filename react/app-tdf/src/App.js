import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React } from "react";
import Footer from "./Pages/Footer/footer";
import Header from "./Pages/Header/header";
import HomePage from "./Pages/HomePage/homePage";
import ContentPage from "./Pages/ContentPage/contentPage";
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";

function App() {
  
  return (
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/content" element={<ContentPage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
