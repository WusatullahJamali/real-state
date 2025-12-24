"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Counter that animates when visible
const useCounter = (end: number, duration = 1200) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
};

interface Agent {
  name: string;
  company: string;
  id: string;
  soldCount: number;
  yearsExperience: number;
  image: string;
}

const agentsData: Agent[] = [
  {
    name: "Gregg Klar",
    company: "Gregg's Team/Keller Williams",
    id: "#472276",
    soldCount: 78,
    yearsExperience: 26,
    image: "/agent21.jpeg",
  },
  {
    name: "Cris Herrera",
    company: "LPT Realty LLC",
    id: "#736203",
    soldCount: 0,
    yearsExperience: 5,
    image: "/agent22.jpeg",
  },
  {
    name: "Sam Lemelle",
    company: "Central Metro Realty",
    id: "",
    soldCount: 24,
    yearsExperience: 21,
    image: "/agent23.jpeg",
  },
  {
    name: "Steven Nusinow",
    company: "Avenue Austin Realty",
    id: "#556991",
    soldCount: 16,
    yearsExperience: 19,
    image: "/agent24.jpeg",
  },
  {
    name: "Kent Redding",
    company: "Berkshire Hathaway Texas",
    id: "#514347",
    soldCount: 147,
    yearsExperience: 23,
    image: "/agent25.jpeg",
  },
];

const AgentCard: React.FC<{ agent: Agent }> = ({ agent }) => {
  const { count: sold, ref: soldRef } = useCounter(agent.soldCount);
  const { count: exp, ref: expRef } = useCounter(agent.yearsExperience);

  return (
    <div className="flex flex-col items-center p-4  text-black bg-white transition-all hover:-translate-y-1 duration-300">
      {/* Image */}
      <div className="mb-4">
        <Image
          src={agent.image}
          alt={agent.name}
          width={200}
          height={200}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover transform hover:scale-110 transition duration-300"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg sm:text-xl font-semibold text-black mb-1 text-center">
        {agent.name}
      </h3>

      {/* Company */}
      <p className="text-sm text-black mb-3 text-center px-2">
        {agent.company} {agent.id}
      </p>

      {/* Counters */}
      <div className="text-center space-y-2">
        <div ref={soldRef} className="flex items-baseline justify-center gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-black">
            {sold}
          </span>
          <span className="text-sm text-black">Sold last year</span>
        </div>

        <div ref={expRef} className="flex items-baseline justify-center gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-black">
            {exp}
          </span>
          <span className="text-sm text-black">years Experience</span>
        </div>
      </div>
    </div>
  );
};

const AgentsGrid: React.FC = () => {
  return (
    <section className=" py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2">
              Skilled Local Agents
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Work with top-rated and highly experienced real estate experts
            </p>
          </div>

          <button className="flex items-center gap-2 px-6 py-3 border-2 bg-white text-black rounded-full hover:border-yellow-500 transition-colors font-medium">
            Find your agent
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Responsive Grid */}
        {/* Responsive Grid + Mobile Carousel */}
<div className="block sm:hidden">
  {/* Mobile Carousel */}
  <div 
    className="
      flex overflow-x-auto gap-6 pb-4
      snap-x snap-mandatory
      scrollbar-hide
    "
  >
    {agentsData.map((agent, index) => (
      <div 
        key={index} 
        className="min-w-[75%] snap-center"
      >
        <AgentCard agent={agent} />
      </div>
    ))}
  </div>
</div>

{/* GRID for tablet/desktop */}
<div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
  {agentsData.map((agent, index) => (
    <AgentCard key={index} agent={agent} />
  ))}
</div>

      </div>
    </section>
  );
};

export default AgentsGrid;
