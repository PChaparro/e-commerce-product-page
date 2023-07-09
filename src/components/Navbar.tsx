import { useState } from "react";
import { Container } from "./layout/Container";

const menuItems = ["Collections", "Men", "Women", "About", "Contact"];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuVisibility = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="h-24">
      <Container>
        <div className="flex items-center h-full justify-between md:border-b">
          {/* Left side */}
          <div className="flex items-center gap-6 md:gap-16 md:h-full">
            <img
              src="/icons/icon-menu.svg"
              className="md:hidden"
              alt="Open menu icon"
              width={18}
              onClick={toggleMenuVisibility}
            />
            <img src="/images/logo.svg" alt="Sneakers logo" width={145} />
            {/* Blackish background */}
            <div
              className={`fixed h-screen bg-black/75 top-0 left-0 w-full md:block md:h-full md:bg-transparent md:static ${
                isMenuOpen ? "block" : "hidden"
              }`}
              onClick={toggleMenuVisibility}
            >
              {/* White background */}
              <div className="w-3/4 bg-white h-full p-6 md:p-0">
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenuVisibility();
                  }}
                  className="md:hidden"
                  src="/icons/icon-close.svg"
                  alt="Close menu icon"
                  width={18}
                />
                <ul className="flex flex-col gap-6 mt-14 md:flex-row md:mt-0 md:h-full">
                  {menuItems.map((item, index) => (
                    <li
                      key={`menu-item-${index}`}
                      className="cursor-pointer font-black text-lg md:font-normal md:text-blue-dark-grayish md:text-[1rem] md:grid md:items-center md:border-b-2 md:border-b-transparent hover:border-b-orange-normal hover:text-black transition-colors"
                    >
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-6">
            <img src="/icons/icon-cart.svg" alt="Cart icon" width={24} />
            <img
              src="/images/image-avatar.png"
              className="border-2 border-transparent hover:border-orange-normal aspect-square rounded-full transition-colors md:w-12"
              alt="User avatar"
              width={36}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
