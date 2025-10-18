import { Plane, Ship, Truck, Zap, FileText, Package } from "lucide-react"

export const COMPANY_NAME = "Sri Sai Exim"
export const PRIMARY_COLOR = "#0047AB"
export const ACCENT_COLOR = "#FF9900"

export const LOGO_NAMES = ["Coca-Cola", "Samsung", "Toyota", "Maersk", "FedEx", "DHL", "Nestle", "P&G"]

export const PAGE_LINKS = [
  { name: "Home", page: "home" },
  { name: "About Us", page: "about" },
  { name: "Team", page: "team" },
  { name: "Services", page: "services" },
  { name: "Contact Us", page: "contact" },
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
    description: "Cost-effective and flexible seafreight solutions for FCL and LCL, ensuring global reach.",
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
