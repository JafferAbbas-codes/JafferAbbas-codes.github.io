import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">Jaffer Abbas </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />I am a graduate from{" "}
            <span className="purple">
              {" "}
              Institute of Business Administration,{" "}
            </span>{" "}
            Karachi.
            <br /> A budding{" "}
            <span className="purple"> Full-Stack Developer </span> and a
            <span className="purple">
              {" "}
              Competitive Programming Enthusiast.{" "}
            </span>{" "}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> DOTA2 Gaming (Esports)
            </li>
            <li className="about-activity">
              <ImPointRight /> Blitz Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Table Tennis
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Socializing
            </li> */}
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Learning while HOPING and HUSTLING!!!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
