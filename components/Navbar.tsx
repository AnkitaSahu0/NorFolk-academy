"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Academics", path: "/#academics" },
  { name: "Admissions", path: "/#admissions" },
  { name: "Events", path: "/#events" },
  { name: "Gallery", path: "/#gallery" },
  { name: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-7xl sticky top-0 bg-white/80 backdrop-blur-md shadow-md w-full z-50 transition-all duration-300">
      <div className=" max-w-7xl w-auto px-6">
        <div className="flex justify-between  gap-8 items-center h-16 ">
          {/* Logo */}
          <Link href="/" className="flex  items-center gap-10">
            {/* <img
              src="/logo.png"
              alt="School Logo"
              className="h-10 w-10 object-contain"
            /> */}
            <span className="text-xl font-mono font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              NorFolk Academy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6  ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                
                className={`text-sm font-medium transition duration-200 ${
                  pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-800 font-bold hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden text-black">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
             
              onClick={() => setIsOpen(false)}
              className={`block py-2 text-sm font-medium transition ${
                pathname === link.path
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
