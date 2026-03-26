import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atharv Raut </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I am currently Studing at Sinhgad Institute Of Technology and Sciences.
            <br />
            I am currently in 3rd year with a pointer aggregate of 8.45 SGPA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
              <li className="about-activity">
              <ImPointRight /> Songs
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Atharv</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
