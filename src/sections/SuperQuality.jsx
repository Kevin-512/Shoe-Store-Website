import { FaArrowRight } from "react-icons/fa";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col gap-5 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Our Most <br />
          <span className="text-forest-green">Popular</span> Products
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Find the best quality sneakers and diversify your wardrobe, ready for
          any weather
        </p>
        <p className="mt-4 lg:max-w-lg info-text">
          Our excellect customer services will ensure your satisfied with our
          products
        </p>
        <div className="mt-11">
          <Button label={"Shop Now"} icon={<FaArrowRight />} />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={bigShoe1} alt="bigShoe1" className="bg-card bg-red-orange rounded-2xl object-contain h-[522px] w-[570px]" />
      </div>
    </section>
  );
};

export default SuperQuality;
