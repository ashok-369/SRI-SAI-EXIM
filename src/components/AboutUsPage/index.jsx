"use client"
import { PRIMARY_COLOR, ACCENT_COLOR, COMPANY_NAME } from "@/lib/constants"
import SectionWrapper from "@/components/SectionWrapper"

const AboutUsPage = ({ setPage }) => (
  <SectionWrapper id="about-us-page" className="bg-white">
    <div className="text-center mb-8">
      <p className="text-gray-500 text-sm mb-1">
        Home / <span style={{ color: PRIMARY_COLOR }}>About Us</span>
      </p>
      <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
        About <span style={{ color: ACCENT_COLOR }}>{COMPANY_NAME}</span>
      </h2>
      <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: ACCENT_COLOR }}></div>
    </div>

    <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
      <p className="text-xl font-semibold leading-relaxed" style={{ color: PRIMARY_COLOR }}>
        Sri Sai Exim was established in 2015 with the vision of setting new standards in customs clearance and
        freight forwarding with combined decades of experience in customs clearance and International Freight
        Forwarding.
      </p>
      <p>
        Over the years, we have enriched our experience in various departments including Customs Clearance,
        Warehousing, Refunds, Track & Trace Capabilities, Goods, Insurance Facilities, EOU, STPI, SEZ, JDGFT, and
        Central Excise Import and Export.
      </p>
      <p>
        We have a wide array of expertise in international transportation, both Air and Sea. Our Innovation,
        Adaptability, Leadership, and Teamwork have enabled us to elevate our service to new heights. We continuously
        invest in the latest technologies and support it with a constant study of market conditions, this allows us to
        offer innovative solutions that are customized for each customer's specific requirements.
      </p>

      <div className="mt-10 p-6 rounded-xl border border-dashed border-gray-300 bg-gray-50">
        <p className="font-bold text-gray-900 mb-3">Core Services Areas:</p>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {[
            "Air Freight Services in India",
            "Ocean Freight Services in India",
            "Surface Transportation Services in India",
            "Logistics & Transportation Services in India",
            "DG Certification Services in India",
          ].map((service) => (
            <span
              key={service}
              className="px-3 py-1 rounded-full text-white shadow-md"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-base text-gray-600">
          For all inquiries, please call{" "}
          <a href="tel:+916363732815" className="font-bold hover:text-accent" style={{ color: PRIMARY_COLOR }}>
            +91 63637 32815
          </a>{" "}
          or reach out below.
        </p>
        <button
          onClick={() => setPage("contact")}
          className="mt-4 sm:mt-0 px-8 py-3 text-base font-semibold rounded-lg text-white shadow-lg transition duration-300 transform hover:scale-[1.02]"
          style={{ backgroundColor: ACCENT_COLOR }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = ACCENT_COLOR)}
        >
          Contact Now
        </button>
      </div>
    </div>
    <div className="max-w-4xl mx-auto mt-16 text-center text-xs text-gray-400">
      Copyright © Sri Sai Exim 2021, All Rights Reserved
    </div>
  </SectionWrapper>
)

export default AboutUsPage
