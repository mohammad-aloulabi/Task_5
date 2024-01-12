import React from "react";
import NavScrollExample from "./../Component/NavBar/NavBar";
import imglog from "./../assets/logo.png";
import HeroImg1 from "./../assets/Rectangle.png";
import Hero from "../Component/Hero/Hero";
import Promotion from "../Component/Promotion/Promotion";
import Ellipse from "./../assets/Ellipse.png";
import bgstyle from "./../assets/bgstyle.png";
import circle from "./../assets/circle.png";
import women from "./../assets/women.png";
import "./About.css";
import video from "./../assets/video.svg";
import image from "./../assets/image.png";
import Footer from "../Component/Footer/Footer";
import Container from "../Component/container/Container";
import stamp from "./../assets/stamp.png";

const About = () => {
  return (
    <div>
      <NavScrollExample
        logo={imglog}
        title={[{ ele: "Home", path: "/" }, { ele: "About", path: "/About" }, { ele: "Services" }, { ele: "Upcomming Packages", path: "/Upcomming Packages" },]}
        btn={"Get in Touch"}
      />
      <Hero
        image={HeroImg1} title={<h1 className="Abouth1">{"About us"}</h1>}

      />
      <Promotion
        title="Promotion"
        desc="We Provide You Best Europe Sightseeing Tours"
        brief="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!"
        button="View Packages"
        firstPic={Ellipse}
        SecondPic={bgstyle}
        ThirdPic={circle}

      />
      <div
        className="  women d-flex justify-content-center align-items-center  position-relative " style={{ backgroundImage: `url(${women})` }}
      >
        <img className=" position-absolute " src={video} />
        <h1 className="womentitle">Wanderlust</h1>
      </div>

      {/* <Container
        image={stamp}
        title="Trend"
        desc="Our Popular Tour Plans"
        brief="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium."
      /> */}
      <Footer />
    </div>
  );
};

export default About;
