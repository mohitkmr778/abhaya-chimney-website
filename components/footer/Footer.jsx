import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#23589c] text-[#f5f7fa] pt-8 pb-4">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-6">
                    <img
                        src="/abhaya-logo.png"
                        alt="Gen1service Logo"
                        className="mx-auto mb-2 h-[48px] w-auto"
                    />
                    <p className="text-xl font-medium mb-4 text-[#ffe082]">
                        Gen1 Service - We will be loyal to our services
                    </p>
                    <div className="flex justify-center gap-4 mb-4">
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaFacebookF className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaTwitter className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaInstagram className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaLinkedinIn className="text-white text-xl" />
                        </a>
                        <a
                            href="#"
                            className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] rounded-full p-3 hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                        >
                            <FaYoutube className="text-white text-xl" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Our Cities
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li>Noida</li>
                            <li>Greater Noida</li>
                            <li>Indirapuram</li>
                            <li>Vaishali</li>
                            <li>Vasundhara</li>
                            <li>Sector 62</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Company
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    About us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Contact us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Privacy policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:underline text-[#ffe082]"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Our Services
                        </h3>
                        <ul className="mt-2 space-y-1">
                            <li>Air-Conditioner</li>
                            <li>CCTV Camera</li>
                            <li>LED LCD TV</li>
                            <li>Refrigerator</li>
                            <li>Washing-Machine</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#ffb300] font-semibold mb-2 border-b border-[#ffb300] inline-block">
                            Book Your Service Now
                        </h3>
                        <form className="flex flex-col gap-2 mt-2">
                            <input
                                type="text"
                                placeholder="Enter Name"
                                className="bg-[#0d2235] text-white px-3 py-2 rounded outline-none border border-[#2c4a6b]"
                            />
                            <input
                                type="text"
                                placeholder="Enter Number +91"
                                className="bg-[#0d2235] text-white px-3 py-2 rounded outline-none border border-[#2c4a6b]"
                            />
                            <input
                                type="text"
                                placeholder="Your Product"
                                className="bg-[#0d2235] text-white px-3 py-2 rounded outline-none border border-[#2c4a6b]"
                            />
                            <input
                                type="text"
                                placeholder="Enter address"
                                className="bg-[#0d2235] text-white px-3 py-2 rounded outline-none border border-[#2c4a6b]"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] text-white font-bold py-2 rounded hover:from-[#ff6f00] hover:to-[#ffb300] transition"
                            >
                                SUBMIT
                            </button>
                        </form>
                    </div>
                </div>
                <div className="border-t border-[#2c4a6b] pt-4 text-center text-sm">
                    <span>
                        Copyright © 2024{" "}
                        <a
                            href="#"
                            className="text-[#ffb300] font-bold underline"
                        >
                            Abhaya
                        </a>{" "}
                        All rights reserved
                    </span>
                </div>
            </div>
        </footer>
    );
}
