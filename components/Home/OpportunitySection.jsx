export default function OpportunitySection() {
  return (
    <section className="w-full bg-[#052826] text-white relative overflow-hidden py-20 px-6 md:px-16">
      {/* Globe SVG - Bottom Right */}
      <div className="absolute bottom-0 right-0 opacity-20 w-64 h-64 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 200 200"
          stroke="currentColor"
          className="text-green-300 w-full h-full"
        >
          <circle cx="100" cy="100" r="95" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="95" ry="35" strokeWidth="1" />
          <ellipse cx="100" cy="100" rx="35" ry="95" strokeWidth="1" />
          <line x1="5" y1="100" x2="195" y2="100" strokeWidth="1" />
          <line x1="100" y1="5" x2="100" y2="195" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Section Tagline */}
        <p className="text-green-300 text-sm font-medium uppercase mb-3 flex items-center justify-center gap-2">
          <span className="inline-block w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-green-400"></span>
          How It Work
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-12">
          Connect, Collaborate, & Create <br /> Limitless Opportunities.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border border-gray-700 rounded-2xl p-8 md:p-10">
          {/* Step 1 */}
          <div className="text-center md:text-left border-r border-gray-700 last:border-none">
            <p className="text-5xl font-bold text-gray-600 mb-4">01</p>
            <h3 className="font-semibold text-lg mb-2">Strategic Growth</h3>
            <p className="text-gray-300 text-sm">
              Sparking Innovation, Shaping <br /> Tomorrow successful
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center md:text-left border-r border-gray-700 last:border-none">
            <p className="text-5xl font-bold text-gray-600 mb-4">02</p>
            <h3 className="font-semibold text-lg mb-2">Fuel Innovation</h3>
            <p className="text-gray-300 text-sm">
              Sparking Innovation, Shaping <br /> Tomorrow successful
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center md:text-left border-r border-gray-700 last:border-none">
            <p className="text-5xl font-bold text-gray-600 mb-4">03</p>
            <h3 className="font-semibold text-lg mb-2">Financial Planning</h3>
            <p className="text-gray-300 text-sm">
              Helping You Stay on Track <br /> with Accurate Estimates
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center md:text-left">
            <p className="text-5xl font-bold text-gray-600 mb-4">04</p>
            <h3 className="font-semibold text-lg mb-2">Sustainable Success</h3>
            <p className="text-gray-300 text-sm">
              Amazing Support! with lot of <br /> ele demos to choose from top
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <p className="mt-10 text-lg font-semibold">
          Embrace Innovation, Adapt Quickly, and Lead with Confidence.{" "}
          <span className="text-green-400 cursor-pointer">Consult Now</span>
        </p>
      </div>
    </section>
  );
}
