import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-black to-gray-800 text-white">  
      <NavBar />
      <Home />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
      
      <SocialLinks />
    </div>
  );
}

export default App;
