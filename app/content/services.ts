import { faLaptopCode, faMobileAlt, faTshirt, faBoxOpen, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const servicesContent = {
  sectionName: "Services",
  title: "What I Do",
  services: [
    {
      id: "web-development",
      title: "Web Development",
      description: "Building modern, scalable web applications using frameworks like React, Angular, and Next.js.",
      icon: faLaptopCode,
    },
    {
      id: "mobile-app-development",
      title: "Mobile App Development",
      description: "Developing cross-platform applications optimized for performance and user experience.",
      icon: faMobileAlt,
    },
    {
      id: "ecommerce-development",
      title: "Ecommerce Development",
      description: "Creating custom eCommerce solutions, from storefront design to payment processing and backend management.",
      icon: faShoppingCart,
    },
    {
      id: "clothing-design-production",
      title: "Clothing Production",
      description: "Designing bold fashion pieces and handling end-to-end production, from concept to shipping.",
      icon: faTshirt,
    }
  ]
};
