import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import {NavBar} from "./layout/NavBar";
import {Footer} from "./layout/Footer";
import {ScrollToTop} from "./layout/ScrollToTop";
import {HomePage} from "./pages/home/HomePage";
import {AboutPage} from "./pages/about/AboutPage";
import {ExperiencePage} from "./pages/experience/ExperiencePage";
import {ProjectsPage} from "./pages/projects/ProjectsPage";
import {NotFoundPage} from "./pages/not-found/NotFoundPage";
import {ScrollProvider} from "./hooks/useParallaxScroll";
import {ThemeProvider} from "./hooks/useTheme";
import CustomCursor from './layout/CustomCursor';

function App() {
  return (
    <ThemeProvider>
    <ScrollProvider>
        <div className="App">
            <CustomCursor/>
            <NavBar />
            <main className="page-content">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            </main>
            <Footer />
    </div>
    </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;