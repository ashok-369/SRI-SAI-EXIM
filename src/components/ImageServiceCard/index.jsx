"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
// Assuming these constants hold the luxury colors:
// PRIMARY_COLOR: Deep Navy/Sapphire Blue (e.g., #003366)
// ACCENT_COLOR: Subtle Gold/Bronze (e.g., #B8860B)
import { PRIMARY_COLOR, ACCENT_COLOR, TEAL ,VIOLET} from "@/lib/constants" 
import { useInViewAnimation } from "@/lib/hooks"

const ImageServiceCard = ({ title, shortDescription, imageUrl, index, linkPath }) => {
  const ref = useRef(null)
  const inView = useInViewAnimation(ref)

  // Use a sensible default link path if one isn't provided
  const finalLinkPath = linkPath || `/services/${title.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div
      ref={ref}
      // MODIFICATION 1: Deepened shadow and added the 'group' class for hover targeting.
      // Used 'hover:scale-[1.03]' instead of '-translate-y-1' for a smoother, luxurious lift.
      className={`group bg-white rounded-xl overflow-hidden shadow-xl shadow-gray-400/30 transition duration-500 ease-out 
        transform hover:scale-[1.03] hover:shadow-2xl hover:shadow-gray-500/50 cursor-pointer 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ animationDelay: `${index * 0.1}s`, border: "1px solid #e5e7eb" }}
      // Removed the onClick for the whole card to respect the "Read More" button navigation
    >
      <div className="w-full aspect-[3/2] overflow-hidden relative"> {/* Added relative here */}
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          // Kept your original image hover effect.
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) =>
            (e.target.src = `https://placehold.co/600x400/${PRIMARY_COLOR.slice(1)}/FFFFFF?text=${title.replace(" ", "+")}`)
          }
        />
        
        {/* MODIFICATION 2: SEMI-TRANSPARENT GRADIENT OVERLAY */}
        {/* Fulfills the requirement for an overlay appearing on hover */}
        <div 
          className="absolute inset-0 bg-transparent transition-all duration-500 ease-in-out 
                     group-hover:bg-gradient-to-t group-hover:from-black/10 group-hover:to-transparent"
        ></div>
      </div>

      <div className="p-4 sm:p-6 text-center">
        
        {/* MODIFICATION 3: Typography Color */}
        <h3 
          className="text-lg sm:text-xl font-bold mb-2" 
          // Applies the distinct PRIMARY_COLOR
          style={{ color: PRIMARY_COLOR }} 
        >
          {title}
        </h3>
        
        {/* MODIFICATION 4: Description Color */}
        <p className="text-sm mb-4" 
           // Applies a slightly lighter gray for sophistication
           style={{ color: '#6b7280' }}
        >
          {shortDescription}
        </p>
        
        {/* MODIFICATION 5: CTA BUTTON - Navigating using <a> and applying luxury style */}
        <a
          href={finalLinkPath}
          // The button structure from the previous luxury design for the required pill shape/style
          className="inline-flex items-center justify-center w-auto px-5 py-2 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 border-2"
          style={{ 
            backgroundColor: PRIMARY_COLOR, // Gold/Accent background
            color: 'white', 
            borderColor: PRIMARY_COLOR,
          }}
          onMouseEnter={(e) => {
            // Hover: Inverse colors (Gold border, Navy text)
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = VIOLET;
            e.currentTarget.style.borderColor = VIOLET; // Use Primary for border on hover
          }}
          onMouseLeave={(e) => {
            // Restore initial state
            e.currentTarget.style.backgroundColor = TEAL;
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = TEAL;
          }}
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

export default ImageServiceCard