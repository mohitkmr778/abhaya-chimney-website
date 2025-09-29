"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-[#23589c] fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-[1200px] mx-auto flex items-center px-4 py-3">
                <div className="mr-6">
                    <Link href="/">
                        <img
                            src="/abhaya-logo.png"
                            alt="Gen1service Logo"
                            className="h-[40px] w-auto"
                        />
                    </Link>
                </div>
                <nav className="flex gap-[18px] flex-wrap ml-auto">
                    <Link
                        href="/"
                        className="!text-white no-underline font-semibold"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="!text-white no-underline font-semibold"
                    >
                        About
                    </Link>
                    <Link
                        href="/service"
                        className="!text-white no-underline font-semibold"
                    >
                        Services
                    </Link>
                    <Link
                        href="/contact"
                        className="!text-white no-underline font-semibold"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
