import React from "react";
// If you have a logo, import and use <img src={logo} .../> instead of text
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
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
            <Link to="/our-story" className="hover:text-orange-500 transition">About</Link>
            <Link to="/skills-on-wheels-story" className="hover:text-orange-500 transition">Programs</Link>
            <Link to="/stories" className="hover:text-orange-500 transition">Stories</Link>

          </nav>

          {/* Social & Contact */}
          <div className="flex-1 flex flex-col md:items-end gap-4">
            <div className="flex space-x-4">
              {/* DaisyUI social buttons */}
              <a href="https://www.facebook.com/lendahandindia/about/" className="btn btn-circle btn-sm  text-black" aria-label="Facebook" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/lendahandindia/" className="btn btn-circle btn-sm  text-black" aria-label="Instagram" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://x.com/lendahandindia" className="btn btn-circle btn-sm  text-black" aria-label="Twitter" target="_blank">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
              <a href="mailto:lahi@lend-a-hand-india.org" className="btn btn-circle btn-sm text-black" aria-label="Mail" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
            <address className="not-italic text-sm text-gray-500">
              Mumbai, India <br />lahi@lend-a-hand-india.org
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
