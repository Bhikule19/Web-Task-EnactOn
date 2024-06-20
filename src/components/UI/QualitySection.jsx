import StorageIcon from "../../assets/images/box.png";
import CallingIcon from "../../assets/images/sound-headset.png";
import QuaCheckTcon from "../../assets/images/good-quality.png";

const QualitySection = () => {
  return (
    <div className="w-full h-[100%] lg:h-[100px] my-10 px-8 lg:my-20 relative flex lg:justify-around ">
      <div className="flex flex-col lg:flex-row gap-12 justify-around">
        <div className="flex gap-8">
          <span className="text-accent w-10">
            <img src={StorageIcon} alt="storage box icon" />
          </span>
          <div className="about-info flex flex-col">
            <h4 className="text-2xl mb-3 text-accent">
              FREE SHIPPING WORLDWIDE
            </h4>
            <p className="text-[18px]">Guaranteed Delivery</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="w-10 text-accent">
            <img src={CallingIcon} alt="calling icon" />
          </span>
          <div className="about-info flex flex-col">
            <h4 className="text-2xl mb-3 text-accent">24/7 CUSTOMER SERVICE</h4>
            <p className="text-[18px]">Text Us 24/7 at 070-7782-9137</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="w-10 text-accent">
            <img src={QuaCheckTcon} alt="quality check icon" />
          </span>
          <div className="about-info flex flex-col">
            <h4 className="text-2xl mb-3 text-accent">QUALITY GUARANTEE!</h4>
            <p className="text-[18px]">Send Within 30 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
