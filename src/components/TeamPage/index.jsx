"use client"

import { PRIMARY_COLOR, ACCENT_COLOR, TEAM_MEMBERS } from "@/lib/constants"
import SectionWrapper from "@/components/SectionWrapper"
import TeamMember from "@/components/TeamMember"
import './team.css'

const TeamPage = ({ setPage }) => {
  return (
    <SectionWrapper id="team-page" className="bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-gray-500 text-sm mb-1">
          Home / <span style={{ color: PRIMARY_COLOR }}>Our Team</span>
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Meet Our <span style={{ color: PRIMARY_COLOR}}>Expert Team</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The leadership that makes global logistics seamless—united by experience, passion, and a commitment to
          excellence.
        </p>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></div>
      </div>

      <div className="">
        <div className=" team-members grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 pl-40 pr-40 justify-center">
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} totalMembers={TEAM_MEMBERS.length} />
          ))}
        </div>
    
        <div
          className="sm:col-span-2 lg:col-span-4 text-center mt-12 p-8 bg-primary rounded-xl shadow-2xl "
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          <p className="text-xl font-light text-white mb-4">
            For all inquiries, please call{" "}
            <span className="font-bold text-accent" style={{ color: "white" ,  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'}}>
              +91 63637 32815
            </span>{" "}
            or reach out below.
          </p>
          <button
            onClick={() => setPage("contact")}
            className="mt-4 px-10 py-3 text-lg font-semibold rounded-lg text-gray-900 shadow-xl transition duration-300 transform hover:scale-[1.02]"
            style={{ backgroundColor: "#30b6f0ff" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor ="#30b6f0ff")}
          >
            Contact Now
          </button>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default TeamPage
