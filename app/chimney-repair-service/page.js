import PageBanner from "@/components/homePage/PageBanner";
import React from "react";
import ServiceImageSlider from "@/components/homePage/ServiceImageSlider";

export default function ChimneyRepairServicePage() {
    const sliderImages = [
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
        "/slider/noida.jpg",
    ];
    return (
        <>
            <PageBanner
                title="Expert Chimney Repair & Maintenance Services"
                subtitle="Get reliable Air Conditioner repair services in Noida with 24x7 support. Expert technicians for all brands, fast and affordable repairs. Now."
                image="/slider/noida.jpg"
            />
            <main className="bg-[#f6fbfd] py-10">
                <div className="max-w-[1200px] mx-auto px-4">
                   
               
                    {/* Alternating sections start */}
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/noida.jpg"
                                alt="Modern Service Standard"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                About Quality
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                              Expert Chimney Repair & Maintenance Services
                            </h2>
                            <p className="text-[#222] mb-2 text-base">

                          Your kitchen will remain safe, smoke-free, and clean with Abhaya Chimney Service as your go-to partner for the best
                            chimney installation, maintenance, and repair services. We provide dependable services for all kinds and brands of 
                            chimneys at reasonable costs thanks to our years of experience and staff of knowledgeable experts.
                            A variety of problems are covered by our chimney repair service, such as motor failures, decreased suction,
                            strange noises, clogged filters, damaged ducts, and electrical malfunctions To provide you piece of mind 
                                and prolong the life of your chimney, we exclusively utilize authentic
                            replacement parts and up-to-date equipment.
                            </p>
                            <p className="text-[#222] mb-2 text-base">
                             Your kitchen will remain safe, smoke-free, and clean with 
    Abhaya Chimney Service as your go-to partner for the best chimney installation, maintenance, and repair services.
    We provide dependable services for all kinds and brands of chimneys at reasonable costs thanks to our years of experience
    and staff of knowledgeable experts.
A variety of problems are covered by our chimney repair service, such as motor failures, decreased suction, strange noises,
clogged filters, damaged ducts, and electrical malfunctions. To provide you piece of mind and prolong the life of your chimney,
        we exclusively utilize authentic replacement parts and up-to-date equipment.
                            </p>
                           
                        </div>
                    </section>
                    <section className="flex flex-col md:flex-row items-center gap-8 mb-16 md:flex-row-reverse">
                        <div className="md:w-1/2 w-full">
                            <img
                                src="/slider/noida.jpg"
                                alt="Expert Refrigerator Repair"
                                className="rounded-xl w-full h-[320px] object-cover shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 w-full">
                            <h4 className="text-[#0099b7] font-semibold uppercase mb-2 tracking-wide text-sm">
                                Service Excellence
                            </h4>
                            <h2 className="text-3xl font-bold mb-4 text-[#0d5c6b]">
                                Expert Refrigerator Repair
                            </h2>
                            <p className="text-[#222] mb-2 text-base">
                                Our certified technicians provide fast and
                                reliable refrigerator repair for all brands.
                            </p>
                            <p className="text-[#222] mb-2 text-base">
                                We use genuine parts and offer transparent
                                pricing for every service call.
                            </p>
                            <ul className="mt-4 space-y-2">
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Quick Diagnosis & Repair
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Genuine Spare Parts
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    Warranty on Service
                                </li>
                                <li className="flex items-center text-[#0d5c6b] font-medium">
                                    <span className="mr-2 text-[#0099b7] text-lg">
                                        &#10003;
                                    </span>{" "}
                                    24x7 Customer Support
                                </li>
                            </ul>
                        </div>
                    </section>
                         <ServiceImageSlider 
                             images={sliderImages} 
                             heading="Our Chimney Repair Gallery" 
                             subheading="See our expert technicians in action, delivering quality chimney repairs across Noida." 
                         />
                </div>
            </main>
        </>
    );
}
