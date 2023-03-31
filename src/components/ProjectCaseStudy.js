import'../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import {PhoneLayout} from "./PhoneLayout";
import banking1 from "../assets/img/bankingss.jpg";
import banking2 from "../assets/img/bankingss2.jpg";
import banking3 from "../assets/img/bankingss3.jpg";
function ProjectCaseStudy(){
    return(
        <div>
            <NavBar />
            <PhoneLayout imgUrl={banking1}/>
            <PhoneLayout imgUrl={banking3}/>
            <Footer />
        </div>
    )
}
export default ProjectCaseStudy;
