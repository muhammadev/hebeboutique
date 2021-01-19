import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import MainCollection from "./components/MainCollection";

function App() {
  return (
    <div className="App">
      <div className="header-bar">
        <div className="login-bar">
          <div>create account</div>
          <span>.</span>
          <div>login</div>
        </div>
        <Header />
      </div>
      <main>
        <Home />
        <Gallery />
        <MainCollection />
      </main>
      <footer>
        <div className="container">
          <div className="sections">
            <div className="customer-care"></div>
            <div className="about"></div>
            <div className="newsletter"></div>
          </div>
          <div className="icons">
            <div className="payment-icons"></div>
            <div className="social-icons"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
