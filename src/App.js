import './App.css';
import ParticlesComponent from './components/particles'; 
import { Hero } from './aboutme';

function App() {
  return (
    <div className="App">
      {/* Particles Background */}
      <ParticlesComponent id="particles" />
      
      {/* Hero Section wrapped in a container */}
    <div className="hero-container">
        <Hero />
      </div>
    </div>
  );
}

export default App;