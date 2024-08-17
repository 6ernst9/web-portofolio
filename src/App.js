import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Letify} from "./components/Letify";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Resume} from "./components/Resume";
import {About} from "./components/About";
import {Socially} from "./components/Socially";
import {ChessRoyal} from "./components/ChessRoyal";

function App() {
  return (
        <div className="App">
            <NavBar />
            <Banner />
            <Resume/>
            <About/>
            <Socially/>
            <Letify />
            <ChessRoyal/>
            <Projects />
            <Contact />
    </div>
  );
}

export default App;