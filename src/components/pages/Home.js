import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import "../Section.css";
import Newsletter from "components/Newsletter";
// import Cards from "../Cards";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="section">
        <div className="section__container">
          <h1>OUR VISION</h1>
          <div className="section__wrapper">
            <p>
              We believe that educational opportunities should be available
              inclusively to all learners and educators. Decentraledu philosophy
              is that everyone in the world should have access to high-quality
              online educational experiences and resources, and we work to
              eliminate barriers to this goal. Such barriers might include high
              monetary costs, outdated or obsolete materials, and legal
              mechanisms that prevent collaboration among students, educators
              and employers.
            </p>
            <br></br>
            <p>
              As Open Education Consortium says: “sharing is probably the most
              basic characteristic of education: education is sharing knowledge,
              insights and information with others, upon which new knowledge,
              skills, ideas and understanding can be built”. And we added
              tokenized engagement as a crucial part on top of it to ensure the
              quality of information exchange.
            </p>
          </div>
        </div>
      </div>
      <div className="section__reversed">
        <div className="section__container__reversed">
          <h1>OUR MISSION</h1>
          <div className="section__wrapper__reversed">
            <p>
              Creating a decentralized online education ecosystem involves
              tokenized engagement and provenance without restrictions imposed
              by copyright laws, access barriers or exclusive legacy system that
              lack of transparency, interoperability and limit the exchange of
              information.
            </p>
          </div>
        </div>
      </div>
      <Newsletter />
      {/* <Cards /> */}
    </>
  );
}

export default Home;
