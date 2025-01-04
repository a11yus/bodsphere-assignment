"use client";

import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="p-16">
      <div className=" bg-[#ca656b] p-8 flex items-center justify-center rounded-lg">
        <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Left side content */}
          <div className="space-y-6 text-white">
            <h1 className="text-2xl font-semibold">
              Get unlimited access to everything
            </h1>
            <p className="text-sm">
              Unlimited Access to all Yoga Teacher Trainings (World's First and
              Most Affordable and Accessible Trainings)
            </p>
            <ul className="space-y-4">
              {[
                "30-Hrs Yoga Nidra Teacher Training",
                "40-Hrs Chakra Teacher Training",
                "50-Hrs Pranayama Teacher Training",
                "60-hrs Yin Yoga Teacher Training",
                "200-Hrs Yoga Teacher Training",
                "300-Hrs Chakra Teacher Training",
                "Become Certified Yoga Teachers from the comfort of your home",
                "Unlimited Access to trainings on Ayurveda, Anatomy & Physiology, etc",
                "Unlimited Yoga Classes, Meditations, Pranayama & Music",
                "Free Accreditation by Bodsphere to teach Yoga globally",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side pricing card */}
          <div className="bg-white/95 backdrop-blur rounded-lg shadow-xl overflow-hidden p-4">
            <div className="p-4">
              <h2 className="text-xl font-bold">
                Become a part of Bodsphere's Yogic Revolution
              </h2>
            </div>
            <div className="p-2">
              <div className="rounded-lg bg-rose-100 pr-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-start gap-3 w-full max-w-sm p-4">
                    <div className="relative flex items-start">
                      <input
                        type="radio"
                        name="subscription"
                        id="monthly"
                        className="peer appearance-none w-5 h-5 border-2 border-rose-500 rounded-full checked:border-rose-500 checked:bg-white
          checked:before:absolute checked:before:content-[''] checked:before:w-3 checked:before:h-3 checked:before:top-1 checked:before:left-1 
          checked:before:rounded-full checked:before:bg-rose-500"
                      />
                    </div>
                    <label
                      htmlFor="monthly"
                      className="flex flex-col cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        Monthly
                      </span>
                      <span className="text-xs text-gray-500">Pay monthly</span>
                    </label>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 align-top">$</span>
                    <span className="text-2xl font-bold">5</span>
                    <span className="text-sm text-gray-600">/m</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="rounded-lg bg-rose-100 pr-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-start gap-3 w-full max-w-sm p-4">
                    <div className="relative flex items-start">
                      <input
                        type="radio"
                        name="subscription"
                        id="yearly"
                        className="peer appearance-none w-5 h-5 border-2 border-rose-500 rounded-full checked:border-rose-500 checked:bg-white
          checked:before:absolute checked:before:content-[''] checked:before:w-3 checked:before:h-3 checked:before:top-1 checked:before:left-1 
          checked:before:rounded-full checked:before:bg-rose-500"
                      />
                    </div>
                    <label
                      htmlFor="yearly"
                      className="flex flex-col cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-gray-900">
                        Yearly
                      </span>
                      <span className="text-xs text-gray-500">
                        Pay for full year
                      </span>
                    </label>
                  </div>
                  <div>
                    <span className="text-sm text-gray-600 align-top">$</span>
                    <span className="text-2xl font-bold">49</span>
                    <span className="text-sm text-gray-600">/y</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <button className="w-full py-3 px-4 bg-rose-400 hover:bg-rose-500 text-white rounded-full transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
