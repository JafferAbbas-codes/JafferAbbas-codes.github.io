import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaStackOverflow } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Typescript. </b>
              </i>
              <br />
              <br />
              My field of interests are developing new
              <i>
                <b className="purple">
                  {" "}
                  Web and Mobile Applications and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b className="purple">Agile Development.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              by using cloud platforms such as <b className="purple">
                AWS
              </b> and <b className="purple">GCP</b>. I love working in a
              development environment implementing and maintaining
              <i>
                <b className="purple"> Microservices</b>
              </i>
              .
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-thumbnail"
                alt="avatar"
                style={{ borderRadius: "50%" }}
              />
            </Tilt>
          </Col> */}
          <Col md={4} className="myAvtar">
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/JafferAbbas-codes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/17325143/syed-muhammad-jaffer-abbas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syed-muhammad-jaffer-abbas-3a4ba719b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/JafferA08401106"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jaffy_here/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
