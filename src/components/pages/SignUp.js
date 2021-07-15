import React from "react";
import "../../App.css";
import { Button } from "../Button";
import "../Button.css";

export default function SignUp() {
  return (
    <>
      <h1 className="sign-up">CONTACT US</h1>
      <div className="section">
        <div className="section__container">
          <h1>Feel Free To Contact Us</h1>
          <div className="section__wrapper">
            <Button
              className="btns"
              buttonStyle="btn--primary--reversed"
              buttonSize="btn--large"
            >
              COUNT ME IN <i className="far fa-arrow-alt-circle-right" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
