import { GiRunningShoe } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <div className="flex flex-row gap-2 items-center">
            <GiRunningShoe className="text-4xl text-lime-600" />
            <h2 className="font-montserrat text-4xl font-extrabold bg-gradient-to-r from-green-700 to-black bg-clip-text text-transparent">
              SneakerZ
            </h2>
          </div>
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 px-8 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-xl font-semibold text-forest-green"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <RxHamburgerMenu className="text-4xl" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
