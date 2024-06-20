import Leaves from "../../assets/images/leafs.png";
import ProductCarousel from "../ProductCarousel";

const ProductList = () => {
  return (
    <div className="slider2 -mt-20 pb-32 ">
      <div className=" w-[319px] h-[319px] -mt-28">
        <img
          src={Leaves}
          alt="element of leaves"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="-mt-20 px-8 lg:px-14">
        <h2 className="uppercase text-2xl lg:text-4xl text-accent lg:pb-2 font-poppins ">
          chef matt products
        </h2>
        <div className="border border-accent lg:w-[50%] mb-6"></div>
        <p className="lg:text-xl font-poppins">
          Shop Gourmet Chef Quality products from the Chef Matt brand.
          <br />
          Chef it yourself and Thank us later.
        </p>
      </div>
      <div className="product-carousal md:px-4 lg:px-16 mt-16">
        <ProductCarousel />
      </div>
    </div>
  );
};

export default ProductList;
