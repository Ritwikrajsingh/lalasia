import Footer from './components/Footer';
import Header from './components/Header';
import './styles/App.css';

function App() {
  return (<>
    <Header />
    {/* <a
      className="App-link"
      href="#"
      // target="_blank"
      rel="noopener noreferrer"
    >
      Hello World!
    </a> */}
    <main style={{minHeight:"50vh", margin: "10% 0% -13% 40%"}}>
      <h1>What the hell is happening here</h1>
    </main>
    <Footer />
  </>
  );
}

export default App;
