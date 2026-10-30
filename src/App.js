import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {CasaRosa} from "./components/CasaRosa";
import {Warlords} from './components/Warlords'
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {Resume} from "./components/Resume";
import {About} from "./components/About";
import {Experience} from "./components/Experience";
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
            <main className="page-content">
            <Banner />
            <About/>
            <Resume/>
            <Experience/>
            <Socially/>
            <Warlords/>
            <Thesis/>
            <CasaRosa/>
            <Projects />
            <Contact />
            </main>
            <Footer />
    </div>
    </ScrollProvider>
  );
}

export default App;