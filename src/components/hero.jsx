import '../assets/styles/hero.css'
import portfolioImage from '../assets/images/hero-img.png';


const Hero = () => {
    return (
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Transforming Ideas into Innovative Solutions</h1>
            <p className="hero-subtitle">
              Explore a showcase of my work in engineering, web development, and modern technology solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="hero-btn primary-btn">
                View My Projects
              </a>
              <a href="#contact" className="hero-btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={portfolioImage} alt="Portfolio Showcase" />
          </div>
        </section>
      );
    };
  
  export default Hero;
