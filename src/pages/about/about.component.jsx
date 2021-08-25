import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Resume from "../../assets/documents/johnaltankhuyag.pdf";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1
          style={{ color: "white" }}
          className="pt-3 text-center font-details pb-3"
        >
          About me
        </h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! My name is <strong>&nbsp;John Altankhuyag.</strong>
                <br /> You have found yourself at the portfolio website of a
                passionate coder and engineer! I am currently studying Computer Science,
                with concentrated courses in Systems and HCI, at Stanford University.
                <br />
                <br />
                My most recent job experience was Software Engineering Intern at Tiktok.
                My plan is to graduate June 2022, when I will transition to full-time employment
                <br />
                <br />
                My expertise covers software engineering in: 
                <br />
                - Back-end (Infrastructure, Networking, Database)
                <br />
                - Front-end (React, Javascript, Figma)
                <br />
                - Mobile (React Native, Flutter).  
                <br />
                <br />
                I am always looking to work on exciting products and projects with
                others to learn and to improve as a developer and an engineer. If you have
                a position or idea that could use my experience, please reach out to me!
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/McElectric29"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/john-altankhuyag-9a73a6193"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
