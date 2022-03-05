import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCards from "../Projects/BlogsCards";
import Particle from "../Particle";

import blog1 from "../../Assets/blog1.png";
import blog2 from "../../Assets/blog2.png";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Publications</strong>
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={blog1}
              isBlog={true}
              title="Decentralized Applications (dApps) on Blockchain"
              //   description="Decentralized platform for the community to host events and buy tickets to events."
              link="https://medium.com/xord/decentralized-applications-dapps-on-blockchain-aa1e2ad00fe3"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCards
              imgPath={blog2}
              isBlog={true}
              title="Phoenix DAO Event Marketplace"
              description="Decentralized Application developed for Phoenix-DAO community."
              link="https://xord.solutions/work/phoenix-dao-event-marketplace/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
