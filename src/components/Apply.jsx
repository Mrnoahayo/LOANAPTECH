import React from 'react';
import "./Apply.css";

const Apply = () =>{
  return (

      <div className="contact-card">
        <h2>Apply for Loan</h2>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Loan Amount ($)</label>
              <input type="number" placeholder="50000" />
            </div>

            <div className="form-group">
              <label>Loan Tenure</label>
              <select defaultValue="">
                <option value="" disabled>
                  Select tenure
                </option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Purpose of Loan</label>
            <textarea rows="4" placeholder="e.g., Home renovation, Business expansion."></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>

  );
};

export default Apply;