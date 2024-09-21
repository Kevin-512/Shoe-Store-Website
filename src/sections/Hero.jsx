import { useState } from "react";

import Button from "../components/Button";
import CountUp from "react-countup";
import { statistics, shoes } from "../constants";
import { FaArrowRight } from "react-icons/fa";

import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="flex flex-col xl:flex-row w-full gap-10 justify-center max-container min-h-screen"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-forest-green">
          Trendy and Latest Releases
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative x-10 pr-10 z-10">
            Our Best Collection
          </span>
          <br />
          <span className="text-forest-green inline-block mt-3">SneakerZ</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 m:max-w-sm">
          Explore a collection of quality, aesthetic and modern footwear
        </p>
        <Button label={"Shop Now"} icon={<FaArrowRight />} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">
                <CountUp end={stat.value} duration={5} />+
              </p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-orange bg-card bg-cover">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] xl:-bottom-0 xl:pb-4">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
