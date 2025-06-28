import Contact from "./components/contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
// import Education from "./pages/Education/Education";
import Home from "./pages/Home/Home";
import Journey from "./pages/Journey/Journey";
import Projects from "./pages/Projects/Projects";
import Skill from "./pages/Skills/Skill";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
