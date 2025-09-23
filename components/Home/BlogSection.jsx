"use client";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function BlogSection() {
  const blogs = [
    {
      date: "20",
      month: "March",
      image: "/news-01.jpg", // replace with your image in /public
      title: "Errors with financial consequences in tax ?",
    },
    {
      date: "25",
      month: "March",
      image: "/news-02.jpg", // replace with your image in /public
      title: "Achieving Work Life Balance in a Hectic World",
    },
    {
      date: "30",
      month: "March",
      image: "/news-03.jpg", // replace with your image in /public
      title: "Mastering Work–Life On Target Business Goal",
    },
  ];

  return (
    <section className="bg-[#0c2c2c] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-400 font-semibold flex items-center justify-center gap-2">
            <span className="text-green-400">▶</span> Our Blog
          </p>
          <h2 className="mt-4 text-4xl font-bold">
            Insights from Latest Blog
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#0f3d3d] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-green-700 text-white text-center px-3 py-2 rounded-md">
                  <p className="text-xl font-bold">{blog.date}</p>
                  <p className="text-sm">{blog.month}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-6 text-gray-300 text-sm mb-4">
                  <span className="flex items-center gap-2">
                    <FaUser /> Admin
                  </span>
                  <span className="flex items-center gap-2">
                    <FaComments /> 3 Comments
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-4">{blog.title}</h3>

                {/* Learn More */}
                <button className="flex items-center gap-2 text-green-300 font-medium hover:underline">
                  Learn More
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
