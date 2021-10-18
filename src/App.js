import './App.css';
import cover from './images/SimpleCover.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={cover} alt="cover" className="cover"/>
        <a
          className="buy-link"
          href="https://hellohumans-ai.myshopify.com/cart/41880429035750:1?channel=buy_button"
          target="_blank"
          rel="noopener noreferrer"
        >
          $11
        </a>
      </header>
    </div>
  );
}

export default App;
