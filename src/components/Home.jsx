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
          <h4>Lightning Fast Approval</h4>
          <p>Get decision in under 10 minutes</p>
          
          
        </div>

        <div className="feature-card">
          <div className="">
          </div>
          <h3>No Paperwork</h3>
         <h4>No Paperwork Required</h4>
          <p>100% digital & hassle-free process</p>
        
        </div>
        
        <div className="feature-card">
          <div className="">
           
          </div>
          <h3>Best Rates</h3>
          <h4>Lowest Interest Rates</h4>
          <p>Starting from just 8.99% p.a.</p>
         
          
        </div>
      </div>

      <div className="home-links">
        <p>
          Already Applied?{" "}
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