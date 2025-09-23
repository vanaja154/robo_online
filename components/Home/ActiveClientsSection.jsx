import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ActiveClientsSection() {
  return (
    <section className="bg-[#073534] text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="bg-[#06302f] rounded-2xl p-8 flex flex-col justify-between">
          <div>
            {/* Profile Images */}
            {/* <div className="flex -space-x-4 mb-6">
              <Image
                src="{client.src}"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#073534]"
                alt="client"
              />
              <Image
                src="https://i.ibb.co/Z1p9cJY/client2.jpg"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#073534]"
                alt="client"
              />
              <Image
                src="https://i.ibb.co/B27s8k9/client3.jpg"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#073534]"
                alt="client"
              />
              <Image
                src="https://i.ibb.co/Dw0jFmv/client4.jpg"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#073534]"
                alt="client"
              />
            </div> */}

            <h2 className="text-4xl font-bold mb-6">120M Active Clients</h2>
          </div>

          {/* Button */}
          <a
            href="#"
            className="inline-flex items-center justify-between w-[220px] bg-gradient-to-r from-[#53e280] to-[#0fd6d6] text-[#073534] font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            Lets Talk With Us
            <span className="bg-[#073534] text-white rounded-full p-2 ml-3">
              <ArrowUpRight size={18} />
            </span>
          </a>
        </div>

        {/* Business Consulting */}
        <div className="bg-[#06302f] rounded-2xl p-8">
          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#53e280] to-[#0fd6d6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#073534]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 13.5V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25h8.379a2.25 2.25 0 001.591-.659l4.242-4.242a2.25 2.25 0 00.659-1.591z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Business Consulting</h3>
          <p className="text-gray-300 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
          </p>
          <a href="#" className="underline text-white font-medium">
            Read More
          </a>
        </div>

        {/* Business Strategy */}
        <div className="bg-[#06302f] rounded-2xl p-8">
          <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#53e280] to-[#0fd6d6]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#073534]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6M12 7v.01M3 7h18M3 13h18"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">business Strategy</h3>
          <p className="text-gray-300 mb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
          </p>
          <a href="#" className="underline text-white font-medium">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
