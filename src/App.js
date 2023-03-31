import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./components/HomePage";
import {Route, Routes} from "react-router-dom";
import ProjectCaseStudy from "./components/ProjectCaseStudy";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="/project" element = {<ProjectCaseStudy/>}/>
        </Routes>
    </div>
  );
}

export default App;