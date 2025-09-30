import CustomFaqSection from "@/utils/CustomFaqSection";


const faqData = [
  { question: "1. Do you offer marketing contracts?", answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
  { question: "2. What marketing efforts do you specialize in?", answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
  { question: "3. Can I use the demos made by Ewebot?", answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
  { question: "4. What everybody ought to know about digital marketing?", answer: "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
];

export default function FaqSection() {
  return <CustomFaqSection faqs={faqData}  imageSrc="/images/faq.jpg" />;
}
