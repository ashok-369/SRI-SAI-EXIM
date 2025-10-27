import { useParams } from "react-router-dom";
import { SERVICE_CARDS } from "@/lib/constants";

// Default image if service or image is missing
const DEFAULT_IMAGE = "/images/default-service.jpg"; 
// New specific image path for "Coming Soon" page (replace with your actual path)
const COMING_SOON_IMAGE = "/images/customs-clearance.jpg"; 

const ServiceDetailPage = () => {
  const { serviceId } = useParams(); // Get "air-freight", etc.
  const service = SERVICE_CARDS.find(s => s.id === serviceId);

  // --- Shared Contact Info (Extracted from the screenshot footer)
  const PHONE_NUMBER = "+91 63637 32815"; 
  const EMAIL_ADDRESS = "support@srisaiexim.in"; // Used a guess for email

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {service ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
          <img
            src={service.imageUrl || DEFAULT_IMAGE}
            alt={service.title}
            className="mb-4 w-full rounded-lg"
          />
          <p className="mb-4">{service.content.intro}</p>
          <ul className="list-disc ml-6 space-y-1">
            {service.content.services.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-4">
            Contact:{" "}
            <a href={`mailto:${service.content.contact.email || EMAIL_ADDRESS}`}>
              {service.content.contact.email || EMAIL_ADDRESS}
            </a>{" "}
            | Phone:{" "}
            <a href={`tel:${service.content.contact.phone || PHONE_NUMBER}`}>
              {service.content.contact.phone || PHONE_NUMBER}
            </a>
          </p>
        </>
      ) : (
        // --- This is the "Coming Soon" block you requested
        <>
          <img
            src={COMING_SOON_IMAGE} // Use the specific image for the coming soon page
            alt="Customs Clearance Coming Soon"
            className="mb-4 w-full rounded-lg"
          />
          <p className="text-center mb-4">
            **Coming Soon...**
          </p>
          <p className="text-center mt-4">
            Contact: | Phone:{" "}
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
          </p>
        </>
      )}
    </div>
  );
};

export default ServiceDetailPage;