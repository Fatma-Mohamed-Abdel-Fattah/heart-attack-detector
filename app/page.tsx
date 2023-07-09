"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [userType, setUserType] = useState("");
  useEffect(() => {
    setUserType(localStorage.getItem("userType") ?? "");
    setId(localStorage.getItem("userId") ?? "");
  }, []);

  return (
    <main>
      <header className="min-vh-100 d-flex align-items-center" id="fixed-up">
        <div className="opacity">
          <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed top-0 start-0 w-100 navbar-dark bg-dark opacity-75">
            <div className="container-fluid">
              <a className="navbar-brand text-info" href="#">
                <img className="logo" src="images/heart(2).png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      ABOUT
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/services">
                      SERVICES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/blogs">
                      BLOGS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/team">
                      TEAM
                    </a>
                  </li>
                  {!userType && (
                    <li className="nav-item">
                      <a className="nav-link" href="/admin/login">
                        ADMIN LOGIN
                      </a>
                    </li>
                  )}
                  {!userType && (
                    <li className="nav-item">
                      <a className="nav-link" id="userlink" href="/user/login">
                        USER LOGIN
                      </a>
                    </li>
                  )}
                  {userType === "admin" && (
                    <li className="nav-item">
                      <a className="nav-link" id="userlink" href="/dashboard">
                        DASHBOARD
                      </a>
                    </li>
                  )}
                  {userType === "user" && (
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="userlink"
                        href={`/user/${id}`}
                      >
                        INFORMATION
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </nav>
          <div className="caption ms-5 p-5 text-white">
            <h1>
              Remote Health Monitoring System for Early Detection and Diagnosis
              of Heart Diseases
            </h1>
            <h3 className="text-info">
              Detecting heart diseases using smart watch
            </h3>
          </div>
        </div>
        <div className="up-down"></div>
        <div className="fixed-up">
          <a href="#fixed-up">
            <i className="fa-solid fa-angle-up bg-info p-2"></i>
          </a>
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
      </section>
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
                  mobile Applications have made the lives easiest, always there
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
        </div>
      </section>
      <section id="blogs" className="pt-5">
        <div className="title text-center">
          <h2 className="fw-bolder">Blogs</h2>
          <h3 className="translate-middle fw-bolder">Blogs</h3>
          <p>
            There are many blogs that talk about diseases that we can can work
            on it
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div className="card text-start">
                <img
                  src="images/engina.jpg"
                  className="card-img-top p-2 rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Angina</h5>

                  <p className="card-text text-muted">
                    Angina is chest pain that comes and goes. There are several
                    types of angina.Stable angina (angina pectoris) is the most
                    common type, and it’s caused by coronary artery disease.Rest
                    and medication can ease ...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card text-start">
                <img
                  src="images/Arrhythmia.jpeg"
                  className="card-img-top p-2 rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Arrhythmia</h5>

                  <p className="card-text text-muted">
                    An arrhythmia, or irregular heartbeat, is a problem with the
                    rate or rhythm of your heartbeat.Your heart may beat too
                    quickly, too slowly, or with an irregular rhythm.It is
                    normal for your heart rate to speed up during physical
                    activity...
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card text-start">
                <img
                  src="images/cardioshock.jpg"
                  className="card-img-top p-2 rounded-4"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Cardio shock</h5>

                  <p className="card-text text-muted">
                    Cardiogenic shock happens when your heart cannot pump enough
                    blood and oxygen to the brain and other vital organs. This
                    is a life-threatening emergency. It is treatable if
                    diagnosed right away, so it’s important to know... .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="py-5">
        <div className="title text-center py-5">
          <h2 className="fw-bolder">Team</h2>
          <h3 className="translate-middle fw-bolder">Team</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-rem">
                <img
                  src="images/ahmed.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3>Ahmed Shawky</h3>
                  <p>Data analysis.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-rem">
                <img
                  src="images/avatar-05.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3>Hesham Omer</h3>
                  <p>Mobile App Development</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-rem">
                <img
                  src="images/img_avatar2.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3>Fatma Mohamed</h3>
                  <p>Web developer</p>
                </div>
              </div>
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
    </main>
  );
}
