import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import ProjectsGrid from "./components/ProjectsData";
import ScrollToTopButton from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import experiences from "./components/experienceData";
import ReviewCarousel from "./components/ReviewCarousel";
import { reviews } from "./components/reviewsData";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Experience experiences={experiences} />
      <ProjectsGrid />
      <ReviewCarousel reviews={reviews} />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;
