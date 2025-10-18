import { LOGO_NAMES } from "@/lib/constants"

const LogoCarousel = () => {
  const logos = [...LOGO_NAMES, ...LOGO_NAMES]

  return (
    <div className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-semibold text-gray-500 mb-8 uppercase tracking-widest">
          Trusted By Global Leaders
        </h2>

        <div className="overflow-hidden relative w-full h-16 sm:h-20">
          <div className="flex logo-scroll-container absolute left-0 top-0 h-full">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-48 h-full flex items-center justify-center mx-8 py-2">
                <span className="text-3xl font-extrabold text-gray-300 hover:text-gray-600 transition duration-500 ease-in-out">
                  {logo}
                </span>
              </div>
            ))}
          </div>

          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}

export default LogoCarousel
