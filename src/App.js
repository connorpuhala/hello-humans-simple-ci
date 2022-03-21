import './App.css';
import cover from './images/SimpleCover.png';
import HelpIcon from './images/HelpIcon.png';
import BackgroundText from './background.js';

function App() {
  return (
    <div className="App">
      <div class="dropdown show">
        <button id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          :)
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="https://docs.google.com/document/d/e/2PACX-1vSTnFMoJZRLJCzGb8YoOe860dEBjiYTUwDY02WaVVBl0udR-nkVZqLD4l1gB2fbbxssktxX7xxU6jVL/pub" target="_blank">📝 Whitepaper</a>
          <a class="dropdown-item" href="https://docs.google.com/document/d/e/2PACX-1vQUnWZoxr-euOFQEVTPFlLvpLV_IGQDXJG9b4CJaepPnb0ndlDrMQiXcE_8eIAmt9AjpGyKTcr9-Nj-/pub" target="_blank">📕 Full PDF</a>
          <a class="dropdown-item" href="https://twitter.com/HelloHumansAI" target="_blank">🕊️ Twitter</a>          
        </div>
      </div>
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
          <img src={cover} alt="cover" className="cover" />
          <p>$11</p>
        </a>
      </header>
    </div>
  );
}

export default App;
