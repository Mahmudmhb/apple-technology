import React from "react";
import logo from "../../assets/549679bf60464fc19e9d1c02fa75eb1b.webp";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-white">
        <aside>
          <Link to="/">
            <img className="w-12 h-12 rounded-full" src={logo} alt="" />
          </Link>
          <p>
            Apple Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
