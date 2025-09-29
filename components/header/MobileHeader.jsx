"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileHeader() {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-[#23589c] fixed top-0 left-0 w-full z-50 shadow-md md:hidden">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/abhaya-logo.png"
                            alt="Gen1service Logo"
                            className="h-[36px] w-auto"
                        />
                    </Link>
                </div>
                <button
                    className="text-white focus:outline-none"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="h-7 w-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 8h16M4 16h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            <nav
                className={`bg-[#23589c] transition-all duration-300 overflow-hidden ${
                    open ? "max-h-[400px] py-2" : "max-h-0"
                }`}
            >
                <ul className="flex flex-col gap-2 px-6">
                    <li>
                        <Link
                            href="/"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/service"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="block py-2 !text-white font-semibold"
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
