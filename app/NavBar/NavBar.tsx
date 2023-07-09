"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NabBar() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [userType, setUserType] = useState("");
  useEffect(() => {
    setUserType(localStorage.getItem("userType") ?? "");
    setId(localStorage.getItem("userId") ?? "");
  }, []);

  const handleClick = (e: any) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("userId");
    localStorage.removeItem("userType");
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Heart Tracker
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link home-nav" href="/">
                HOME
              </a>
            </li>
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
              <a onClick={handleClick} className="nav-link btn-nav">
                LOG OUT
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
                <a className="nav-link" id="userlink" href={`/user/${id}`}>
                  INFORMATION
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
