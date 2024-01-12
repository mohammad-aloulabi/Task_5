import './../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavScrollExample from './../Component/NavBar/NavBar';
import imglog from './../assets/logo.png'
import HeroImg from './../assets/header-bg.png';
import Hero from './../Component/Hero/Hero';
import Category from './../Component/Category/Category';
import serv1 from './../assets/service-1.png'
import serv2 from './../assets/service-2.png'
import serv3 from './../assets/service-3.png'
import serv4 from './../assets/service-4.png'
import CatCard from './../Component/CatCard/CatCard';
import Cities from './../Component/Cities/Cities';
import Footer from './../Component/Footer/Footer';
import ContTrend from './../Component/ContTrend/ContTrend';
import Trending from './../Component/Trending/Trending';
import n1 from './../assets/n1.png'
import n2 from './../assets/n2.png'
import n3 from './../assets/n3.png'
import flag1 from './../assets/flag1.png'
import flag2 from './../assets/flag2.png'
import flag3 from './../assets/flag3.png'




function Home() {

  return (
    <>
      <NavScrollExample
        logo={imglog}
        title={[
          { ele: "Home", path: "/" }, { ele: "About", path: "/About" }, { ele: "Services" }, { ele: "Upcomming Packages", path: "/Upcomming Packages" },]}

        btn={"Get in Touch"}
      />
      <Hero
        image={HeroImg}
        title={<h1 className='  w-50 mx-auto '> {"No matter where you’re going to,we’ll take you there "}</h1>}
      // title=" No matter where you’re going to,we’ll take you there "
      />
      <Category>
        <CatCard
          main={[{ imgLogo: serv1, titles: "Guided Tours", explaine: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },
          { imgLogo: serv2, titles: "Best Flights Options", explaine: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },
          { imgLogo: serv3, titles: "Religious Tours", explaine: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },
          { imgLogo: serv4, titles: "Medical Insurance", explaine: "sunt qui repellat saepe quo velit aperiam id aliquam placeat." },]}
        />
      </Category>
      <Cities />

      <ContTrend>
        <Trending
          cart={[{ imgcard: n1, secondpic: flag1, iconOne: "fa-solid fa-star", titleCount: "Switzerland", icontow: "fa-regular fa-calendar", icondescr: "8Days", iconthird: "fa-regular fa-user", icondescr2: "30 People going" },

          { imgcard: n2, secondpic: flag2, iconOne: "fa-solid fa-star", titleCount: "Amazon", icontow: "fa-regular fa-calendar", icondescr: "8Days", iconthird: "fa-regular fa-user", icondescr2: "60 People going" },


          { imgcard: n3, secondpic: flag3, iconOne: "fa-solid fa-star", titleCount: "Giza", icontow: "fa-regular fa-calendar", icondescr: "8Days", iconthird: "fa-regular fa-user", icondescr2: "120 People going" },]}


          pargraph={
            "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
          }
          btns={"Explore Now"}
        />
      </ContTrend>

      <Footer />
    </>
  );
}

export default Home;
