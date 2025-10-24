import { MapPin, Phone, Mail } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR, DARK_BLUE, PAGE_LINKS, SERVICE_CARDS, COMPANY_NAME } from "@/lib/constants"
import SriSaiEximLogo from "@/components/SriSaiEximLogo"

const Footer = ({ setPage }) => {
  const handleLinkClick = (page) => {
    setPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className="text-white pt-16 pb-8 font-poppins border-t-4"
      style={{ borderColor: ACCENT_COLOR, backgroundColor: "#baecfb" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          {/* Column 1: Logo & Mission */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <SriSaiEximLogo className="w-8 h-8" onClick={() => handleLinkClick("home")} />
            <p className="text-sm text-gray-900 max-w-xs">
              Dedicated to providing hassle-free, timely, and cost-effective logistics and customs solutions worldwide.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-3" style={{ color: ACCENT_COLOR }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {PAGE_LINKS.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleLinkClick(link.page)}
                    className="text-gray-400 hover:text-primary transition duration-300 text-left"
                    style={{ color: PRIMARY_COLOR, "--primary": PRIMARY_COLOR , backgroundColor : "transparent" , border : "none" ,}}
                    onMouseEnter={(e) => (e.currentTarget.style.color = DARK_BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold mb-3" style={{ color: ACCENT_COLOR }}>
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICE_CARDS.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => handleLinkClick("services")}
                    className="text-gray-400 hover:text-primary transition duration-300 text-left"
                    style={{ color: PRIMARY_COLOR, "--primary": PRIMARY_COLOR , backgroundColor : "transparent" , border : "none" ,}}
                    onMouseEnter={(e) => (e.currentTarget.style.color = DARK_BLUE)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold mb-3" style={{ color: ACCENT_COLOR }}>
              Reach Us
            </h4>
            <div className="flex items-center space-x-3 text-sm">
              <MapPin className="w-5 h-5 text-accent" style={{ color: ACCENT_COLOR }} />
              <p className="text-gray-900">Goraguntepalya, Bengaluru, 560022</p>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Phone className="w-5 h-5 text-accent" style={{ color: ACCENT_COLOR }} />
              <a
                href="tel:+916363732815"
                className="text-gray-400 hover:text-primary transition"
                style={{ color: PRIMARY_COLOR, "--primary": PRIMARY_COLOR }}
              >
                +91 63637 32815
              </a>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Mail className="w-5 h-5 text-accent" style={{ color: ACCENT_COLOR }} />
              <a
                href="mailto:support@srisaiexim.in"
                className="text-gray-400 hover:text-primary transition"
                style={{ color: PRIMARY_COLOR, "--primary": PRIMARY_COLOR }}
              >
                support@srisaiexim.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-2 md:mb-0">
            © {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
