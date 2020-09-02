import React from "react";
import { Timeline, Events, ImageEvent } from "@merc/react-timeline";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import aispy1 from "../../assets/img/projects/aispy1.png";
import aispy2 from "../../assets/img/projects/aispy2.png";
import aispy3 from "../../assets/img/projects/aispy3.png";
import aispy4 from "../../assets/img/projects/aispy4.png";
import aispy from "../../assets/img/projects/aispysc.png";

import wesearch1 from "../../assets/img/projects/wesearch1.png";
import wesearch2 from "../../assets/img/projects/wesearch2.png";
import wesearch3 from "../../assets/img/projects/wesearch3.png";
import wesearch4 from "../../assets/img/projects/wesearch4.png";
import wesearch from "../../assets/img/projects/wesearchsc.png";

import portfolio from "../../assets/img/projects/website.png";

import smartprimer from "../../assets/img/projects/smartprimer.jpg";

import greenhrm from "../../assets/img/projects/greenhrm.png";

import snackchat from "../../assets/img/projects/snackchatsc.png";
import snackchat1 from "../../assets/img/projects/snackchat1.png";
import snackchat2 from "../../assets/img/projects/snackchat2.png";
import snackchat3 from "../../assets/img/projects/snackchat3.png";

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1
        style={{ color: "white" }}
        className="pt-3 text-center font-details-b pb-3"
      >
        Projects
      </h1>
      <Timeline id="timeline">
        <Events>
          {/* Project: AISpy */}
          <ImageEvent
            className="event"
            date="09/01/2020"
            className="text-center"
            text="AISpy"
            src={aispy}
            alt="AISpy: Families in cars"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that detects
                        objects in pictures and plays "I Spy" with user with
                        various clues. Designed and built to foster family
                        interaction and interactive learning for children.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Firebase Visual Recognition</li>
                          <li>ML color classifying</li>
                          <li>ConceptNet knowledge base scraper</li>
                          <li>Google voice recognition</li>
                          <li>NLP ChatBot</li>
                        </ul>
                        <hr />
                        <strong>Screenshots:</strong>
                        <Carousel controls={true} indicators interval={700}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={aispy1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={aispy2}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={aispy3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={aispy4}
                              alt="Fourth slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div id="link-button" className="m-2 text-center">
                          <a
                            href="https://github.com/StanfordHCI/family-centered/tree/image-processing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="dark" title="Check out the code">
                              <i className="fab fa-github-square"></i> GitHub
                            </Button>
                          </a>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: WeSearch! */}
          <ImageEvent
            className="event"
            date="08/15/2020"
            className="text-center"
            text="WeSearch!"
            src={wesearch}
            alt="WeSearch!: Search Engine for Kids"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      style={{ background: "#c33764" }}
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A search engine that
                        extracts a basic definition and image from Wikipedia. A
                        project I thought of and built for fun during quarantine
                        to learn Kotlin and Android dev.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Two sentence simple definitions for everything
                          </li>
                          <li>Wikipedia data scraper</li>
                          <li>Mobile-friendly image display</li>
                        </ul>
                        <hr />
                        <strong>Screenshots:</strong>
                        <Carousel controls={true} indicators interval={700}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={wesearch1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={wesearch2}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={wesearch3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={wesearch4}
                              alt="Fourth slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div
                          id="link-button"
                          className="m-2 text-center link-button"
                        >
                          <a
                            href="https://github.com/McElectric29/WeSearch"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="dark" title="Check out the code">
                              <i className="fab fa-github-square"></i> GitHub
                            </Button>
                          </a>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Portfolio Website */}
          <ImageEvent
            className="event"
            date="08/10/2020"
            className="text-center"
            text="Portfolio Website"
            src={portfolio}
            alt="My very own portfolio website"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A portfolio website
                        designed and built by me, entirely using React.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Bootstrap</li>
                          <li>Gradient color design</li>
                          <li>Interactive motion</li>
                        </ul>
                        <hr />
                        <div id="link-button" className="m-2 text-center">
                          <a
                            href="https://github.com/StanfordHCI/family-centered/tree/image-processing"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="dark" title="Check out the code">
                              <i className="fab fa-github-square"></i> GitHub
                            </Button>
                          </a>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Smart Primer */}
          <ImageEvent
            className="event"
            date="06/30/2020"
            className="text-center"
            text="Smart Primer"
            src={smartprimer}
            alt="SmartPrimer: Narrative-based Learning"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="1"
                      style={{ background: "#c33764" }}
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Tablet-based intelligent
                        tutoring system for kids that leverages compelling
                        narratives, intelligent tutoring chatbots, real-world
                        activities, and a child’s physical and educational
                        context.
                        <hr />
                        <strong>Role:</strong>
                        <ul className="list-styles pt-1">
                          <li>Research Intern</li>
                          <li>Explored narrative-based learning and tech</li>
                          <li>Conducted user research</li>
                          <li>
                            Performed multiple wizard-of-oz and ab testing
                          </li>
                        </ul>
                        <hr />
                        <div
                          id="link-button"
                          className="m-2 text-center link-button"
                        >
                          <a
                            href="https://hci.stanford.edu/research/smartprimer/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="primary"
                              title="Check out the project"
                            >
                              <i class="fas fa-external-link-square-alt"></i>{" "}
                              Learn More
                            </Button>
                          </a>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: Green HRM */}
          <ImageEvent
            className="event"
            date="08/25/2019"
            className="text-center"
            text="GreenHRM"
            src={greenhrm}
            alt="GreenHRM: Empower your employees and inspire ingenuity"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> A complete system to
                        automate all human resources' procedures enabling
                        managers and HRs to spend more time engaging their
                        workforce.
                        <hr />
                        <strong>Role:</strong>
                        <ul className="list-styles pt-1">
                          <li>Designed and built most of the Front-End </li>
                          <li>Built data visualization from back-end data</li>
                          <li>
                            Worked on building seamless functionalities with
                            back-end server
                          </li>
                          <li>
                            Built features, like Log-in, update info,
                            scheduling, all fully integrated with server
                          </li>
                          <li>
                            User personalized settings for the platform, such as
                            language and preference settings{" "}
                          </li>
                        </ul>
                        <hr />
                        <strong>Screenshots:</strong>
                        <Carousel controls={true} indicators interval={700}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={greenhrm}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={greenhrm}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={greenhrm}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={greenhrm}
                              alt="Fourth slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <div
                          id="link-button"
                          className="m-2 text-center link-button"
                        >
                          <a
                            href="http://www.itzone.sg/green-hrm.html"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              variant="primary"
                              title="Check out the project"
                            >
                              <i class="fas fa-external-link-square-alt"></i>{" "}
                              Learn More
                            </Button>
                          </a>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>

          {/* Project: SnackChat */}
          <ImageEvent
            className="event"
            date="01/15/2019"
            className="text-center"
            text="SnackChat"
            src={snackchat}
            alt="SnackChat: Diet & nutrition bot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      style={{ background: "#c33764" }}
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> App that allows user to
                        take photos of their food and evaluate the nutritional
                        values of the food they are going to eat. The app also
                        implements an AI assistant to chat with users about
                        their diets and calorie intakes through a user-friendly
                        interface of conversation. I built this app for a
                        hackathon in the span of 2 days.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Trained data on common food items</li>
                          <li>ML food classifying</li>
                          <li>Calorie and nutrition database</li>
                          <li>IBM Watson chatbot</li>
                          <li>Personalized experience</li>
                        </ul>
                        <hr />
                        <strong>Screenshots:</strong>
                        <Carousel controls={true} indicators interval={700}>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={snackchat1}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={snackchat2}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100 spy-img"
                              src={snackchat3}
                              alt="Third slide"
                            />
                          </Carousel.Item>
                        </Carousel>
                        <Container id="buttons">
                          <div id="link-button" className="m-2 text-center">
                            <a
                              href="https://github.com/McElectric29/snackchat"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button variant="dark" title="Check out the code">
                                <i className="fab fa-github-square"></i> GitHub
                              </Button>
                            </a>
                          </div>
                          <div
                            id="link-button"
                            className="m-2 text-center link-button"
                          >
                            <a
                              href="https://devpost.com/software/snackchat"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                variant="primary"
                                title="Check out the project"
                              >
                                <i class="fas fa-external-link-square-alt"></i>{" "}
                                Learn More
                              </Button>
                            </a>
                          </div>
                        </Container>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
