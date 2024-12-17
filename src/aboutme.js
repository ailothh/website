import React from 'react';
import styled from 'styled-components';
import linkedin from './assets/linkedin.svg';
import githubIcon from './assets/github.svg';
import heroImage from './assets/image.png';
import reactLogo from './assets/react-icon.svg';
import resume from './assets/Alex_Winkler_Resume.pdf';
/* Container */
const Container = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem;

  /* Left content styling */
  .left-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    max-width: 50%;
    text-align: center;
  }

  /* Hero text styling */
  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 0.5rem;
  }

  /* Large heading (name) style */
  .hero-text h1 {
    font-size: 5rem;
    color: white;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
    margin: 0;
    white-space: nowrap;
  }

  /* Paragraph styling */
  .hero-text p {
    font-size: 1.5rem;
    color: white;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
    margin: 0;
    white-space: nowrap;
  }

  /* Button container styling */
  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  /* Button styling */
  .button {
    padding: 1.1rem;
    background-color: cyan;
    color: black;
    border: none;
    border-radius: 40px;
    font-size: 1.6rem;
    font-family: 'Red Hat Display', sans-serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: darkcyan;
    }
  }

  /* Social Media Icons */
  .social-media img {
    width: 3rem;
    height: 3.5rem;
    padding: .7rem;
  }

  /* Right-content */
  .right-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    background: url(${heroImage}) no-repeat center right;
    background-size: 60%;
  }

  .hero-image {
    display: none;
  }

  /* Footer styling */
  .footer {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%); /* Centers the footer horizontally */
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.7); /* Optional background */
    padding: 0.5rem 0;
    width: 100%;
  }

  .react-logo {
    width: 50px;
    height: 50px;
    margin-top: 1rem;
  }

  /* Media Queries for responsiveness */
  @media (max-width: 960px) {
    .hero-text h1 {
      font-size: 4.5rem;
    }

    .left-content {
      max-width: 70%;
    }

    .right-content {
      width: 100%;
      height: auto;
    }

    .hero-image {
      width: auto;
      height: auto;
    }
  }

  @media (max-width: 600px) {
    .hero-text h1 {
      font-size: 3.5rem;
    }

    .right-content {
      width: 100%;
      height: auto;
    }

    .hero-image {
      width: 100%;
      height: auto;
    }

    .left-content {
      max-width: 100%;
      text-align: center;
    }
  }
`;

/* Hero Component */
export function Hero() {
  return (
    <Container id="home">
      {/* Left side content */}
      <div className="left-content">
        <div className="hero-text">
          <p>Hello, I'm</p>
          <h1>Alexander Winkle</h1>
        </div>

        {/* Button and Social Media Icons below the text */}
        <div className="button-container">
          <button className="button">
            <a href={resume} download="Alex_Winkler_Resume.pdf" style={{ color: "inherit", textDecoration: "none" }}>CV/Resume</a>
          </button>
          {/* Social media icons */}
          <div className="social-media">
            <a href="https://www.linkedin.com/in/alex-winkler-2a55422b3/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/ailothh" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>

      {/* Right side content (image) */}
      <div className="right-content">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>

      {/* Footer */}
      <div className="footer">
        <p>This website was made with</p>
        <img src={reactLogo} alt="React logo" className="react-logo" />
      </div>
    </Container>
  );
}