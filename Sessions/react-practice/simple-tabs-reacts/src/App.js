import './styles.css'
import React, {useState} from 'react';
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];


function App() {
  const [contIndex, setConIndex] = useState(0);

  return (
   <div>
     <header>
      <img src="js-logo.png" alt="JavaScript logo" />
      <div>
        <h1>Vanilla JavaScript</h1>
        <p>i.e., JavaScript without any (UI) framework or library</p>
      </div>
    </header>

    <div id="tabs">
      <menu>
        <button className={contIndex === 0 ? "active" : ""} onClick={() => setConIndex(0)}>Why React?</button>
        <button className={contIndex === 1 ? "active" : ""} onClick={() => setConIndex(1)}>Core Features</button>
        <button className={contIndex === 2 ? "active" : ""} onClick={() => setConIndex(2)}>Related Resources</button>
      </menu>
      <div id="tab-content">
        <ul>
        {content[contIndex].map((item) => (
          <li key={item}>{item}</li>
        ))}
        </ul>
      </div>
    </div>
   </div>
  );
}

export default App;
