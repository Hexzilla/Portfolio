import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    title: 'Guest Chain',
    description: 'NFT-powered marketplace for beneficial travel bookings. Transforming travel bookings bringing benefits to everyone involved, through the application of Web3 technologies',
    logo: '/assets/projects/guestchain-1.jpg',
    repository: 'https://github.com/Hexzilla/guestchain-frontend',
    link: 'https://guestchain.world'
  },
  {
    title: 'Nefture',
    description: 'Real-time Web3 Security! Nefture protects DeFi users against scams and crypto thefts. Our RPC firewall detects fraudulent transactions and block them.',
    logo: '/assets/projects/nefture-1.jpg',
    repository: 'https://github.com/Hexzilla/nefture-frontend',
    link: 'https://nefture.com'
  },
  {
    title: 'PAYPERWIN',
    description: 'PAYPER WIN is an industry leading peer-to-peer sports betting exchange that provides an online arena for sports fans to wager against one another.',
    logo: '/assets/projects/payperwin-1.jpg',
    repository: 'https://github.com/Hexzilla/payperwin',
    link: 'https://payperwin.io'
  },
  {
    title: 'ProxyPanel',
    description: 'Proxypanel.io is the largest 4G mobile proxy provider in the US. We have over 150+ cities with AT&T and T-Mobile proxies.',
    logo: '/assets/projects/proxypanel-1.jpg',
    repository: 'https://github.com/Hexzilla/proxypanel',
    link: 'https://proxypanel.io'
  },
]

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
          {projects.map((project) => (
            <Col md={6} lg={4} className="project-card" key={project.title}>
              <ProjectCard {...project}></ProjectCard>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
