import './udemy.css';
import Git from '../images/Git.png';  
import GitHub from '../images/GitHub.png';  
import Java from '../images/Java.png';  
import Python from '../images/Python.png';  
import React from '../images/React.png';  
import JavaScript from '../images/JavaScript.png';  

const udemyDesc = `
    <h2 class="main-header">Complete Web Development Bootcamp</h2>
    <h3 class="sub-heads-swe">Certification - June 2024</h3>
    
    <p>Successfully completed the <strong>Complete Web Development Bootcamp</strong>, an intensive course designed to cover every aspect of modern web development.</p>

    <h3>Key Skills</h3>
    <ul class="no-bullets-swe">
        <li>Front-End Technologies: HTML5, CSS3, Flexbox, Grid, Bootstrap 5, JavaScript ES6, React.js</li>
        <li>Back-End Development: Node.js, Express.js, REST APIs, SQL, PostgreSQL</li>
        <li>Web3 and Blockchain: Web3 Development, Token Contract Development, NFT Minting</li>
        <li>Additional Skills: Git, GitHub, Deployment with GitHub Pages, and various real-world project applications</li>
    </ul>

    <p>Throughout the course, I built and showcased real-world projects, demonstrating proficiency in both front-end and
     back-end technologies. These projects are available for review on my <a href="https://github.com/Harshpreetkaur98" class="button">GitHub</a> profile.</p>
    
    <h3>Skills Acquired</h3>
    <div class="tech-stack-swe">
        <div class="tech-item-swe"><img src="${Git}" alt="Git" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${Java}" alt="Java" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${JavaScript}" alt="JavaScript" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${React}" alt="React" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${Python}" alt="Python" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${GitHub}" alt="GitHub" class="tech-logo"></div>
    </div>
`;

export default udemyDesc;
