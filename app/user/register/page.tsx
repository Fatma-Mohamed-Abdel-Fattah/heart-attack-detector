"use client";
import { UserRegisterDto } from "@/app/models/UserRegisterDto";
import "./register.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password is too short").required("Required"),
  name: Yup.string().required("Required"),
  age: Yup.number()
    .min(7, "Below minimum age")
    .max(100, "Above maximum age")
    .required("Required"),
  sex: Yup.string().required("Required"),
  height: Yup.number().required("Required"),
  weight: Yup.number().required("Required"),
});

export default function Register() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <Formik
      initialValues={new UserRegisterDto()}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        var response = await fetch(
          "https://heart-attack-detector.onrender.com/signup",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (response.status !== 201) {
          setMessage("Something went wrong");
          setSubmitting(false);
          return;
        }
        setSubmitting(false);
        router.push("/user/login");
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="pt-5 mb-5" onSubmit={handleSubmit}>
          <h3 className="mb-3">Register</h3>
          <span className="text-danger">{message}</span>
          <div className="control-container mb-3">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="form-control"
              id="emailInp"
              placeholder="email"
            />
            <label htmlFor="emailInp" className="text-danger">
              {touched.email && errors.email}
            </label>
          </div>
          <div className="control-container mb-3">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="form-control"
              id="passInp"
              placeholder="Password"
            />
            <label htmlFor="passInp" className="text-danger">
              {errors.password && touched.password && errors.password}
            </label>
          </div>
          <div className="control-container mb-3">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="form-control"
              id="nameInp"
              placeholder="Name"
            />
            <label htmlFor="nameInp" className="text-danger">
              {touched.name && errors.name}
            </label>
          </div>
          <div className="control-container mb-3">
            <input
              type="number"
              name="age"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="ageInp"
              placeholder="Age"
            />
            <label htmlFor="ageInp" className="text-danger">
              {touched.age && errors.age}
            </label>
          </div>
          <div className="control-container mb-3">
            <input
              type="number"
              name="height"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="heightInp"
              placeholder="Height"
            />
            <label htmlFor="heightInp" className="text-danger">
              {touched.height && errors.height}
            </label>
          </div>
          <div className="control-container mb-3">
            <input
              type="number"
              name="weight"
              onChange={handleChange}
              onBlur={handleBlur}
              className="form-control"
              id="weightInp"
              placeholder="Weight"
            />
            <label htmlFor="weightInp" className="text-danger">
              {touched.weight && errors.weight}
            </label>
          </div>
          <div className="control-container mb-3">
            <select
              name="sex"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sex}
              id="sexInp"
              className="form-select"
              aria-label="Default select example"
            >
              <option value="">Select sex</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </div>
          <div className="control-container form-check mb-3">
            <input
              name="geneticDiabetes"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.geneticDiabetes}
              id="geneticDiabetesInp"
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="geneticDiabetesInp">
              Genetic Diabetes
            </label>
          </div>
          <div className="control-container form-check mb-3">
            <input
              name="geneticHeartDiseases"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.geneticHeartDiseases}
              id="geneticHeartDiseasesInp"
              className="form-check-input"
              type="checkbox"
            />
            <label
              className="form-check-label"
              htmlFor="geneticHeartDiseasesInp"
            >
              Genetic Heart Diseases
            </label>
          </div>
          <div className="control-container form-check mb-3">
            <input
              name="smoker"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={values.smoker}
              id="smokerInp"
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label" htmlFor="smokerInp">
              Smoker
            </label>
          </div>
          <button
            disabled={isSubmitting}
            id="sub-btn"
            className="btn btn-outline-primary w-100 mb-3"
          >
            Register
          </button>

          <Link
            href="/user/login"
            className="badge-secondary text-white py-1 bg-secondary text-decoration-none"
          >
            Already have an account?
          </Link>
        </form>
      )}
    </Formik>
  );
}
