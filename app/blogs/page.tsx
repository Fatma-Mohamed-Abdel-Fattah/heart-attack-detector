import NavBar from "../NavBar/NavBar";

export default function Blogs() {
  return (
    <>
      <NavBar></NavBar>
      <header className="min-vh-100 d-flex align-items-center">
        <div className="opacity">
          <div className="caption ms-5 p-5 text-white">
            <h1 className="text-center">BLOGS</h1>
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
                    types of angina. Stable angina (angina pectoris) is the most
                    common type, and it’s caused by coronary artery disease.
                    Rest and medication can ease your angina and improve your
                    quality of life. Severe or unexpected angina signals a heart
                    attack and needs immediate medical care.
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
                    activity and to slow down while resting or sleeping It is
                    also normal to feel as if your heart skips a beat
                    occasionally
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
                    Cardiogenic shock, also known as cardiac shock, happens when
                    your heart cannot pump enough blood and oxygen to the brain
                    and other vital organs. This is a life-threatening
                    emergency. It is treatable if diagnosed right away, so it’s
                    important to know the warning signs.Without oxygen-rich
                    blood reaching the brain and other vital organs,
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-4 mt-5">
              <div className="card text-start">
                <div className="card-body">
                  <p className="card-text text-muted">
                    Angina is chest pain that comes and goes. There are several
                    types of angina. Stable angina (angina pectoris) is the most
                    common type, and it’s caused by coronary artery disease.
                    Rest and medication can ease your angina and improve your
                    quality of life. Severe or unexpected angina signals a heart
                    attack and needs immediate medical care.
                  </p>
                  <p className="card-text text-muted">
                    Angina is chest pain or discomfort that happens when your
                    heart isn’t receiving enough oxygen-rich blood. As a result,
                    your heart may beat faster and harder to gain more blood,
                    causing you noticeable pain. Angina isn’t a disease. It’s a
                    symptom and a warning sign of heart disease.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card text-start">
                <div className="card-body">
                  <p className="card-text text-muted">
                    But a frequent irregular rhythm may mean that your heart is
                    not pumping enough blood to your body. You may feel dizzy,
                    faint, or have other symptoms. Arrhythmias are treatable
                    with medicine or procedures to control the irregular
                    rhythms. If not treated, arrhythmias can damage the heart,
                    brain, or other organs. This can lead to life-threatening
                    stroke, heart failure, or cardiac arrest. During cardiac
                    arrest, the heart suddenly and unexpectedly stops beating,
                    causing death if it is not treated within minutes.If you
                    have been diagnosed with an arrhythmia, your doctor may talk
                    to you about healthy lifestyle changes you can make.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card text-start">
                <div className="card-body">
                  <p className="card-text text-muted">
                    your blood pressure drops, and your pulse slows. You may
                    have symptoms such as confusion, sweating, and rapid
                    breathing. You may also lose consciousness.Most often the
                    cause of cardiogenic shock is a serious heart attack. Other
                    health problems that may lead to cardiogenic shock include
                    heart failure, which happens when the heart can’t pump
                    enough blood to meet the body’s needs; chest injuries; and
                    blood clots in the lungs.Treatment focuses on getting blood
                    flowing properly and protecting organs from damage.Some
                    people may need a heart transplant or a permanently
                    implanted device to help keep blood flowing to the heart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
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
                <a href="#">eng@aswu.edu.eg</a>1
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
