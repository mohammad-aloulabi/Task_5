import React from "react";
import "./PackagesStyle.css";
import imglog from "./../assets/logo.png";
import HeroImg1 from "./../assets/packages.png";
import NavScrollExample from "../Component/NavBar/NavBar";
import Hero from "../Component/Hero/Hero";
import Cards from "../Component/Cards/Cards";
import imgCity1 from "./../assets/city-1.png";
import imgCity2 from "./../assets/city-2.png";
import imgCity3 from "./../assets/city-3.png";
import imgCity4 from "./../assets/city-4.png";
import imgCity5 from "./../assets/city-5.png";
import imgCity6 from "./../assets/city-6.png";
import victor from "./../assets/Vector.svg";
import Footer from "../Component/Footer/Footer";

const Packages = () => {
  return (
    <div>
      <NavScrollExample
        logo={imglog}
        title={[
          { ele: "Home", path: "/" },
          { ele: "About", path: "/About" },
          { ele: "Services" },
          { ele: "Upcomming Packages", path: "/Upcomming Packages" },
          
        ]}
        btn={"Get in Touch"}
      />
      <Hero
        image={HeroImg1}
        title={<h1 className="Abouth1  m-auto  ">{"Travel With Us"}</h1>}
      />

      <Cards
        Cart2={[
          {
            imag: imgCity1,
            date: "27, September 2023",
            People: "30+ People",
            country: "Maldives",
            desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            star: { victor },
            price: "3000 $",
            rating: "5.0",
          },
          {
            imag: imgCity2,
            date: "13, October 2023",
            People: "120+ People",
            country: "Switzerland",
            desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            star: { victor },
            price: "1290 $",
            rating: "4.9",
          },
          {
            imag: imgCity3,
            date: "2, November 2022",
            People: "139+ People",
            country: "Berlin",
            desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            star: { victor },
            price: "2790 $",
            rating: "5.0",
          },
          {
            imag: imgCity4,
            date: "14, December 2022",
            People: "50+ People",
            country: "Torronto",
            desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            star: { victor },
            price: "1110 $",
            rating: "4.0",
          },
          {
            imag: imgCity5,
            date: "20, September 2022",
            People: "80+ People",
            country: "Baku",
            desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            star: { victor },
            price: "1220 $",
            rating: "4.5",
          },
          {
            imag: imgCity6,
            date: "27, August 2022",
            People: "100+ People",
            country: "Chinese",
            desc: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
            star: { victor },
            price: "2500 $",
            rating: "5.0",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Packages;
