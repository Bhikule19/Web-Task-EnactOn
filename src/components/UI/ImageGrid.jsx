import CC1 from "../../assets/images/CC1.jpeg";
import CC2 from "../../assets/images/cc2.png";
import CC3 from "../../assets/images/cc3.jpeg";
import CC4 from "../../assets/images/cc4.jpeg";

const ImageGrid = () => {
  return (
    <div className="h-screen lg:h-[500px] mt-20  relative">
      <div className="grid lg:grid-cols-2">
        <div className="grid-item h-[250px]">
          <img src={CC1} className="w-full h-full object-cover" />
        </div>
        <div className="grid-item h-[250px]">
          <img src={CC2} className="w-full h-full object-cover" />
        </div>
        <div className="grid-item h-[250px]">
          <img src={CC3} className="w-full h-full object-cover" />
        </div>
        <div className="grid-item h-[250px]">
          <img src={CC4} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
