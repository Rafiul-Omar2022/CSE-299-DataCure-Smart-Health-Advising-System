import Testimonial from "./Testimonial";
import Footer from "../../Component/Footer";
import HomeHeader from "./HomeHeader";
import Navbar from "./Navbar";
import Feature from "./Feature";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <Footer />
    </>
  );
}
