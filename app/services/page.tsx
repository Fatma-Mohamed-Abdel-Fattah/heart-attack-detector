import NavBar from "../NavBar/NavBar";
import "./services.css";

export default function Services() {
  return (
    <>
      <NavBar></NavBar>
      <header className="min-vh-100 d-flex align-items-center">
        <div className="opacity">
          <div className="caption ms-5 p-5 text-white">
            <h1 className="text-center">OUR SERVICES</h1>
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
      <section className="service-container">
        <div id="services">
          <div className="title text-center">
            <h2 className="fw-bolder">Services</h2>
            <h3>Services</h3>
            <p>We have integrated system to keep the users health.</p>
          </div>
        </div>
        <div className="container text-center my-5">
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="services p-5 bg-white shadow-lg">
                <h3>AI Model</h3>
                <p>
                  By using machine learning and smart watch we can detect heart
                  diseases With the use of machine learning (ML), which is a
                  form of artificial intelligence (AI), software tools.
                </p>
                <i className="fa-solid fa-heart-pulse my-anchor"></i>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services p-5 bg-white shadow-lg">
                <i className="fa-solid fa-heart-pulse my-anchor"></i>
                <h3>Mobile App</h3>
                <p>
                  Mobile Applications have made the lives easiest, always there
                  for the rescue to save time, effort, and dependencies ,by
                  Using mobile App the user can take care of heart health
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="services p-5 bg-white shadow-lg">
                <h3>Web App</h3>
                <p>
                  A heart patient needs periodic follow-ups ,the users can
                  register in website and follow-ups his status the hospital can
                  know if the user have any heart diseases or not to follow the
                  user status
                </p>
                <i className="fa-solid fa-heart-pulse my-anchor"></i>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="about-detail container my-5 col-md-6">
              <p className="shadow-lg p-4">
                A lot of people suffer from cardiovascular diseases (CVDs),
                which even cost people their lives all around the world. Machine
                learning can be used to detect whether a person is suffering
                from cardiovascular disease by considering certain attributes
                such as chest pain, cholesterol level, age of the person and
                some other attributes. classNameification algorithms based on
                supervised learning which is a type of machine learning can make
                diagnoses of cardiovascular diseases easy. Algorithms.
              </p>
            </div>
            <div className="about-detail container my-5 col-md-6">
              <p className="shadow-lg p-4">
                collecting medical data from users via the smartwatch and
                sending it to the server and then using the data to train the
                artificial intelligence system and make it predict heart attacks
                based on that data.An artificial intelligence system capable of
                predicting the occurrence of heart problems or heart attacks
                with high accuracy and sending them to the hospital and the
                patient
              </p>
            </div>

            <div className="about-detail container my-5 col-md-12 shadow-lg p-4">
              <p>
                mobile application that shows the patient his health indicators
                to monitor his health without the need to go to the hospital.
              </p>
              <p>
                Website for the hospital contains the data of all patients and
                connects the hospital remotely with their patients
              </p>
              <p>
                A website for the hospital to follow up on patients and their
                vital signs, as well as alert them to emergency cases for speedy
                aid.
              </p>
              <p>
                A database for each patient that can be analysed and used in the
                early detection of other diseases in the future
              </p>
            </div>
          </div>
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
