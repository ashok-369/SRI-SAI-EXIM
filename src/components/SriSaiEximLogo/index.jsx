"use client"

const SriSaiEximLogo = ({ className = "w-10 h-10", onClick }) => (
  <button onClick={onClick} className="flex items-center space-x-2 font-poppins focus:outline-none">
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>

    <img src="https://srisaiexim.in/images/sri-sai-exim.png" className="w-1/4" />
    <span className="text-xl font-extrabold tracking-tight text-gray-900">
      SRI SAI <span style={{ color: "#0047AB" }}>EXIM</span>
    </span>
  </button>
)

export default SriSaiEximLogo
