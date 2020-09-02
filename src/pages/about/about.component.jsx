import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
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
                build 5 My name is <strong>&nbsp;John Altankhuyag</strong>
                <br />A passionate student majoring in Computer Science at
                Stanford University. I love learning about new topics and skill
                sets in tech and applying them to software across all platforms
                and consumers.
                <br />
                <br />
                I enjoy tackling challenging problems and figuring out creative
                and innovative ways to approach it with technology and design.
                My current topics of interest range from data structures and
                optimization to Artificial Intelligence and Machine Learning.
                <br />
                <br />
                As a developer, I excel at learning and adapting to new and
                trending stacks. My current expertise include applying
                interactive and motion web design through HMTL, CSS, and React;
                building back-end with NodeJS and Python; iOS and Android dev
                through React Native, Swift, and Java/Kotlin.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a
                      href="https://drive.google.com/file/d/1MOzv1uAOadz1H8F8apv50F9RHTeTZHiu/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
