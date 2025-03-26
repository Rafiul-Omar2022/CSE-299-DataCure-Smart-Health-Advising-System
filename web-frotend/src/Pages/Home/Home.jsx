import Testimonial from "./Testimonial";
import Footer from "../../Component/Footer";
import HomeHeader from "./HomeHeader";
import Navbar from "./Navbar";

import Login from "../Login/Login";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Navbar />
      <Testimonial />
      <Footer />
    </>
  );
}
