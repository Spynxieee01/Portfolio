import '../assets/styles/about.css'
import profileImage from '../assets/images/about-img.jpg';
import Navbar from "./Navbar"

const About = () => {
  return (
    <section className="about-container">
        <Navbar/>
      <div className="about-inner">
        <div className="about-image">
          <img className="about-img" src={profileImage} alt="About Me" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm John Mark, a passionate software developer and creative problem solver.
            With expertise in web development, UI/UX design, and modern technologies, I create 
            engaging digital experiences that bring ideas to life.
          </p>
          <a href="#contact" className="btn-primary">Let's Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;