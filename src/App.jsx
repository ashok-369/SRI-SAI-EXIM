import {BrouserRouter,router,routes} from "react"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HomePage from "@/components/HomePage"
import AboutUsPage from "@/components/AboutUsPage"
import TeamPage from "@/components/TeamPage"
import ServicesPage from "@/components/ServicesPage"
import ContactPage from "@/components/ContactPage"


const App = () => {
  const [currentPage, setPage] = useState("home")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setPage={setPage} />
      case "about":
        return <AboutUsPage setPage={setPage} />
      case "team":
        return <TeamPage setPage={setPage} />
      case "services":
        return <ServicesPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage setPage={setPage} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <Header setPage={setPage} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  )
}


export default App


const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  body { font-family: 'Poppins', sans-serif; }

  @keyframes logo-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%); 
    }
  }
  
  .logo-scroll-container {
    animation: logo-scroll 35s linear infinite;
    width: 200%;
  }
`
