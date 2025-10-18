"use client"

import React, { useState } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR, PAGE_LINKS, SERVICE_CARDS } from "@/lib/constants"
import SriSaiEximLogo from "@/components/SriSaiEximLogo"

// FIX: This CSS rule globally targets any element with 'focus:outline-none'
// and removes the outline only if it was focused by a mouse click (not by keyboard tab).
// This is the accessible way to remove the "click border".
const FocusResetStyle = () => (
  <style jsx global>{`
    button:focus:not(:focus-visible),
    a:focus:not(:focus-visible) {
      outline: none;
      box-shadow: none;
    }
    
    /* Optional: Some setups might need a slight adjustment to re-enable the default 
      focus-visible if Tailwind's base styles were too aggressive, but usually 
      just the rule above is enough when using Tailwind's 'focus:outline-none'.
    */
    .focus-ring-visible:focus-visible {
        outline: 2px solid var(--primary); /* Use your primary color for a custom keyboard ring */
        outline-offset: 2px;
    }
  `}</style>
)

const Header = ({ setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = (page) => {
    setPage(page)
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-md font-poppins">
      <FocusResetStyle /> {/* 👈 Add the focus reset styles here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <SriSaiEximLogo 
              className="w-10 h-10 cursor-pointer" 
              onClick={() => handleLinkClick("home")} 
              // Removed focus:outline-none here, it's a logo/link, usually safe to keep
            />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {PAGE_LINKS.map((item) =>
              item.page === "services" ? (
                <div key={item.page} className="relative group h-full flex items-center">
                  <button
                    onClick={() => handleLinkClick(item.page)}
                    // 👇 Added focus:outline-none to remove border on click
                    className="text-gray-600 hover:text-primary transition duration-300 font-medium text-base py-5 flex items-center focus:outline-none"
                    style={{ "--primary": PRIMARY_COLOR }}
                  >
                    {item.name}{" "}
                    <ChevronDown className="w-3 h-3 ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  <div
                    className="absolute top-full -left-4 mt-0 w-72 bg-white rounded-lg shadow-xl overflow-hidden
                    transition-all duration-300 ease-in-out transform scale-y-0 opacity-0 origin-top group-hover:scale-y-100 group-hover:opacity-100"
                    style={{ zIndex: 60 }}
                  >
                    {SERVICE_CARDS.map((service) => {
                      const Icon = service.icon
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleLinkClick("services")}
                          // 👇 Added focus:outline-none
                          className="w-full text-left flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition duration-200 border-b border-gray-50 last:border-b-0 focus:outline-none"
                          style={{ "--primary": PRIMARY_COLOR }}
                        >
                          <Icon className="w-4 h-4 mr-3 text-accent" style={{ color: ACCENT_COLOR }} />
                          {service.title}
                        </button>
                      )
                    })}
                  </div>
                </div>
              ) : (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  // 👇 Added focus:outline-none
                  className="text-gray-600 hover:text-primary transition duration-300 font-medium text-base py-5 focus:outline-none"
                  style={{ "--primary": PRIMARY_COLOR }}
                >
                  {item.name}
                </button>
              ),
            )}
            <div className="flex items-center space-x-3 text-sm text-gray-600 ml-4 border-l pl-4">
              <Phone className="w-4 h-4 text-accent" style={{ color: ACCENT_COLOR }} />
              <a
                href="tel:+916363732815"
                className="hover:text-primary transition font-medium focus:outline-none" // 👈 Added focus:outline-none to the phone link
                style={{ "--primary": PRIMARY_COLOR }}
              >
                +91 63637...
              </a>
            </div>
            <button
              onClick={() => handleLinkClick("contact")}
              // 👇 Added focus:outline-none
              className="px-6 py-2 text-base font-semibold rounded-lg text-white transition duration-300 transform hover:scale-[1.02] shadow-lg focus:outline-none"
              style={{ backgroundColor: PRIMARY_COLOR }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_COLOR)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
            >
              Get A Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            // 👇 Added focus:outline-none
            className="md:hidden text-gray-600 hover:text-primary p-2 focus:outline-none"
            style={{ "--primary": PRIMARY_COLOR }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {PAGE_LINKS.map((item) => (
            <React.Fragment key={item.page}>
              <button
                onClick={() => handleLinkClick(item.page)}
                // 👇 Added focus:outline-none
                className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-10 hover:text-primary rounded-md focus:outline-none"
                style={{ "--primary": PRIMARY_COLOR }}
              >
                {item.name}
              </button>
              {item.page === "services" && (
                <div className="pl-6 pt-1 pb-2 space-y-1 border-l-2 ml-4" style={{ borderColor: ACCENT_COLOR }}>
                  <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Our Solutions</p>
                  {SERVICE_CARDS.map((service) => {
                    const Icon = service.icon
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleLinkClick("services")}
                        // 👇 Added focus:outline-none
                        className="w-full text-left flex items-center px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none"
                      >
                        <Icon className="w-4 h-4 mr-2 text-primary" style={{ color: PRIMARY_COLOR }} />
                        {service.title}
                      </button>
                    )
                  })}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header