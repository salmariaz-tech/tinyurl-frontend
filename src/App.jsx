import React from 'react';
import './index.css';
import Header from './components/Header';
import ShortenerForm from './components/ShortenerForm';
import Footer from './components/Footer';
import { FaChartLine, FaGlobe, FaLayerGroup } from "react-icons/fa6";

function App() {
  return (
    <div className="bg-[#2F7D96] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col lg:flex-row items-start gap-10 px-8 py-10">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10">
          
          {/* Left Column - Form */}
          <div className="flex-[1.6] flex flex-col items-center">
            <ShortenerForm />
            <p className="text-xs text-gray-200 mt-3 max-w-lg">
              By clicking Shorten URL, I agree to the <span className="underline cursor-pointer">Terms of Service</span>,{" "}
              <span className="underline cursor-pointer">Privacy Policy</span> and{" "}
              <span className="underline cursor-pointer">Use of Cookies</span>.
            </p>
          </div>

          {/* Middle Column - Text */}
          <div className="flex-[1.4] space-y-6 text-white lg:pl-4 self-start leading-[2]">
            <h2 className="text-3xl font-bold">The Original URL Shortener</h2>
            <p>Create shorter URLs with TinyURL!</p>
            <p>
              Want more out of your link shortener? Track link analytics, use branded
              domains for fully custom links, and manage your links with our paid plans.
            </p>
            <div className="flex gap-4">
              <button className="border-white px-4 py-2 rounded hover:bg-white text-blue-500">
                View Plans
              </button>
              <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200">
                Create Free Account
              </button>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaChartLine className="mt-1 shrink-0 text-[#f2f7f8]" size={20} />
                <span>Detailed Link Analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <FaGlobe className="mt-1 shrink-0 text-[#f1f6f7]" size={20} />
                <span>Fully Branded Domains</span>
              </li>
              <li className="flex items-start gap-3">
                <FaLayerGroup className="mt-1 shrink-0 text-[#f5f7f8]" size={20} />
                <span>Bulk Short URLs</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Empty Space */}
          <div className="flex-[0.8]"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
