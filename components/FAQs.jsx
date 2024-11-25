// File: src/components/AboutUs.js
import React from "react";
import Heading from "@/components/Heading"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"
import Link from "next/link"

const FAQs = () => {
    const images = [
        "/faqs/sgc-1.png",
        "/faqs/sgc-2.png",
        "/faqs/sgc-3.png",
        "/faqs/sgc-4.png",
        "/faqs/sgc-5.png",
        "/faqs/sgc-6.png",
        "/faqs/sgc-7.png",
        "/faqs/sgc-8.png",
        "/faqs/sgc-9.png",
    ];

    // Custom Previous Button
    const PrevArrow = ({ onClick }) => (
        <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow hover:bg-[#0E493A] transition-all ease-in-out duration-200"
            onClick={onClick}
            style={{ zIndex: 1 }}
        >
            &#9664;
        </button>
    );

    // Custom Next Button
    const NextArrow = ({ onClick }) => (
        <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full shadow hover:bg-[#0E493A] transition-all ease-in-out duration-200"
            onClick={onClick}
            style={{ zIndex: 1 }}
        >
            &#9654;
        </button>
    );

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <span>
        <Heading text="Frequently Asked Questions" className="text-[#1a1a1a] mb-8"/>
        <div className="bg-white py-12 px-4 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between shadow-lg rounded-2xl relative">
            {/* Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-800 mb-1">Sava Gaza Campaign</h2>
                <p className="text-gray-600 mb-6 ">
                has chosen to collaborate with Shaib Abi Talib for more targeted and effective assistance.
                </p>
                <p className="text-gray-600 mb-6">
                This partnership allows us to reach individuals on a smaller scale, directly meeting their 
                immediate and unique needs, making it the most efficient approach in these circumstances.
                </p>
                <p className="text-gray-600 mb-6">
                All Questions related to Campaign are welcomed. While most frequently asked questions are
                 answered here, you can ask any other questions related to campaign through contacting us 
                 by clicking on button below.
                </p>
                <div className="flex flex-row justify-end">
                <Link
                    href=""
                    className="bg-white border-2 border-[#0E493A] text-[#0E493A] px-6 py-3 font-semibold rounded-full hover:bg-[#0E493A] hover:text-white transition-all ease-in-out duration-200"
                >
                    Contact Now
                </Link>
                </div>
            </div>

            {/* Carousel Section */}
            <div className="lg:w-[40%] relative">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="px-2">
                            <Image
                            width={1000}
                            height={1000}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        </span>
    );
};

export default FAQs;