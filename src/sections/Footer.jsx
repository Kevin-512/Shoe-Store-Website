import { GiRunningShoe } from "react-icons/gi";
import { socialMedia, footerLinks } from "../constants";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <div className="flex flex-row gap-2 items-center">
              <GiRunningShoe className="text-4xl text-lime-600" />
              <h2 className="font-montserrat text-4xl font-extrabold text-green-700">
                SneakerZ
              </h2>
            </div>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Explore the collection and find the shoe perfect for you. Collect
            points and rewards to earn vouchers in the future.
          </p>
          <div className="flex items-center gap-5 my-8">
            {socialMedia.map((object, index) => {
              const IconComponent = object.icon;
              return (
                <div
                  key={index}
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                >
                  <IconComponent className="text-forest-green text-2xl" />
                </div>
              );
            })}
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    >
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <FaCopyright className="text-3xl" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
