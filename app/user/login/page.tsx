"use client";
import "./login.css";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

class LoginDto {
  email: string = "";
  password: string = "";
}

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().min(6, "Password is too short").required("Required"),
});

export default function Login() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  return (
    <Formik
      initialValues={new LoginDto()}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        var response = await fetch(
          "https://heart-attack-detector.onrender.com/login",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );

        if (response.status !== 201) {
          setMessage("Wrong Credentials");
          setSubmitting(false);
        }
        var result = await response.json();
        localStorage.setItem("token", result.token);
        localStorage.setItem("name", result.name);
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("userType", "user");
        router.push(`/user/${result.userId}`, {
          pathname: "/user/[userId]",
          query: { userId: result.userId },
        });
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
        <form className="mb-5" onSubmit={handleSubmit}>
          <span className="text-danger">{message}</span>
          <h3 className="mb-3">Login</h3>
          <div className="control-container mb-3">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className="form-control"
              id="userInp"
              placeholder="Username"
            />
            <label htmlFor="userInp" className="text-danger">
              {errors.email && touched.email && errors.email}
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
          <button
            disabled={isSubmitting}
            id="sub-btn"
            className="btn btn-outline-primary w-100 mb-3"
          >
            Login
          </button>

          <a
            href="/user/register"
            className="badge-secondary text-white py-1 bg-secondary text-decoration-none"
          >
            Want to create New Account ?
          </a>
        </form>
      )}
    </Formik>
  );
}

function validateMail(email: string): string {
  if (!email) return "Required";

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
    return "Invalid email";

  return "";
}

function validatePassword(password: string): string {
  if (!password) return "Required";

  if (password.length < 6) return "Password is too short";
  if (password.length > 30) return "Password is too long";

  return "";
}
