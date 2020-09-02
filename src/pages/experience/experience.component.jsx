import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import ITZONE from "../../assets/img/experience/itzone.jpg";
import HCI from "../../assets/img/experience/hcifinal.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1
        style={{ color: "white" }}
        className="pt-3 text-center font-details-b pb-3"
      >
        Experience
      </h1>
      <Jumbotron className="jumbo-style">
        <Container id="xpContainer">
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header
                style={{ background: "#007dc5" }}
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={ITZONE}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body
                style={{
                  background: "linear-gradient(to right, #f5f7fa,   #c3cfe2)",
                }}
                className="d-flex justify-content-center flex-column"
              >
                <div>
                  <Card.Title className="text-center">ITZONE LLC</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Software Engeering Intern
                    </strong>
                    <br />
                    <br />
                    <strong>Description:</strong>{" "}
                    <strong>Developed & enhanced multiple features</strong> with
                    full customizability option across{" "}
                    <strong>HRM web platform</strong> used by{" "}
                    <strong>top companies</strong> in Mongolia. Designed and
                    built <strong>Front-End</strong> for key features and
                    integrated it with back-end servers. Debugged existing code
                    to solve problems and worked in deploying a full-scale
                    product.
                    <br />
                    <br />
                    <strong>Technology:</strong> Java, C++, React, NodeJS
                    <br />
                    <strong>Duration:</strong> Jul 2018 - Oct 2018 (ITZONE)
                    <br />
                    Jul 2019 - Oct 2019 (DigitalWorks)
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
          <Tilt options={{ max: 10 }}>
            <Card>
              <Card.Header
                style={{ background: "#f38251" }}
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={HCI}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body
                style={{
                  background: "linear-gradient(to right, #feada6, #f5efef)",
                }}
                className="d-flex justify-content-center flex-column"
              >
                <div>
                  <Card.Title className="text-center">
                    Stanford EduTech Project
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Research Software Developer
                    </strong>
                    <br />
                    <br />
                    <strong>Description:</strong>{" "}
                    <strong>Designed & built a complete phone app</strong> from
                    the ground up. Built and implemented advanced
                    functionalities, such as{" "}
                    <strong>
                      Firebase Visual Recognition, ML color classifier, and NLP
                      ChatBot with Voice Recognition
                    </strong>
                    . Ran user research with consumers and worked on iterative
                    design and development.
                    <br />
                    <br />
                    <br />
                    <strong>Technology:</strong> Java, Kotlin, Firebase
                    <br />
                    <strong>Duration:</strong> Jun 2020 - Sep 2020
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
