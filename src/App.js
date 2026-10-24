import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {CasaRosa} from "./components/CasaRosa";
import {Warlords} from './components/Warlords'
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Resume} from "./components/Resume";
import {About} from "./components/About";
import {Socially} from "./components/Socially";
import {Thesis} from "./components/Thesis";
import {ScrollProvider} from "./hooks/useParallaxScroll";
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <ScrollProvider>
        <div className="App">
            <CustomCursor/>
            <NavBar />
            <Banner />
            <Resume/>
            <About/>
            <Socially/>
            <Warlords/>
            <Thesis/>
            <CasaRosa/>
            <Projects />
            <Contact />
    </div>
    </ScrollProvider>
  );
}

export default App;