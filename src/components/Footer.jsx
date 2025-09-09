import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#012C4B] text-white text-sm   py-4  border-t border-[#0980A1]">
      <p>
        © TinyURL LLC •{" "}
        <a href="#" className="hover:underline">
          Terms
        </a>{" "}
        •{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        •{" "}
        <a href="#" className="hover:underline">
          Accessibility
        </a>
      </p>
    </footer>
  );
};

export default Footer;
