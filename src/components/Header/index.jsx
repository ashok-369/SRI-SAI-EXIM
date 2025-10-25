// Header Component (cleaned up)

"use client"

import React, { useState } from "react"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR, PAGE_LINKS, SERVICE_CARDS , VIOLET ,TEAL} from "@/lib/constants"
import SriSaiEximLogo from "@/components/SriSaiEximLogo"
// import './index.css'

const FocusResetStyle = () => (
  
  <style jsx global>{`
    button:focus:not(:focus-visible),
    a:focus:not(:focus-visible) {
      outline: none;
      box-shadow: none;
    }
    .focus-ring-visible:focus {
        outline: 2px solid var(--primary, ${PRIMARY_COLOR});
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-gray-100 shadow-md font-poppins">
      <FocusResetStyle />
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">

        <div className="flex items-center justify-between h-20"> 
          
          <SriSaiEximLogo 
              className="h-14 focus:outline-none focus-ring-visible mr-10" 
              onClick={() => handleLinkClick("home")} 
            />

          <div className="hidden md:flex items-center space-x-10"> 
            
            <nav className="flex space-x-8 items-center h-full">
              {PAGE_LINKS.map((item) =>
                item.page === "services" ? (
                  <div key={item.page} className="relative group h-full flex flex-row items-center" >
                    <button
                      onClick={() => handleLinkClick(item.page)}
                      className="text-gray-600 hover:text-primary transition duration-300 font-medium text-base py-4 flex items-center focus:outline-none focus-ring-visible" 
                      style={{ "--primary": PRIMARY_COLOR , backgroundColor:"transparent" ,outline: "none" , border: "none" ,paddingTop:"1rem", paddingBottom:"1rem"}} 
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
                            className="w-full text-left flex items-center px-4 py-3 text-sm text-gray-700 hover:text-primary transition duration-200 focus:outline-none focus-ring-visible"
                            style={{ "--primary": PRIMARY_COLOR, backgroundColor: "transparent", }}
                          >
                            <Icon className="w-4 h-4 mr-3 text-accent" style={{ color: PRIMARY_COLOR }} />
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
                    className="text-gray-600 hover:text-primary transition duration-300 font-medium text-base py-4 focus:outline-none focus-ring-visible"
                    style={{ "--primary": PRIMARY_COLOR, backgroundColor: "transparent" ,outline: "none" , border: "none", paddingTop:"1rem", paddingBottom:"1rem"}}
                  >
                    {item.name}
                  </button>
                ),
              )}
            </nav>
            <div className="flex items-center space-x-6">
              
              {/* <div className="flex items-center space-x-3 text-base text-gray-600 border-l border-gray-200 pl-6 h-full"> 
                <Phone className="w-4 h-4 text-accent" style={{ color: VIOLET }} />
                <a
                  href="tel:+916363732815"
                  className="hover:text-primary transition font-medium focus:outline-none focus-ring-visible whitespace-nowrap"
                  style={{ "--primary": PRIMARY_COLOR }}
                >
                  +91 63637...
                </a>
              </div>
               */}
              <button
                onClick={() => handleLinkClick("contact")}
                className="px-10 py-2 text-base font-semibold rounded-lg text-white transition duration-300 transform hover:scale-[1.02] shadow-lg focus:outline-none focus-ring-visible whitespace-nowrap"
                style={{ backgroundColor: PRIMARY_COLOR}}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = TEAL)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
              >
                Get A Quote
              </button>
            </div>
          </div>



          <button
            className="md:hidden text-gray-600 hover:text-primary p-2 focus:outline-none focus-ring-visible"
            style={{ "--primary": PRIMARY_COLOR }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
          {PAGE_LINKS.map((item) => (
            <React.Fragment key={item.page}>
              <button
                onClick={() => handleLinkClick(item.page)}
                className="w-full text-left block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary rounded-md focus:outline-none focus-ring-visible"
                style={{ "--primary": PRIMARY_COLOR, backgroundColor: "transparent" }}
              >
                {item.name}
              </button>
              {item.page === "services" && (
                <div className="pl-6 pt-1 pb-2 space-y-1 ml-4">
                  <p className="text-xs font-semibold uppercase text-gray-500 mb-1">Our Solutions</p>
                  {SERVICE_CARDS.map((service) => {
                    const Icon = service.icon
                    return (
                      <button
                        key={service.id}
                        onClick={() => handleLinkClick("services")}
                        className="w-full text-left flex items-center px-3 py-1 text-sm text-gray-600 rounded-md focus:outline-none focus-ring-visible"
                        style={{ backgroundColor: "transparent" }}
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
     
          <div className="pt-4 space-y-3">
              <a
                href="tel:+916363732815"
                className="w-full flex items-center justify-center px-6 py-2 text-base font-medium rounded-lg text-gray-700 border border-gray-300 hover:border-primary hover:text-primary transition duration-300 focus:outline-none focus-ring-visible"
                style={{ "--primary": PRIMARY_COLOR }}
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 63637 32815
              </a>
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full px-6 py-2 text-base font-semibold rounded-lg text-white transition duration-300 shadow-lg focus:outline-none focus-ring-visible"
                style={{ backgroundColor: PRIMARY_COLOR}}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = ACCENT_COLOR)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
              >
                Get A Quote
              </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header