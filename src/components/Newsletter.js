import React from "react";
import "./Newsletter.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <section className="newsletter">
        <p className="newsletter-heading">
          Join the Future of Online Education newsletter
        </p>
        <p className="newsletter-text">You can unsubscribe at any time</p>
        <div className="input-areas">
          <form>
            <input
              className="newsletter-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;
