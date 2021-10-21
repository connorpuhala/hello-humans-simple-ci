import './App.css';
import cover from './images/SimpleCover.png';
import HelpIcon from './images/HelpIcon.png';
import BackgroundText from './background.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BackgroundText />
        <div className="help-icon-container">
          <a
            href="mailto:human@hellohumans.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={HelpIcon} alt="HelpIcon" className="help-icon" />
          </a>
        </div>
        <a
          className="buy-link"
          href="https://hellohumans-ai.myshopify.com/cart/41880429035750:1?channel=buy_button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={cover} alt="cover" className="cover"/>
          <p>$11</p>
        </a>
      </header>
    </div>
  );
}

export default App;
