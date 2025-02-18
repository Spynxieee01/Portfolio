import '../assets/styles/hero.css'
import portfolioImage from '../assets/images/hero-img.png';


const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <img className="hero-img" src={portfolioImage} alt="Portfolio Showcase" />
        <h1>Transforming Ideas into Innovative Solutions</h1>
        <p>
          Welcome to my portfolio, where creativity meets technology. Discover a curated
          collection of my work in engineering, web development, and cutting-edge technology
          solutions designed to drive innovation and efficiency.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            Explore My Latest Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;