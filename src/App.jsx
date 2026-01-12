import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./landing/pages/Landing";
import Home from "./landing/pages/Home";
import About from "./landing/pages/About";
import Services from "./landing/pages/Services";
import Contact from "./landing/pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
