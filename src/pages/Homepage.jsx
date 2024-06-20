import Footer from "../components/UI/Footer";
import Hero from "../components/UI/Hero";
import ImageGrid from "../components/UI/ImageGrid";
import ProductList from "../components/UI/ProductList";
import QualitySection from "../components/UI/QualitySection";
import ShopCTA from "../components/UI/ShopCTA";
import Sidebar from "../components/UI/Sidebar";
import SubCTA from "../components/UI/SubCTA";

const Homepage = () => {
  return (
    <>
      {/* <SwiperComponent /> */}
      <Hero />
      <Sidebar />
      <div className="h-screen relative md:pl-[150px]  lg:pl-[150px] pb-60">
        <ProductList />
        <ShopCTA />
        <ImageGrid />
        <SubCTA />
        <QualitySection />
        <hr className="h-2 text-accent bg-accent border-none" />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
