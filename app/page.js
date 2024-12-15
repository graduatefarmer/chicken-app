import Nav from "./components/Nav";
import Banner from "./components/Banner";
import SearchBox from "./components/SearchBox";
import Catagories from "./components/Catagories";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-[#FCECD6]">
      <Nav />
      <SearchBox />
      <Banner />
      <Catagories />
      <Products />
      <WhyUs />
      <Footer />
      <a
        href="https://wa.me/918720966242?text=Hi%2C%20I'm%20interested%20to%20connect"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 text-nowrap right-5 px-3 lg:px-5 py-1 lg:py-2 flex text-black border border-[#fff] bg-white hover:bg-[#A4243D] transition-all duration-500 ease-in-out rounded-full text-center  gap-x-2 items-center"
      >
        <span className="text-black hover:text-white">Connect</span>
        <img src="/assets/social/whatsapp.png" alt="wp" className="w-[30px]" />
      </a>
    </div>
  );
}
