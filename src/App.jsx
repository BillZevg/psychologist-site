import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";
import IndividualTherapy from "./pages/IndividualTherapy";
import AnxietyManagement from "./pages/AnxietyManagement";
import LifeTransitions from "./pages/LifeTransitions";
import OnlineTherapy from "./pages/OnlineTherapy";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route
          path="/services/individual-therapy"
          element={<IndividualTherapy />}
        />
        <Route
          path="/services/anxiety-management"
          element={<AnxietyManagement />}
        />
        <Route
          path="/services/life-transitions"
          element={<LifeTransitions />}
        />
        <Route path="/services/online-therapy" element={<OnlineTherapy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
