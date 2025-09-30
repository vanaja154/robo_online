import ServiceDetails from "@/utils/ServiceDetails";

export default function InvestCom() {
  const description = [
    "Investment process refers to the structured approach followed by investors and financial institutions to identify, analyze, and manage investments. It helps in minimizing risks while maximizing potential returns.",
    "From initial planning to execution, the process ensures that investments are aligned with financial goals, risk tolerance, and long-term strategies. A disciplined investment process builds confidence and transparency for stakeholders."
  ];

  const processSteps = [
    { num: "01", title: "Goal Setting & Analysis", desc: "Defining financial objectives, risk appetite, and investment horizon to align the process with client needs." },
    { num: "02", title: "Research & Strategy", desc: "Conducting market research, analyzing trends, and building an appropriate investment strategy." },
    { num: "03", title: "Portfolio Construction", desc: "Allocating assets across equities, bonds, real estate, or other instruments to balance growth and risk." },
    { num: "04", title: "Monitoring & Review", desc: "Regularly tracking performance, rebalancing portfolios, and adjusting strategies as per market conditions." },
  ];

  const outcomes = [
    "Well-diversified portfolios that reduce investment risk.",
    "Higher probability of achieving financial goals.",
    "Clear understanding of risks and expected returns.",
    "Sustainable long-term wealth creation for investors."
  ];

  const images = [
    { src: "/images/service-details.jpg", alt: "Team discussing project" },
    { src: "/images/service-2.jpg", alt: "Business meeting with charts" },
      ];

  const moreServices = [
    // { name: "Invest Process" },
    {name:"Business Consulting"},
    { name: "It Services" },
    { name: "Online Training" },
    { name: "Mobile Solutions" },
    { name: "App Development Services" },
  ];

  const contactInfo = {
    address: "Wall Street, Manhattan",
    city: "10005, New York",
    email: "invest@fufo.com",
    phone: "+1 212 555 7890",
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
