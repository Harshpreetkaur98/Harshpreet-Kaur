import './simons.css';
import Git from '../images/Git.png';  
import GitHub from '../images/GitHub.png'; 
import JavaScript from '../images/JavaScript.png';  
import HTML from '../images/html.png';
import css from '../images/css.png';

const simonsGameDesc = `
    <h2 class="main-header-project">Simon Game: A Classic Memory Challenge</h2>

<h3 class="sub-heads-project">Overview</h3>
<p class="overview-project">
    Simon Game is a classic memory challenge that tests players' ability to remember and repeat sequences of colors and sounds. Developed as part of a comprehensive web development bootcamp, this project leverages HTML, CSS, and JavaScript to recreate the popular electronic game. The objective is to match a randomly generated sequence of colors and sounds by clicking the corresponding buttons in the correct order.
</p>

<h3 class="sub-heads-project">Features</h3>
<ul class="features-project">
    <li><strong>Interactive Gameplay:</strong> Players must remember and replicate increasingly complex sequences of color and sound.</li>
    <li><strong>Color and Sound Feedback:</strong> Visual and auditory feedback helps players identify the correct sequence and improve their memory skills.</li>
    <li><strong>Game Levels:</strong> Difficulty increases with each successful round, challenging players to retain longer sequences.</li>
    <li><strong>Score Tracking:</strong> Displays the current score and provides feedback when sequences are successfully matched or missed.</li>
</ul>

<h3 class="sub-heads-project">How It Works</h3>
<p class="how-it-works-project">
    The Simon Game consists of a sequence of colored buttons that light up and play sounds. The player must repeat the sequence in the correct order. If the player successfully replicates the sequence, the game progresses to a new round with a longer sequence. If the player fails, the game displays a "Game Over" message and resets the sequence. The game includes:
</p>

<ul class="how-it-works-list">
    <li><strong>Sequence Generation:</strong> Randomly generates a sequence of colors that players must remember.</li>
    <li><strong>User Interaction:</strong> Handles button clicks and provides feedback on whether the player’s input is correct.</li>
    <li><strong>Score Management:</strong> Tracks the player’s score based on the number of successfully completed sequences.</li>
</ul>

<h3 class="sub-heads-project">Code and Repository</h3>
<p class="code-repository-project">
    The Simon Game project is available on GitHub. Explore the code and learn more about the implementation details by visiting the <a href="https://github.com/Harshpreetkaur98/Simon_Game" target="_blank">Simon Game repository</a>.
</p>

    <h3>Languages and Technologies Learned</h3>
    <div class="tech-stack-swe">
        <div class="tech-item-swe"><img src="${Git}" alt="Git" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${JavaScript}" alt="Javascript" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${GitHub}" alt="GitHub" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${HTML}" alt="html" class="tech-logo"></div>
        <div class="tech-item-swe"><img src="${css}" alt="css" class="tech-logo"></div>

    </div>
`;

export default simonsGameDesc;
