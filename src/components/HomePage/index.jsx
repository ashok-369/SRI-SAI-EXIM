import HeroSection from "@/components/HeroSection"
import ExpertiseGridSection from "@/components/ExpertiseGridSection"
import LogoCarousel from "@/components/LogoCarousel"
import AboutSection from "../AboutSection"
import CoreStrengthsSection from "../CoreStrengthsSection"

const HomePage = ({ setPage }) => (
  <>
    <HeroSection setPage={setPage} />
    <ExpertiseGridSection setPage={setPage} />
    <AboutSection />
    <CoreStrengthsSection />
    <LogoCarousel />
  </>
)

export default HomePage
