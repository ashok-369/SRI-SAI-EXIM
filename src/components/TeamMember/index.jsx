"use client"

import { useRef } from "react"
import { PRIMARY_COLOR, ACCENT_COLOR } from "@/lib/constants"
import { useInViewAnimation } from "@/lib/hooks"

const TeamMember = ({ member, index, totalMembers }) => {
  const ref = useRef(null)
  const inView = useInViewAnimation(ref)

  return (
  <div
      ref={ref}
      className={`p-6 bg-white rounded-xl shadow-xl text-center  transition duration-700 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-accent border-b-4 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${totalMembers < 3 ? "mx-auto w-full max-w-sm sm:max-w-none" : ""}`}
      style={{ animationDelay: `${index * 0.15}s`, borderColor: ACCENT_COLOR , }}
    >
      <img
        src={member.image || "/placeholder.svg"}
        alt={member.name}
        className="w-32 h-32 mx-auto mb-4  rounded-full object-cover object-top border-4 border-primary shadow-lg"
        style={{ borderColor: PRIMARY_COLOR }}
        onError={(e) =>
          (e.target.src = `https://placehold.co/200x200/${ACCENT_COLOR.slice(1)}/000000?text=${member.name.split(" ")[0]}`)
        }
      />
      <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
      <p className="text-sm font-semibold mb-3" style={{ color: PRIMARY_COLOR , }}>
        {member.title}
      </p>
      <p className="text-gray-600 italic text-sm">"{member.motto}"</p>
    </div>
  
  )
}

export default TeamMember
