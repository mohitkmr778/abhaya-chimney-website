"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import PopularServices from "./PopularServices";
import AboutSection from "./AboutSection";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

const slides = [
    {
        image: "/slider/noida.jpg", // replace with your image
        title: "Old Noida",
        subtitle:
            "EXPERT APPLIANCE REPAIR IN NOIDA – AC, REFRIGERATOR, WASHING MACHINE & MORE",
    },
    {
        image: "/slider/noida.jpg",
        title: "Greater Noida",
        subtitle: "Quick Service & Expert Technicians at Your Doorstep",
    },
    {
        image: "/slider/noida.jpg",
        title: "New Noida",
        subtitle: "Trusted Repair Solutions for Your Appliances",
    },
];

export default function ApplianceSlider() {
    return (
        <div className="w-full relative bg-[#0d2235]">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop={true}
                className="h-[60vh] md:h-[75vh] w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Background Image */}
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover brightness-75"
                                priority
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 y">
                                <p className="text-[#fff] text-sm md:text-lg font-light mb-2">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-[#ffb300] text-4xl md:text-6xl font-bold mb-4 drop-shadow">
                                    {slide.title}
                                </h2>
                                <button className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] text-white px-6 py-2 rounded-full font-semibold shadow hover:from-[#ff6f00] hover:to-[#ffb300] transition">
                                    Service Book
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
