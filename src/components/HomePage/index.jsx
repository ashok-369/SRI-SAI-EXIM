import HeroSection from "@/components/HeroSection"
import ExpertiseGridSection from "@/components/ExpertiseGridSection"
import LogoCarousel from "@/components/LogoCarousel"

const HomePage = ({ setPage }) => (
  <>
    <HeroSection setPage={setPage} />
    <ExpertiseGridSection setPage={setPage} />
    <LogoCarousel />
  </>
)

export default HomePage
