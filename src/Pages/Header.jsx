import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaSearch } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';

const navLinks = [
  {
    label: "ABOUT US",
    submenu: [
      { label: "Our Story", url: "#" },
      { label: "Team", url: "#" },
    ]
  },
  {
    label: "PROGRAMS",
    submenu: [
      { label: "Youth Empowerment", url: "#" },
      { label: "Leadership Academy", url: "#" },
    ]
  },
  { label: "GET INVOLVED", url: "#" },
  { label: "RESOURCES", url: "#" },
  { label: "CONTACT", url: "#" },
];

const socialLinks = [
  { icon: <FaFacebookF size={21} />, url: "https://facebook.com", label: "Facebook" ,color:"primary" },
  { icon: <FaLinkedinIn size={21} />, url: "https://linkedin.com", label: "LinkedIn",color:"primary" },
  { icon: <AiFillYoutube size={24} />, url: "https://youtube.com", label: "YouTube" ,color:"red"},
  { icon: <FaInstagram size={21} />, url: "https://instagram.com", label: "Instagram" ,color:"pink"},
  { icon: <BsTwitterX size={21} />, url: "https://x.com", label: "Twitter(X)" }
];

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  function handleSearchIconClick() {
    setSearchOpen((v) => !v);
  }

  function handleBlur() {
    // Delay to allow clicking search button before closing
    setTimeout(() => setSearchOpen(false), 150);
  }

  return (
    <>
      <nav className="navbar shadow-sm bg-base-100 fixed top-0 left-0 right-0 z-50 px-2 sm:px-6 py-3 border-amber-600 border-b-4">
        <div className="navbar-start">
          {/* Hamburger menu dropdown on mobile */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-2">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-30 p-4 shadow bg-base-100 rounded-box w-56 font-serif flex flex-col gap-2"
            >
              {navLinks.map((item, idx) =>
                item.submenu ? (
                  <li key={idx} tabIndex={0}>
                    <details>
                      <summary>{item.label}</summary>
                      <ul className="bg-base-200 rounded p-2">
                        {item.submenu.map(sub => (
                          <li key={sub.label}><a href={sub.url}>{sub.label}</a></li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={idx}><a href={item.url}>{item.label}</a></li>
                )
              )}
              {/* Social Icons inside hamburger */}
              <li className="flex gap-4 my-2">
                {socialLinks.map(({ icon, url, label,color}) => (
                  <a
                    href={url}
                    aria-label={label}
                    key={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {icon}
                  </a>
                ))}

                {/* Search icon inside hamburger */}
                <button
                  aria-label="Search"
                  onClick={handleSearchIconClick}
                  className={`p-2 rounded-full hover:bg-base-200 transition-colors focus:outline-none ${searchOpen ? 'bg-base-200' : ''} text-amber-700`}
                >
                  <FaSearch size={20} />
                </button>
              </li>

              {/* Search input inside hamburger, visible on toggle */}
              {searchOpen && (
                <li className="w-full">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search..."
                    className="input input-bordered w-full shadow-md"
                    onBlur={handleBlur}
                    autoFocus
                  />
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <a href="/" className="btn btn-ghost p-0 normal-case text-2xl flex items-center gap-2">
            <img
              src="./Lahi_Logo.png"
              alt="Lahi Logo"
              className="h-12 w-auto object-contain"
            />
          </a>
        </div>

        {/* Main nav (desktop only) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-serif gap-2">
            {navLinks.map((item, idx) =>
              item.submenu ? (
                <li key={idx}>
                  <details>
                    <summary className="px-2">{item.label}</summary>
                    <ul className="bg-base-200 rounded p-2 shadow">
                      {item.submenu.map(sub => (
                        <li key={sub.label}><a href={sub.url}>{sub.label}</a></li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={idx}><a href={item.url} className="px-2">{item.label}</a></li>
              )
            )}
          </ul>
        </div>

        {/* Social icons + search on desktop */}
        <div className="navbar-end gap-x-1.5 items-center relative hidden lg:flex">
          {socialLinks.map(({ icon, url, label }) => (
            <a
              href={url}
              aria-label={label}
              key={label}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              {icon}
            </a>
          ))}
          {/* Search icon */}
          <button
            aria-label="Search"
            onClick={handleSearchIconClick}
            className={`ml-2 p-2 rounded-full hover:bg-base-200 transition-colors focus:outline-none ${searchOpen ? 'bg-base-200' : ''} text-amber-700`}
          >
            <FaSearch size={20} />
          </button>
          {/* Search input on desktop, inline */}
          <div
            className={`transition-all duration-300 ml-2 overflow-hidden ${searchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}
            style={{ transitionProperty: "width, opacity" }}
          >
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs shadow-md"
              onBlur={handleBlur}
              autoFocus={searchOpen}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
