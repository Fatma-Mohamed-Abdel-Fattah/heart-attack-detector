import NavBar from "../NavBar/NavBar";
import "./about.css";
export default function About() {
  return (
    <>
      <NavBar></NavBar>
      <header className="min-vh-100 d-flex align-items-center">
        <div className="opacity">
          <div className="caption ms-5 p-5 text-white">
            <h1 className="text-center">ABOUT</h1>
            <h3 className="text-info">
              Remote Health Monitoring System for Early Detection and Diagnosis
              of Heart Diseases
            </h3>
          </div>
        </div>
        <div className="up-down"></div>
        <div className="fixed-up">
          <i className="fa-solid fa-angle-up bg-info p-2"></i>
        </div>
      </header>
      <section id="about" className="py-5">
        <div className="title text-center">
          <h2 className="fw-bolder">About</h2>
          <h3 className="translate-middle fw-bolder">About</h3>
        </div>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-4">
              <div className="about-img">
                <img src="images/abo2.jpg" alt="" className="w-100" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="about-info">
                <h2>Welcome to</h2>
                <h3 className="text-info">
                  Remote Health Monitoring System for Early Detection and
                  Diagnosis of Heart Diseases
                </h3>
                <p className="my-3">
                  Wearable devices such as smartwatches could be used to detect
                  a higher risk of developing heart failure and irregular heart
                  rhythms in later life,The Magdi Yacoub Global Heart Foundation
                  works to dramatically change the health outcomes of the most
                  vulnerable, particularly children, by improving comprehensive,
                  advanced cardiac care available to all people in need, free of
                  charge We thought about health system to connect heart
                  patients to their hospitals for periodic follow-ups of heart
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-detail container my-5">
          <p className="shadow-lg p-4">
            A heart patient needs periodic follow-ups and going to the hospital
            to perform the necessary medical examinations to check on his heart.
            However, with the spread of infectious diseases that may affect the
            ability of a heart patient to go to hospitals, as happened in Corona
            disease, technological development must be exploited in following up
            with a heart patient remotely. Therefore, this project aims to
            reduce the time and effort required for the patient to follow up on
            the periodic health of the heart and health in general, with the
            presence of communication between the medical staff of the hospital
            and the patient in the event of a heart disorder or any health
            problems to conduct the necessary first aid. Moreover, this project
            enables healthy people to detect heart disease early and communicate
            with the medical staff remotely to provide them with appropriate
            treatment for their condition Our system is a complete electronic
            health system to connect heart patients to their hospitals for
            periodic follow-up of heart health. This system consists of a
            patient mobile app, an AI heart attack detector, and a website for
            the hospital. The widespread use of smartwatches as well as
            smartphones among most people, and thus the demand for our system
            will be increasing for ease of obtaining it .
          </p>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <div className="box">
            <h4>About Us</h4>
            <p>
              A heart patient needs periodic follow-ups and going to the
              hospital to perform the necessary medical examinations to check on
              his heart. However, with the spread of infectious diseases that
              may affect the ability of a heart patient to go to hospitals, .
            </p>
            <p>
              patient to follow up on the periodic health of the heart and
              health in general
            </p>
          </div>
          <div className="box">
            <h4>Why we are special?</h4>
            <ul>
              <li>Detecting early heart diseases.</li>
              <li>Android App.</li>
              <li>Web App.</li>
              <li>decreasing of suffer from disease</li>

              <li>Using smart watch.</li>
            </ul>
          </div>
          <div className="box">
            <h4>Opening Hours</h4>
            <ul>
              <li>Monday10AM - 9PM</li>
              <li>Tuesday 10AM - 9PM</li>
              <li>Wednesday 10AM - 9PM</li>
              <li>Thursday 10AM - 10PM</li>
              <li>Friday 10AM - 10PM</li>
              <li>Weekends 10AM - 11PM</li>
            </ul>
          </div>
          <div className="box">
            <h4>Contact Details</h4>
            <ul>
              <li>Abo Elreesh , Aswan, Egypt</li>
              <li>097 4661406</li>
              <li>
                <a href="#">eng@aswu.edu.eg</a>
              </li>
            </ul>
          </div>
          <div className="clr"></div>
        </div>
      </section>
      <section className="footer p-5 bg-dark">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="footer-content">
            <p className="text-muted texr-center mx-auto py-4">
              Copyright © 2023
              <span className="text-info">
                Remote Health Monitoring System for Early Detection and
                Diagnosis of Heart Diseases.
              </span>
              All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
