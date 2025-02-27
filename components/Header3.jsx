import { useState } from "react";
import Link from "next/link";
import ListItem from "@/components/ListItem";
import Image from "next/image";

export default function Header() {
  const phoneNumber = "+923325000418";
  const message = "AsslamoAlikum! I am contacting you through SGC Site. I want to collaborate in Gaza Relief Activities. Please send the details and the account number.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isIconClicked2, setIsIconClicked2] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsIconClicked(!isIconClicked);
    setIsDropdownOpen2(false);
    setIsIconClicked2(false);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsIconClicked2(!isIconClicked2);
    setIsDropdownOpen(false);
    setIsIconClicked(false);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  const items1 = ["Option 1", "Option 2", "Option 3"];
  const items2 = ["Latest", "Modern", "Contemporary"];
  const list1 = items1.map((item, index, url) => {
    return <ListItem key={index} itemName={item} url={url} />;
  });
  const list2 = items2.map((item, index, url) => {
    return <ListItem key={index} itemName={item} url={url} />;
  });

  return (
    <header
      className={`z-50 bg-[#111] text-white flex flex-col px-6 py-6 shadow-2xl transition-all duration-900 ease-in-out ${
        isDropdownOpen || isDropdownOpen2 ? "max-h-[1000px]" : "max-h-[90px]"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <Link href={"/"}>
            <div className="flex items-center space-x-4">
              <Image
                src="/save-gaza-logo.png"
                alt="Save Gaza Campaign Logo"
                className="h-12 w-12"
                height={48}
                width={48}
              />
              <span className="text-1xl md:text-2xl font-bold hover:text-gray-500">
              SGC Relief Activities
              </span>
            </div>
          </Link>
        </div>

        <nav className="flex items-center space-x-8">
          {/* Navigation Links */}
          <span className="hidden md:flex items-center space-x-8">

            <Link href="/about" >
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                About 
              </span>{" "}
            </Link>

            <Link
              href="https://savegazacampaign.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                SGC Main Site
              </span>{" "}
            </Link>

            <Link href="https://sgc-blogs-3.vercel.app/category/6762389a587d34c99391e320"
            target="_blank"
            rel="noopener noreferrer">
              <span className="hover:text-green-500 cursor-pointer transition-colors duration-300">
                Gaza Activities
              </span>
            </Link>
 
          </span>

          {/* Login Button */}
          <Link href={whatsappLink} legacyBehavior target="_blank" rel="noopener noreferrer">
          <button className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
              Donate Now
          </button>
          </Link>
 
          <span
            className={`mr-2 cursor-pointer flex md:hidden ${
              isIconClicked2
                ? "text-green-500 -rotate-90"
                : "text-white rotate-0"
            } hover:text-green-500 transition-all duration-300`}
            onClick={toggleDropdown2}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="5" width="18" height="2" fill="currentColor" />
              <rect x="7" y="11" width="14" height="2" fill="currentColor" />
              <rect x="11" y="17" width="10" height="2" fill="currentColor" />
            </svg>
          </span>
        </nav>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Services</p>
          {list1}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isDropdownOpen2
            ? "max-h-70 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-4 bg-[#222] p-4 rounded-xl">
          <p className="text-xl mb-2">Check</p>
          {list2}
          <div
            onClick={handleToggle}
            className="flex items-center cursor-pointer"
          >
            <p className="text-xl mt-2 mb-2">Services</p>
            <svg
              className={`ml-2 transition-transform duration-300 ${
                isToggled ? "rotate-180" : "rotate-0"
              }`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {isToggled && list1}
        </div>
      </div>
    </header>
  );
}
