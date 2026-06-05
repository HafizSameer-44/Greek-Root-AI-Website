"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What services does GreekRoot Ai provide?",
      answer:
        "We create AI websites, AI agents, automation systems, SaaS platforms, business solutions and futuristic digital experiences.",
    },
    {
      question: "Do you create custom AI solutions?",
      answer:
        "Yes, we build custom AI-powered systems for startups and businesses worldwide.",
    },
    {
      question: "Is the website responsive?",
      answer:
        "Yes, every website we create is fully responsive for desktop, tablet and mobile devices.",
    },
    {
      question: "How fast can you build a website?",
      answer:
        "Depending on project scope, we can deliver modern landing pages within days.",
    },
  ];

  return (
    <main className="bg-[#050816] text-white overflow-hidden">

      {/* SMOOTH SCROLL */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-green-400/10 blur-[180px] rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[180px] rounded-full"></div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#050816]/70 border-b border-green-400/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">

            <Image
              src="/logo.png"
              alt="GreekRoot Ai"
              width={55}
              height={55}
              className="object-contain"
            />

          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-gray-300">

            <a href="#home" className="hover:text-green-400 duration-300">
              Home
            </a>

            <a href="#about" className="hover:text-green-400 duration-300">
              About
            </a>

            <a href="#services" className="hover:text-green-400 duration-300">
              Services
            </a>

            <a href="#faq" className="hover:text-green-400 duration-300">
              FAQ
            </a>

            <a href="#contact" className="hover:text-green-400 duration-300">
              Contact
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 relative"
      >

        {/* HERO GLOW */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-green-400/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 blur-[120px]" />

        <div className="max-w-5xl relative z-10">

          <p className="text-green-400 uppercase tracking-[8px] text-xs mb-8 animate-pulse">

            Future Of AI

          </p>

          <h1 className="text-5xl md:text-8xl font-black leading-tight mb-8">

            Building Future
            <br />

            <span className="text-green-400 drop-shadow-[0_0_25px_#00FFB2]">

              With AI

            </span>

          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-8 max-w-3xl mx-auto mb-12">

            GreekRoot Ai creates futuristic AI websites,
            intelligent automation systems, AI agents and
            smart digital experiences for startups and businesses.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="#contact"
              className="bg-green-400 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 duration-300 shadow-[0_0_35px_#00FFB2]"
            >

              Get Started

            </a>

            <a
              href="#contact"
              className="border border-green-400 px-10 py-4 rounded-full hover:bg-green-400 hover:text-black duration-300 shadow-[0_0_20px_rgba(0,255,178,0.3)]"
            >

              Learn More

            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-24 relative"
      >

        <div className="absolute left-0 top-0 w-72 h-72 bg-green-400/10 blur-[120px]" />

        <div className="max-w-5xl text-center relative z-10">

          <p className="text-green-400 uppercase tracking-[6px] text-xs mb-6">

            About Us

          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">

            Smart AI Solutions
            <br />

            For The Future

          </h2>

          <p className="text-gray-300 text-sm md:text-lg leading-9">

            GreekRoot Ai is a modern AI company focused on building
            futuristic websites, intelligent AI agents, automation systems
            and digital products for startups and businesses worldwide.

          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center px-6 py-24 relative"
      >

        <div className="absolute right-0 bottom-0 w-80 h-80 bg-green-400/10 blur-[120px]" />

        <div className="max-w-7xl w-full relative z-10">

          <div className="text-center mb-20">

            <p className="text-green-400 uppercase tracking-[6px] text-xs mb-4">

              Services

            </p>

            <h2 className="text-4xl md:text-6xl font-black">

              What We Create

            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "AI Websites",
              "AI Agents",
              "Automation Systems",
              "SaaS Platforms",
              "Modern UI/UX",
              "Business Solutions",
            ].map((service, index) => (

              <div
                key={index}
                className="bg-[#0A192F]/70 border border-green-400/10 rounded-3xl p-10 hover:-translate-y-3 duration-500 hover:border-green-400/40 hover:shadow-[0_0_35px_rgba(0,255,178,0.2)]"
              >

                <div className="w-14 h-14 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 text-2xl mb-6">

                  ✦

                </div>

                <h3 className="text-2xl font-bold mb-5 text-green-400">

                  {service}

                </h3>

                <p className="text-gray-300 text-sm leading-8">

                  Professional futuristic digital solutions built with
                  modern AI technologies and clean responsive design systems.

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="min-h-screen flex items-center justify-center px-6 py-24 relative"
      >

        <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/10 blur-[120px]" />

        <div className="max-w-4xl w-full relative z-10">

          <div className="text-center mb-16">

            <p className="text-green-400 uppercase tracking-[6px] text-xs mb-4">

              FAQ

            </p>

            <h2 className="text-4xl md:text-6xl font-black">

              Frequently Asked Questions

            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="bg-[#0A192F]/70 border border-green-400/10 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-green-400/40 duration-300"
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-6 text-left"
                >

                  <h3 className="text-sm md:text-lg font-semibold text-white">

                    {faq.question}

                  </h3>

                  <span
                    className={`text-3xl text-green-400 transition duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >

                    +

                  </span>

                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openFaq === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 text-gray-300 text-sm leading-8">

                      {faq.answer}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-24 relative"
      >

        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-400/10 blur-[120px]" />

        <div className="max-w-4xl w-full text-center relative z-10">

          <p className="text-green-400 uppercase tracking-[6px] text-xs mb-4">

            Contact

          </p>

          <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight">

            Let’s Build Something Amazing

          </h2>

          <p className="text-gray-300 text-sm md:text-lg leading-8 mb-12">

            Start your AI journey with GreekRoot Ai.

          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#0A192F] border border-green-400/20 rounded-xl p-5 outline-none focus:border-green-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#0A192F] border border-green-400/20 rounded-xl p-5 outline-none focus:border-green-400"
            />

          </div>

          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full mt-6 bg-[#0A192F] border border-green-400/20 rounded-xl p-5 outline-none focus:border-green-400"
          />

          <button className="mt-8 bg-green-400 text-black px-12 py-4 rounded-full font-bold hover:scale-105 duration-300 shadow-[0_0_35px_#00FFB2]">

            Send Message

          </button>

        </div>

      </section>

    </main>
  );
}