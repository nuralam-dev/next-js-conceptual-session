import banner from "@/assets/hero.png"; // Adjust path if needed
import Image from "next/image";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center">
        {/* Badge / Tagline */}
        <span className="mb-4 inline-block rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#632DF8]">
          Innovate Your Workflow
        </span>

        {/* Banner Heading */}
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-tight">
          We Build{" "}
          <span className="bg-gradient-to-r from-[#632DF8] to-[#A020F0] bg-clip-text text-transparent">
            Productive Apps
          </span>
        </h1>

        {/* Banner Description */}
        <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed">
          At <span className="font-semibold text-slate-900">HERO.IO</span>, we
          craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital
          experiences that truly make an impact.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {/* Google Play Button */}
          <button className="flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3.5 text-white shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-slate-900/25 hover:-translate-y-0.5">
            <BiLogoPlayStore className="text-2xl text-emerald-400" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-slate-300">
                Get it on
              </span>
              <span className="text-sm font-semibold leading-tight">
                Google Play
              </span>
            </div>
          </button>

          {/* App Store Button */}
          <button className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#632DF8] to-[#A020F0] px-6 py-3.5 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:opacity-95 hover:shadow-purple-500/35 hover:-translate-y-0.5">
            <FaAppStoreIos className="text-2xl" />
            <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase tracking-wider text-purple-100">
                Download on the
              </span>
              <span className="text-sm font-semibold leading-tight">
                App Store
              </span>
            </div>
          </button>
        </div>

        {/* Hero Image Section (Centered directly below buttons) */}
        <div className="relative mt-12 flex justify-center w-full max-w-3xl">
          {/* Subtle Background Glow */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#632DF8]/20 to-[#A020F0]/20 blur-3xl -z-10"></div>

          <Image
            src={banner}
            width={600}
            height={400}
            priority
            alt="Hero App Preview"
            className="w-full max-w-lg object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}
