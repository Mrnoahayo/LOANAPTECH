import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
     
      <div className="hero-section">
        <h1 className="hero-title">
        Welcome to LoanAptech
        </h1>
        <p className="hero-subtitle">
          Get instant personal loans up to $50,000 with low interest rates and flexible repayment options.
        </p>
        <Link to="/apply" className="hero-cta-btn">
          Apply Now, It's Free
        </Link>
      </div>

      <div className="features-flex">
     
        <div className="feature-card">
          <div className="">

          </div>
          <h3>Lightning Fast</h3>
          <p>Lightning Fast Approval<br />Get decision in under 10 minutes</p>
        </div>

        <div className="feature-card">
          <div className="">
          </div>
          <h3>No Paperwork</h3>
          <p>No Paperwork Required<br />100% digital & hassle-free process</p>
        </div>

        <div className="feature-card">
          <div className="">
          </div>
          <h3>Best Rates</h3>
          <p>Lowest Interest Rates<br/>Starting from just 8.99% p.a.</p>
        </div>
      </div>

      <div className="home-links">
        <p>
          Already applied?{" "}
          <Link to="/loan-status" className="home-link">
            Check Loan Status
          </Link>{" "}
          {" "}
          <Link to="/dashboard" className="home-link">
            Go to Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;