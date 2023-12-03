import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResponsiveNav from "./components/Header/responsive";
import "./styles/App.css";

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  console.log(hamburgerMenu, "value of hamburgerMenu");
  return (
    <>
      <Header
        hamburgerMenu={hamburgerMenu}
        setHamburgerMenu={setHamburgerMenu}
      />
      {/* <a
      className="App-link"
      href="#"
      // target="_blank"
      rel="noopener noreferrer"
    >
      Hello World!
    </a> */}
      <main style={{ minHeight: "50vh" }}>
        <ResponsiveNav hamburgerMenu={hamburgerMenu} />
        <h1>What the hell is happening here</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
