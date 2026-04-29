"use client"

import { useState } from "react"
import Link from "next/link"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"
import { usePathname } from "next/navigation"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  if (pathname === "/" || pathname === "/home") {
    return null
  }

  return (
    <>
      {/* Hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* Sidebar */}
      <SidebarSlider
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <nav className="flex flex-col space-y-4">
          <Link href="/home" className="hover:underline">
            Home
          </Link>

          <Link href="/projects" className="hover:underline">
            Projects
          </Link>

          <Link href="/about" className="hover:underline">
            About
          </Link>

          <Link href="/contact" className="hover:underline">
            Contact
          </Link>

          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </SidebarSlider>
    </>
  )
}