import React from "react";
// If you have a logo, import and use <img src={logo} .../> instead of text

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content border-t border-base-300 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">

          {/* Brand/Logo */}
          <div className="flex-1 flex items-center space-x-2">
            {/* Replace with your logo if you have one */}
            <img src="sow_requirement.jpg" className="h-[80px] w-[100px]"/>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex flex-col md:flex-row md:justify-center gap-4 md:gap-8 text-base">
            <a href="#about" className="hover:text-orange-500 transition">About</a>
            <a href="#programs" className="hover:text-orange-500 transition">Programs</a>
            <a href="#stories" className="hover:text-orange-500 transition">Stories</a>
            <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
          </nav>

          {/* Social & Contact */}
          <div className="flex-1 flex flex-col md:items-end gap-4">
            <div className="flex space-x-4">
              {/* DaisyUI social buttons */}
              <a href="https://facebook.com" className="btn btn-circle btn-sm btn-ghost" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" className="btn btn-circle btn-sm btn-ghost" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com" className="btn btn-circle btn-sm btn-ghost" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="mailto:info@skillsonwheels.org" className="btn btn-circle btn-sm btn-ghost" aria-label="Mail">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <address className="not-italic text-sm text-gray-500">
              Mumbai, India <br /> info@skillsonwheels.org
            </address>
          </div>
        </div>
        <hr className="my-6 border-base-300" />
        <div className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Skills on Wheels. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
