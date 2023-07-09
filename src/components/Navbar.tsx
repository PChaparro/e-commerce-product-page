import { useState } from "react";
import { Container } from "./layout/Container";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenuVisibility = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="h-20 border-b">
      <Container>
        <div className="flex items-center h-full  justify-between">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <img
              src="/icons/icon-menu.svg"
              alt="Open menu icon"
              width={18}
              onClick={toggleMenuVisibility}
            />
            <img src="/images/logo.svg" alt="Sneakers logo" width={145} />
            {/* Blackish background */}
            <div
              className={`fixed h-screen bg-black/75 top-0 left-0  w-full ${
                isMenuOpen ? "block" : "hidden"
              }`}
              onClick={toggleMenuVisibility}
            >
              {/* White background */}
              <div className="w-3/4 bg-white h-full p-6">
                <img
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenuVisibility();
                  }}
                  src="/icons/icon-close.svg"
                  alt="Close menu icon"
                  width={18}
                />
                <ul className="flex flex-col gap-5 mt-14 [&>li]:font-black [&>li]:text-lg">
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-4">
            <img src="/icons/icon-cart.svg" alt="Cart icon" width={24} />
            <img
              src="/images/image-avatar.png"
              className="border-2 border-transparent hover:border-orange-normal aspect-square rounded-full transition-colors"
              alt="User avatar"
              width={32}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
