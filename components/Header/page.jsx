"use client";
import React, { useRef } from "react";
import Link from "next/link";
import "./Header.scss";

const Header = () => {
  const navBar = useRef();

  const tabChange = () => {
    if (navBar.current.style.height === "auto") {
      navBar.current.style.height = "60px";
    } else {
      navBar.current.style.height = "auto";
    }
  };

  return (
    <nav ref={navBar} className="rj-navbar all-between">
      <div className="rj-logo all-center">
        <i className="fa-brands fa-codiepie"></i>
        <span>RJ</span>
      </div>
      <div className="toggle-btn" onClick={tabChange}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="res-width">
        <ul className="rj-links all-center">
          <li>
            <Link className={`rj-item`} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={`rj-item`} href="/project">
              Project
            </Link>
          </li>
          <li>
            <Link className={`rj-item`} href="/articles">
              Articles
            </Link>
          </li>
          <li>
            <Link className={`rj-item`} href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className={`rj-item`} href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="res-nav">
        <Link className="rj-hire-btn" href="/hire">
          Hire Me
        </Link>
      </div>
    </nav>
  );
};

export default Header;
