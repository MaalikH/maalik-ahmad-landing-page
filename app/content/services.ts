import { faLaptopCode, faMobileAlt, faTshirt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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
      description: "Developing cross-platform applications built for speed, flexibility, and seamless user experience.",
      icon: faMobileAlt,
    },
    {
      id: "ecommerce-development",
      title: "Ecommerce Development",
      description: "Creating tailored eCommerce platforms, from storefront design to payments, inventory, and backend tools.",
      icon: faShoppingCart,
    },
    {
      id: "clothing-design-production",
      title: "Clothing Production",
      description: "Designing bold, purpose-driven fashion—handling concept, design, production, and order fulfillment.",
      icon: faTshirt,
    }
  ]
};
