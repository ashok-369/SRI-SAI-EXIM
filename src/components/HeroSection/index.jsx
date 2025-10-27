"use client";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { PRIMARY_COLOR } from "@/lib/constants";

const HeroSection = () => (
  <div
    className="relative h-[60vh] md:h-[90vh] font-poppins"
    style={{ backgroundColor: PRIMARY_COLOR }}
  >
    {/* Background Banner */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-70"
      style={{
        backgroundImage:
          "url('https://srisaiexim.in/images/sri-sai-exim-banner.jpg')",
        backgroundBlendMode: "multiply",
        filter: "brightness(0.9)",
      }}
      onError={(e) =>
        (e.target.style.backgroundImage = `linear-gradient(135deg, ${PRIMARY_COLOR}, ${PRIMARY_COLOR}DD)`)
      }
    ></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white leading-tight mb-6 animate-fade-in-up">
        We make your relocation as{" "}
        <span className="text-accent" style={{ color: "#30b6f0ff" }}>
          smooth
        </span>{" "}
        as you need.
      </h1>

      <p
        className="max-w-3xl lg:max-w-4xl mx-auto text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 animate-fade-in-up"
        style={{ animationDelay: "0.3s" }}
      >
        We assure you to give you completely hassle-free relocation experiences under your budget.
      </p>

      {/* Replaced setPage with <Link> */}
      <Link
        to="/services"
        className="px-8 sm:px-10 py-3 text-base sm:text-lg font-semibold rounded-lg text-white shadow-xl transition duration-300 transform hover:scale-[1.05]"
        style={{ backgroundColor: "#30b6f0ff" , color : "#FFFFFF"}}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#00AEEF")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#30b6f0ff")}
      >
        Explore Services
      </Link>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 text-white animate-bounce" />
      </div>
    </div>
  </div>
);

export default HeroSection;
