"use client"

import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { PRIMARY_COLOR, ACCENT_COLOR , TEAL} from "@/lib/constants"
import { useInViewAnimation } from "@/lib/hooks"

const ImageServiceCard = ({ title, shortDescription, imageUrl, index, setPage }) => {
  const ref = useRef(null)
  const inView = useInViewAnimation(ref)

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl overflow-hidden shadow-xl transition duration-500 ease-out transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ animationDelay: `${index * 0.1}s`, border: "1px solid #e5e7eb" }}
      onClick={() => setPage("services")}
    >
      <div className="w-full aspect-[3/2] overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) =>
            (e.target.src = `https://placehold.co/600x400/${PRIMARY_COLOR.slice(1)}/FFFFFF?text=${title.replace(" ", "+")}`)
          }
        />
      </div>

      <div className="p-4 sm:p-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{shortDescription}</p>
        <button
          className="flex items-center justify-center mx-auto text-primary font-semibold text-sm transition duration-300 hover:text-accent"
          style={{ color: PRIMARY_COLOR }}
          onMouseEnter={(e) => (e.currentTarget.style.color = TEAL)}
          onMouseLeave={(e) => (e.currentTarget.style.color = PRIMARY_COLOR)}
          onClick={(e) => {
            e.stopPropagation()
            setPage("services")
          }}
        >
          Read More
          <ArrowRight className="w-3 h-3 ml-1 transform transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

export default ImageServiceCard
