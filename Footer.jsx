import React from 'react';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="footer-title">About Me</h2>
                    <p>
                        I am a passionate web developer with a focus on creating beautiful and functional websites. 
                        Connect with me on social media or get in touch via email.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2 className="footer-title">Quick Links</h2>
                    <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="project">Project</a></li>
                        <li><a href="resume">Resume</a></li>
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2 className="footer-title">Social Media</h2>
                    <div className="social-icons">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <img src="./src/images/facebook.png" height="25px" width="25px" alt="" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="./src/images/linkedin.png" height="25px" width="25px" alt="" />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <img src="./src/images/instagram.png" height="25px" width="25px" alt="" />
                        </a>
                        <a href="mailto:your.email@example.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
