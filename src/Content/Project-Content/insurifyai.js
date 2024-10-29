import './insurifyai.css';
import Git from '../images/Git.png';  
import GitHub from '../images/GitHub.png';  
import Python from '../images/Python.png';  
import React from '../images/React.png';  
import JavaScript from '../images/JavaScript.png';  
import openai from '../images/openai.png';  

const insurifyaiDesc = `

    <h2 class="main-header-project">InsurifyAI: Autonomous AI Agents for Pension Scheme Analysis</h2>

<h3 class="sub-heads-project">Overview</h3>
<p class="overview-project">
    uAgents is a sophisticated library developed by Fetch.ai for creating autonomous AI agents in Python. It simplifies the process of building and managing AI agents, allowing them to perform various tasks on a schedule or in response to specific events. With features like easy agent creation, network connectivity, and cryptographic security, uAgents provides a robust platform for deploying intelligent, autonomous systems.
</p>

<h3 class="sub-heads-project">Features</h3>
<ul class="features-project">
    <li><strong>Easy Creation and Management:</strong> Design and implement a wide range of agents with straightforward and expressive decorators.</li>
    <li><strong>Connected:</strong> Agents automatically join the growing uAgents network by registering on the Almanac, a smart contract deployed on the Fetch.ai blockchain.</li>
    <li><strong>Secure:</strong> Ensures that uAgent messages and wallets are cryptographically secured, safeguarding identities and assets.</li>
</ul>

<h3 class="sub-heads-project">Application</h3>
<p class="application-project">
    The project involves calculating the likely pension cost for employees under a Defined Benefit Pension Scheme. The application evaluates various factors, such as life expectancy and post-mortem benefits, to determine the total pension cost for a company and subsequently, the insurance premium. The solution utilizes three main agents:
</p>

<h4 class="sub-sub-heads-project">1. Extraction Agent</h4>
<p class="agent-description">
    Extracts key information from Defined Benefit Schemes, such as age boundaries, inflation factors, and post-mortem benefits to partners or dependents.
</p>

<h4 class="sub-sub-heads-project">2. Rules Generator Agent</h4>
<p class="agent-description">
    Uses a Large Language Model (LLM) to generate Python scripts based on the Defined Benefit Scheme and employee data. The script processes the data to generate pension metadata for each employee, addressing aspects like disability benefits, pension distribution upon death, inflation adjustments, and pension status.
</p>

<h4 class="sub-sub-heads-project">3. Recommendation Agent</h4>
<p class="agent-description">
    Calculates the total pension amount each employee is eligible for and estimates the associated insurance premium. It uses a mathematical model to determine a risk factor for each employee, considering various personal factors like gender, smoking habits, and age.
</p>

<h3 class="sub-heads-project">Final Output</h3>
<p class="final-output-project">
    The application produces the total insurance premium required to cover all employees' pension risks. This is summarized into a final yearly premium based on the average number of pension years across all employees.
</p>

<h3 class="sub-heads-project">Assumptions and Considerations</h3>
<ul class="assumptions-project">
    <li>Assumes a buy-in pension plan with the employer responsible for fixed payments while the insurer covers associated risks.</li>
    <li>Operates on a simplified model of employee records, which are usually unstructured in real scenarios.</li>
    <li>Uses OpenAI for code generation, with varying levels of consistency and stability.</li>
    <li>Lacks security measures in code execution; this is identified as a future improvement area.</li>
</ul>

<h3 class="sub-heads-project">Improvements and Future Work</h3>
<ul class="improvements-project">
    <li>Integrate frontend and backend systems.</li>
    <li>Develop additional insurance premium pricing plans or estimation models.</li>
    <li>Enhance reliability of code generation to ensure consistent results.</li>
    <li>Enable inter-agent communication directly within the AI engine rather than relying on the Flask backend.</li>
    <li>Explore alternative premium pricing models, such as fixed rates, and assess their viability.</li>
</ul>

<h3 class="sub-heads-project">Learn More</h3>
<p class="learn-more-project">
    To explore more about the uAgents project and its features, visit my <a href="https://github.com/Harshpreetkaur98/FetchAI" target="_blank">GitHub Repository</a>.
</p>


    <h3 class="sub-heads-sde">Languages and Technologies Learned</h3>
    <div class="tech-stack-sde">
        <div class="tech-item-sde"><img src="${Git}" alt="Git" class="tech-logo"></div>
        <div class="tech-item-sde"><img src="${JavaScript}" alt="JavaScript" class="tech-logo"></div>
        <div class="tech-item-sde"><img src="${React}" alt="React" class="tech-logo"></div>
        <div class="tech-item-sde"><img src="${Python}" alt="Python" class="tech-logo"></div>
        <div class="tech-item-sde"><img src="${GitHub}" alt="GitHub" class="tech-logo"></div>
        <div class="tech-item-sde"><img src="${openai}" alt="OpenAI" class="tech-logo"></div>
    </div>


`;

export default insurifyaiDesc;