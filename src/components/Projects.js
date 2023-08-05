import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/adminproject.jpg";
import projImg2 from "../assets/img/chessproject.jpg";
import projImg3 from "../assets/img/bankingproject.jpg";
import projImg4 from "../assets/img/casinoproject.jpg";
import projImg5 from "../assets/img/resellproject.jpg";
import projImg6 from "../assets/img/admin.jpg";
import projImg7 from "../assets/img/movieapp.jpg";
import projImg8 from "../assets/img/hotelapp.jpg";
import projImg9 from "../assets/img/gymapp.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Custom Admin App",
      description: "Made with Kotlin, MaterialUI & SQLite",
      imgUrl: projImg1,
    },
    {
      title: "Online Chess",
      description: "Made with Kotlin, MaterialUI, Spring Boot & PostgreSQL",
      imgUrl: projImg2,
    },
    {
      title: "Banking App",
      description: "Made with Java/Kotlin, MaterialUI, Spring Boot & PostgreSQL",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Casino App",
      description: "Made with Kotlin, MaterialUI & Google Firebase",
      imgUrl: projImg4,
    },
    {
      title: "Resell Store",
      description: "Made with Java, MaterialUI & Google Firebase",
      imgUrl: projImg5,
    },
    {
      title: "Admin Page",
      description: "Made with React & Syncfusion",
      imgUrl: projImg6,
    },
  ];

  const projects3 = [
    {
      title: "Netflix Clone",
      description: "Made with React, Tailwind & REST API",
      imgUrl: projImg7,
    },
    {
      title: "Hotel Presentation",
      description: "Made with HTML, CSS & JavaScript",
      imgUrl: projImg8,
    },
    {
      title: "Gym Program",
      description: "Made with React & Bootstrap",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Check below some of my Web Apps utilizing Java/Kotlin with Spring Boot for the Backend, and React/Android for the Frontend.<br></br>All the projects are chosen because of their challenging problem-solving skills required.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {
                            projects3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}