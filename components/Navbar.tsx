"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const routes = [
    {
      name: "Events",
      subRoutes: [
        {
          title: "The Hyperloop Way",
          desc: "High-Value online lectures!",
          path: "/events/lecture-series",
        },
        {
          title: "Parivahan",
          desc: "Global Hyperloop Conference",
          path: "/events/ghc1.0",
        },
      ],
    },
    {
      name: "About",
      subRoutes: [
        {
          title: "Our Mission",
          desc: "Learn about our Vision & Mission",
          path: "/about/mission",
        },
        {
          title: "Activity",
          desc: "Checkout our social feed",
          path: "/about/activity",
        },
        {
          title: "Team",
          desc: "People behind the event!",
          path: "/about/team",
        },
      ],
    },
    { name: "Contact Us", path: "/contact" },
    {
      name: "Register Now",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSc-4zCoSoO9dz2pCwnB7gQ-HQbJhXYyj18DOgYVKfCYYTKiEw/viewform",
    },
    { name: "Documents", path: "/documents" },
    { name: "Categories", path: "/categories" },
    { name: "GHC 2025 Gallery", path: "/gallery" },
  ];

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[1200px]
        px-6 py-3 flex flex-wrap justify-between items-center 
        rounded-2xl border border-white/15 backdrop-blur-2xl 
        bg-[rgba(15,15,20,0.35)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]
        z-[1000] transition-all duration-500
        ${menuOpen ? "bg-transparent border-none" : ""}
      `}
    >
      <Link href="/" className="flex items-center gap-2 z-[3001]">
        <img
          src="/GHC-logo.png"
          alt="GHC Logo"
          className="w-10 h-auto cursor-pointer transition-transform duration-300 drop-shadow-[0_0_6px_rgba(255,255,255,0.25)] hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]"
        />
      </Link>

      <ul className="hidden lg:flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-white font-medium text-[1.05rem] w-full lg:w-auto">
        {routes.map((route) => (
          <li
            key={route.name}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(route.name)}
            onMouseLeave={handleMouseLeave}
          >
            {route.subRoutes ? (
              <>
                <span className="cursor-pointer hover:text-cyan-400 transition-colors">
                  {route.name}
                </span>
                <ul
                  className={`absolute left-0 top-full mt-2 bg-[rgba(15,15,15,0.9)] backdrop-blur-xl border border-white/10 rounded-xl transform transition-all duration-300 shadow-xl min-w-[260px] p-2 ${
                    hoveredMenu === route.name
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-2 pointer-events-none"
                  }`}
                >
                  {route.subRoutes.map((sub) => (
                    <li
                      key={sub.title}
                      className="p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <Link href={sub.path}>
                        <div className="text-white font-semibold text-base">
                          {sub.title}
                        </div>
                        <div className="text-gray-400 text-sm">{sub.desc}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                href={route.path || "#"}
                className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {route.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <button
        className="lg:hidden w-10 h-10 flex flex-col justify-center items-center relative z-[3001]"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`absolute h-[2px] w-7 bg-white rounded-full transition-all duration-500 ease-in-out ${
            menuOpen ? "rotate-45" : "-translate-y-[8px]"
          }`}
        ></span>
        <span
          className={`absolute h-[2px] w-7 bg-white rounded-full transition-all duration-500 ease-in-out ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute h-[2px] w-7 bg-white rounded-full transition-all duration-500 ease-in-out ${
            menuOpen ? "-rotate-45" : "translate-y-[8px]"
          }`}
        ></span>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 w-screen h-screen bg-[rgba(10,10,15,0.98)] backdrop-blur-xl z-[9999] 
                       flex flex-col justify-start items-start px-8 pt-24 pb-16 overflow-y-auto"
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex justify-center items-center"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="absolute block w-6 h-[2px] bg-white rotate-45 rounded"></span>
              <span className="absolute block w-6 h-[2px] bg-white -rotate-45 rounded"></span>
            </button>

            <div className="w-full flex justify-center mb-12 mt-4">
              <img
                src="/GHC-logo.png"
                alt="GHC"
                className="w-20 h-auto drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              />
            </div>

            {routes.map((route, i) => (
              <motion.div
                key={route.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="w-full mb-6"
              >
                {route.subRoutes ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenSubMenu(openSubMenu === route.name ? null : route.name)
                      }
                      className="text-3xl font-semibold mb-3 text-white w-full text-left hover:text-cyan-400 transition-colors"
                    >
                      {route.name}
                    </button>
                    <AnimatePresence>
                      {openSubMenu === route.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3 ml-4 overflow-hidden"
                        >
                          {route.subRoutes.map((sub) => (
                            <Link
                              key={sub.title}
                              href={sub.path}
                              onClick={() => setMenuOpen(false)}
                              className="text-gray-400 text-lg hover:text-cyan-400 transition-colors"
                            >
                              <div>{sub.title}</div>
                              <div className="text-sm">{sub.desc}</div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={route.path || "#"}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-semibold text-white hover:text-cyan-400 transition-colors"
                  >
                    {route.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
