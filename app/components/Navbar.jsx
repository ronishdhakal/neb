"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="College Info Nepal Logo"
            width={170}
            height={170}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-700">
          <Link href="https://www.collegeinfonepal.com/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="https://www.collegeinfonepal.com/course" className="hover:text-blue-600 transition">
            Courses
          </Link>
          <Link href="https://www.collegeinfonepal.com/college" className="hover:text-blue-600 transition">
            Colleges
          </Link>
          {/* <Link href="https://www.collegeinfonepal.com/college" className="hover:text-blue-600 transition">
            Contact
          </Link> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
          aria-label="Toggle Menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6H20" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12H20" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 18H20" stroke="#111827" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 text-base font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/result" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Result
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-blue-600 transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
