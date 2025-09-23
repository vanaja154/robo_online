"use client";
import Image from "next/image";

export default function BusinessJourney() {
  return (
    <section className="bg-[#062522] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ==== Left Images ==== */}
        <div className="relative flex justify-center">
          <div className="relative w-80 h-96 rounded-xl overflow-hidden border-2 border-[#0d3b36] shadow-lg">
            <Image
              src="/image.jpg"
              alt="Business meeting"
              fill
              className="object-cover"
            />
          </div>

          {/* Small Image Overlay */}
          <div className="absolute -bottom-8 -right-8 w-60 h-72 rounded-xl overflow-hidden border-2 border-[#0d3b36] shadow-lg">
            <Image
              src="/image2.jpg"
              alt="Team discussion"
              fill
              className="object-cover"
            />

            {/* Skilled Team Badge */}
            {/* <div className="absolute -bottom-6 left-4 bg-[#d1f52c] text-black rounded-xl px-4 py-2 shadow-md flex items-center space-x-3">
              <span className="font-semibold">Skilled Team</span>
              <div className="flex -space-x-2">
                <Image
                  src="/images/user1.jpg"
                  alt="member1"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/images/user2.jpg"
                  alt="member2"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/images/user3.jpg"
                  alt="member3"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
                <span className="bg-black text-white text-sm rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
                  9+
                </span>
              </div>
            </div> */}
          </div>
        </div>

        {/* ==== Right Content ==== */}
        <div>
          <p className="uppercase tracking-wide text-[#a7ff83] font-medium flex items-center space-x-2">
            <span className="inline-block w-3 h-3 bg-[#a7ff83] rounded-full"></span>
            <span>Who We Are</span>
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
            The Journey Behind Our Business Success
          </h2>

          <p className="mt-6 text-gray-300">
            Consultz is the go-to hub for early adopters and innovation enthusiasts,
            offering cutting-edge technology
          </p>

          {/* Creative Solutions */}
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="font-semibold text-xl flex items-center space-x-2">
                <span>💡</span> <span>Creative Solutions</span>
              </h3>
              <p className="text-gray-300 mt-1">
                In today’s competitive business landscape, the need for efficient IT
                solutions has been more critical.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl flex items-center space-x-2">
                <span>✏️</span> <span>Actionable Solutions</span>
              </h3>
              <p className="text-gray-300 mt-1">
                Innovation is the key to staying ahead in a changing world. We harness
                cutting-edge technology
              </p>
            </div>
          </div>

          {/* Business Success Bar */}
          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Business Success</span>
              <span className="font-medium">88%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-[#0ed1a0] h-2 rounded-full"
                style={{ width: "88%" }}
              ></div>
            </div>
          </div>

          {/* Button + Founder */}
          <div className="mt-10 flex items-center gap-6">
            <button className="flex items-center bg-[#b2ff59] text-black px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#a4f34e] transition">
              Lets Talk With Us
              <span className="ml-3 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">
                →
              </span>
            </button>

            <div className="flex items-center gap-3">
              <Image
                src="/images/founder.jpg"
                alt="Founder"
                width={50}
                height={50}
                className="rounded-full border-2 border-[#b2ff59]"
              />
              <div>
                <p className="font-semibold">Michel Devid</p>
                <p className="text-sm text-gray-300">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
