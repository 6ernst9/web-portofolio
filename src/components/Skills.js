import meter8 from "../assets/img/meter8.png";
import meter9 from "../assets/img/meter9.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter3.png";
import meter4 from "../assets/img/meter4.png";
import meter5 from "../assets/img/meter5.png";
import meter6 from "../assets/img/meter6.png";
import meter7 from "../assets/img/meter7.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Determined Software Development solutions for app creation, including complex architecture, processing data & specialized scripts.
                            Developed 100+ Screens by writing code based on Android using Java & Kotlin, SQLite, Frontend Web Development using React / Angular and Backend Development using Spring Boot with PostgreSQL.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>RxJs 7</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>NgRx</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>React Native</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Android</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Maven</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Kotlin</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>PL/SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Postgres</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Redis</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Jenkins</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Linux</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                        </Carousel>
                    
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}