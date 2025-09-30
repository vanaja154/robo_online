import ServiceDetails from "@/utils/ServiceDetails";

export default function BusinessConsultingPage() {
  const description = [
    "UX design refers to the term “user experience design”, while UI stands for “user interface design”. Both elements are crucial to a product and work closely together. But despite their professional relationship, the roles themselves are quite different, referring to very different aspects of the product development process and the design discipline.",
    "In relation to websites and apps, UI design considers the look, feel, and interactivity of the product. It’s all about making sure that the user interface of a product is as intuitive as possible, and that means carefully considering each and every visual, interactive element the user might encounter."
  ];

  const processSteps = [
    { num: "01", title: "Creative Analysis", desc: "Creative analysis is important. It is common for marketers to measure campaign performance at a superficial level. But to fully understand it" },
    { num: "02", title: "Design & Sketches", desc: "A design sketch is a graphical sketched representation of a design plan. A design sketch, see example figure, is a visualization" },
    { num: "03", title: "Prototype & Wireframing", desc: "A prototype is a barebones, relatively simple working model of an app or webpage. They are typically the next step in the product design." },
    { num: "04", title: "Delivery & Deploy", desc: "Continuous delivery is an extension of continuous integration since it automatically deploys all to a testing and/or production" },
  ];

  const outcomes = [
    "Excepteur sint occaecat cupidatat a deserunt mollit anim id est laborum.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo",
    " inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  ];

  const images = [
    { src: "/images/service-details.jpg", alt: "Team discussing project" },
    { src: "/images/service-2.jpg", alt: "Business meeting with charts" },
  ];

  const moreServices = [
    { name: "Invest Process" },
    { name: "It Services" },
    { name: "Online Training" },
     { name: "Mobile Solutions" },
      { name: "App Development Services" },
  ];

  const contactInfo = {
    address: "New South Head Rd, Double Bay",
    city: "2028, New York",
    email: "contact@fufo.com",
    phone: "+1300 877 503",
  };

  return (
    <ServiceDetails
      description={description}
      processSteps={processSteps}
      outcomes={outcomes}
      images={images}
      moreServices={moreServices}
      contactInfo={contactInfo}
    />
  );
}
