import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import daoApp from "../../Assets/Projects/daoApp.png";
import bookstore from "../../Assets/Projects/bookstore.png";
import phoenix from "../../Assets/Projects/phoenix.png";
import daoEvents from "../../Assets/Projects/daoEvents.png";
import hallsBooking from "../../Assets/Projects/halls-booking.png";
import sheFly from "../../Assets/Projects/sheFly.jpg";
import bridge from "../../Assets/Projects/bridge.png";
import instaBlue from "../../Assets/Projects/instaBlue.png";
import gamingStore from "../../Assets/Projects/gaming-store.png";
import restaurant from "../../Assets/Projects/restaurant.png";
import chatApp from "../../Assets/Projects/chatApp.png";
import snake from "../../Assets/Projects/snake.jpg";

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
              imgPath={daoEvents}
              isBlog={false}
              title="PhoenixDAO Events Marketplace"
              description="Decentralized platform for the community to host events and buy tickets to events."
              link="https://events.phoenixdao.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={daoApp}
              isBlog={false}
              title="PhoenixDAO Application"
              description="Decentralized Application developed for Phoenix-DAO community."
              link="https://app.phoenixdao.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phoenix}
              isBlog={false}
              title="Phoenix Website"
              description="Developed using HTML, CSS and JQuery."
              link="https://phoenixdao.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bridge}
              isBlog={false}
              title="Phoenix Bridge dApp"
              description="Decentralized platform to transfer and claim cross-chain assets between BEP20 and ERC20 blockchains."
              link="https://bridge.phoenixdao.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hallsBooking}
              isBlog={false}
              title="Wedding Hall Booking Application"
              description="Fully Responsive web application developed on PEAN Stack. A platform to search and book wedding halls in your vicinity along with searching halls  by customized price ranges, location and much more."
              link="https://github.com/JafferAbbas-codes/tbevents-front-end "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamingStore}
              isBlog={false}
              title="Gaming Store Application"
              description="Web application developed on MERN Stack. An ecommerce platform for vendors to display and sell their products where customers can place orders on the products."
              link="https://github.com/JafferAbbas-codes/Gaming-Store---Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Bookstore Web Application"
              description="Web application developed on MERN Stack university course’s final project. It is an online book store with admin roles implemented."
              link="https://github.com/JafferAbbas-codes/Bookstore-Web_Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instaBlue}
              isBlog={false}
              title="InstaBlue Web Application"
              description="Web application developed on MERN Stack for university course’s final project. It is a social media web application."
              link="https://github.com/JafferAbbas-codes/InstaBlue-Web_Application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Restaurant Web Application"
              description="Web application developed on MERN Stack. A Restaurant management platform to place and track orders having seprate user, vendor and super admin modules."
              link="https://github.com/JafferAbbas-codes/Restaurant-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sheFly}
              isBlog={false}
              title="She-Fly Hybrid Mobile Application (FYP)"
              description="Developed on React Native and Nest JS. Women centric application that allows females to provide services by utilizing their soft skills."
              link="https://github.com/JafferAbbas-codes/SheFly-Application"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApp}
              isBlog={false}
              title="React Native Chat Application"
              description="Developed on React Native and Nest JS using Socket.io as Web Socket Server. Users can register to the application and chat with their connection."
              link="https://github.com/JafferAbbas-codes/React_Native_chatApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Javascript Snake and Apple Game"
              description="Snake Game built on javascript. Player controls a snake to eat apples appearing on the canvas to grow and score preventing the snake to eat itself."
              link="https://github.com/JafferAbbas-codes/Snake-Game---JavaScript"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
