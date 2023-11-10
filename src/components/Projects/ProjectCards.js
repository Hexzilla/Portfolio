import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ title, description, logo, repository, link }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={logo} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {!!repository && (
          <Button variant="primary" href={repository} target="_blank">
            <BsGithub /> <span style={{ paddingLeft: 4 }}>GitHub</span>
          </Button>  
        )}
        {"\n"}
        {"\n"}

        {!!link && (
          <Button
            variant="primary"
            href={link}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> <span style={{ paddingLeft: 4 }}>Visit</span>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
