import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import TreeSkill from "./Components/TreeSkill";
import video from "./Components/assets/video.mp4";

function App() {
  return (
    <div className="App">
      <video className="hero-vid" autoPlay loop muted >
        <source src={video} type="video/mp4"></source>
      </video>
      <Hero />
      <About />
      <TreeSkill />
    </div>
  );
}

export default App;
