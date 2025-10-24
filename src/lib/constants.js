import { Plane, Ship, Truck, Zap, FileText, Package } from "lucide-react"

export const COMPANY_NAME = "Sri Sai Exim"
export const PRIMARY_COLOR = "#0047AB" // Blue
export const ACCENT_COLOR = "#FF9900" // Orange
export const DARK_BLUE = "#000b39ff"

export const CLIENT_LOGOS = [
  { name: "Tangoe", url: "https://srisaiexim.in/images/clients/tangoe.jpg" }, 
  { name: "Analog-devices", url: "https://srisaiexim.in/images/clients/analog-devices.jpg" },
  { name: "Capgemini", url: "https://srisaiexim.in/images/clients/capgemini.jpg" },
  { name: "Kuliza", url: "https://srisaiexim.in/images/clients/kuliza.jpg" },
  { name: "Mindtree", url: "https://srisaiexim.in/images/clients/mindtree.jpg" },
  { name: "Sap", url: "https://srisaiexim.in/images/clients/sap.jpg" },
  { name: "Happiest-minds", url: "https://srisaiexim.in/images/clients/happiest-minds.jpg" },
  { name: "Mitel", url: "https://srisaiexim.in/images/clients/mitel.jpg" },
  { name: "Qubix", url: "https://srisaiexim.in/images/clients/qubix.jpg" },
  { name: "Beckman-coulter", url: "https://srisaiexim.in/images/clients/beckman-coulter.jpg" },
  { name: "Harman", url: "https://srisaiexim.in/images/clients/harman.jpg" },
  { name: "Cis Global", url: "https://srisaiexim.in/images/clients/cis-global.jpg" },
  { name: "Sabre", url: "https://srisaiexim.in/images/clients/sabre.jpg" },
  { name: "Impelsys", url: "https://srisaiexim.in/images/clients/impelsys.jpg" },
  { name: "Micro Focus", url: "https://srisaiexim.in/images/clients/micro-focus.jpg" },
  { name: "Prestige", url: "https://srisaiexim.in/images/clients/prestige.jpg" },
]

export const PAGE_LINKS = [
  { name: "Home", page: "home" },
  { name: "About", page: "about" },
  { name: "Team", page: "team" },
  { name: "Services", page: "services" },
  { name: "Contact", page: "contact" },
]

export const SERVICE_CARDS = [
  {
    id: "air-freight",
    icon: Plane,
    title: "Air Freight",
    description: "Fast, reliable, and secure air transportation for time-critical and high-value shipments worldwide.",
    shortDescription: "We make your relocation as smooth as you need.",
    imageUrl: "https://srisaiexim.in/images/air-freight.jpg",
  },
  {
    id: "ocean-freight",
    icon: Ship,
    title: "Ocean Freight",
    description: "Cost-effective and flexible seafreight solutions for FCL (Full Container Load) and LCL (Less than Container Load), ensuring global reach.",
    shortDescription: "We make your relocation as smooth as you need.",
    imageUrl: "https://srisaiexim.in/images/ocean-freight.jpg",
  },
  {
    id: "surface-transportation",
    icon: Truck,
    title: "Surface Transportation",
    description: "Efficient road and rail cargo services, ensuring timely and damage-free delivery across land routes.",
    shortDescription: "We make your relocation as smooth as you need.",
    imageUrl: "https://srisaiexim.in/images/surface-transportation.jpg",
  },
  {
    id: "logistics-transportation",
    icon: Zap,
    title: "Logistics & Transportation",
    description: "End-to-end supply chain management, optimizing flow from origin to the final point of delivery.",
    shortDescription: "We make your relocation as smooth as you need.",
    imageUrl: "https://srisaiexim.in/images/logistics-and-transportation.jpg",
  },
  {
    id: "customs-brokerage",
    icon: FileText,
    title: "Customs Brokerage",
    description: "Expert customs clearance and regulatory compliance to navigate complex international trade smoothly.",
    shortDescription: "We make your relocation as smooth as you need.",
    imageUrl: "https://srisaiexim.in/images/custom-brokerage.jpg",
  },
  {
    id: "dg-certification",
    icon: Package,
    title: "DG Certification & Packing",
    description:
      "Specialized handling and certification for Dangerous Goods, ensuring compliance with global safety standards.",
    shortDescription: "We make your relocation as smooth as you need.",
    imageUrl: "https://srisaiexim.in/images/dg-certification-and-packing.jpg",
  },
]

export const TEAM_MEMBERS = [
  {
    name: "Mr. Keerthi",
    title: "Director",
    image: "https://srisaiexim.in/images/mr-keerthi.jpg",
    motto: "Leading the vision and strategic execution of global logistics.",
  },
  {
    name: "Ms. Ganavi S.k",
    title: "Operational Manager",
    image: "https://srisaiexim.in/images/ganavi.jpg",
    motto: "Streamlining operations for maximum efficiency and client satisfaction.",
  },
]