import React from "react";

const services = [
    {
        title: "Chimney Repair Service",
        description:
            "Get reliable Air Conditioner repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
        price: "₹ 249",
        img: "/slider/noida.jpg",
    },
    {
        title: "RO Water Purifier Repair Service",
        description:
            "Get reliable refrigerator repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
        price: "₹ 249",
        img: "/slider/noida.jpg",
    },
    {
        title: "Hob Gas Repair Service",
        description:
            "Get reliable LED/LCD/TV repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
        price: "₹ 249",
        img: "/slider/noida.jpg",
    },
    {
        title: "Mircowave Repair Service",
        description:
            "Get reliable Washing Machine repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
        price: "₹ 249",
        img: "/slider/noida.jpg",
    },
    {
        title: "Oven Repair Service",
        description:
            "Get reliable Microwave Oven repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
        price: "₹ 249",
        img: "/slider/noida.jpg",
    },
    {
        title: "Dishwasher Repair Service",
        description:
            "Get reliable Kitchen-Chimney repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs.\u00A0Now.",
        price: "₹ 249",
        img: "/slider/noida.jpg",
    },
];

export default function PopularServices() {
    return (
        <section className="bg-[#ffffff] py-8">
            <h2 className="text-center text-2xl font-semibold mb-6 text-[#ffb300] drop-shadow">
                Our Popular Services
            </h2>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-[#18344a] rounded-xl border border-[#2c4a6b] p-4 flex flex-col items-center shadow-md"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="rounded-md w-full h-[140px] object-cover mb-4"
                        />
                        <h3 className="font-bold text-lg text-center mb-2 text-[#fff]">
                            {service.title}
                        </h3>
                        <p className="text-sm text-center mb-2 text-[#ffe082]">
                            {service.description}
                        </p>
                        <div className="flex w-full justify-between items-center mt-auto mb-2">
                            <span className="font-semibold text-[#ffb300]">
                                {service.price}
                            </span>
                            <button className="bg-gradient-to-r from-[#ffb300] to-[#ff6f00] text-white px-4 py-1 rounded-full font-semibold border-none shadow hover:from-[#ff6f00] hover:to-[#ffb300] transition-all">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
