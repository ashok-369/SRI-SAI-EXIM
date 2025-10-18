"use client"
import { ChevronDown } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR } from "@/lib/constants"

const HeroSection = ({ setPage }) => (
  <div className="relative h-[60vh] md:h-[90vh] font-poppins" style={{ backgroundColor: PRIMARY_COLOR }}>
    <div
      className="absolute inset-0 bg-cover bg-center opacity-70"
      style={{
        backgroundImage: "url('https://srisaiexim.in/images/sri-sai-exim-banner.jpg')",
        backgroundBlendMode: "multiply",
        filter: "brightness(0.9)",
      }}
      onError={(e) =>
        (e.target.style.backgroundImage = `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_COLOR}DD)`)
      }
    ></div>

    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6 animate-fade-in-up">
        We make your relocation as{" "}
        <span className="text-accent" style={{ color: ACCENT_COLOR }}>
          smooth
        </span>{" "}
        as you need.
      </h1>
      <p
        className="max-w-4xl mx-auto text-xl text-white/90 mb-10 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        We assure you to give you completely hassle-free relocation experiences under your budget.
      </p>
      <button
        onClick={() => setPage("services")}
        className="px-8 py-3 text-lg font-semibold rounded-lg text-gray-900 shadow-xl transition duration-300 transform hover:scale-[1.05]"
        style={{ backgroundColor: ACCENT_COLOR }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB233")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT_COLOR)}
      >
        Explore Services
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white animate-bounce" />
      </div>
    </div>
  </div>
)

export default HeroSection
