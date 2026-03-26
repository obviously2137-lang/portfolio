import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import source from "../../Assets/Projects/sourcemart.png";
import News from "../../Assets/Projects/NewsMania.png";
import weather from "../../Assets/Projects/weather.png";
import sales from "../../Assets/Projects/Sales.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={source}
              isBlog={false}
              title="Source-Mart"
              description="Vendors is a React + TypeScript web application built with Vite, Tailwind CSS, and shadcn-ui, designed to manage vendor-related workflows efficiently. It includes a modern UI, responsive design, and can be easily deployed on any hosting service ."
              ghLink="https://github.com/Experio2705/vendors.git"
              demoLink="https://vendors-mu.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="NewsMania"
              description="This project is a news web application built using modern frontend technologies.It fetches, displays, and categorizes news articles in a clean, responsive interface."
              ghLink="https://github.com/Experio2705/News.git"
              demoLink="https://news-eight-umber.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Weather App is a clean and responsive web application built using HTML5, CSS3, and JavaScript, designed to fetch and display live weather and air quality data via the OpenWeatherMap API. Users can search for a city to view current temperature (including max/min), weather condition, wind speed, humidity, pressure, visibility, and the air quality index (AQI). The app also displays localized date and time in India Standard Time (IST) and features a fully responsive design. "
              ghLink="https://github.com/Experio2705/weather-app.git"
              demoLink="https://weather-app-three-mu-71.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="Sales Report Using Power Bi"
              description="Sales Report is an interactive Power BI dashboard that analyzes sales, profit, quantity, and promotion performance across products, cities, and time periods, providing key business insights through dynamic visuals and filters."
              ghLink="https://github.com/Experio2705/Sales-Report.git"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
