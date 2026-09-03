import { useEffect, useState } from "react";

import {
  Bell,
  Menu,
  Recycle,
  X,
} from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "How It Works", href: "#works" },
  { name: "AI Detection", href: "#detection" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Impact", href: "#impact" },
  { name: "Technology", href: "#technology" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  /* Scroll detection */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Active section detection */

  useEffect(() => {
    const sectionIds = links.map((link) =>
      link.href.replace("#", "")
    );

    const handleSectionDetection = () => {
      const scrollPosition =
        window.scrollY + 140;

      let currentSection = "home";

      for (const id of sectionIds) {
        const section =
          document.getElementById(id);

        if (!section) continue;

        if (
          scrollPosition >=
          section.offsetTop
        ) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleSectionDetection
    );

    handleSectionDetection();

    return () => {
      window.removeEventListener(
        "scroll",
        handleSectionDetection
      );
    };
  }, []);

  /* Close mobile menu */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        border-b
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-[#070b14]/90 backdrop-blur-xl border-white/10 shadow-lg shadow-black/20"
            : "bg-black/30 backdrop-blur-xl border-white/10"
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          h-20
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <a
          href="#home"
          onClick={closeMobileMenu}
          className="
            flex
            items-center
            gap-3
            shrink-0
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-xl
              bg-cyan-400/10
              border
              border-cyan-400/20
              flex
              items-center
              justify-center
            "
          >
            <Recycle
              className="text-cyan-400"
              size={23}
            />
          </div>

          <div>
            <h1 className="font-bold text-xl">
              Zyphor
            </h1>

            <p className="text-xs text-gray-400 hidden sm:block">
              AI Waste Intelligence
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}

        <div
          className="
            hidden
            lg:flex
            items-center
            gap-1
            text-sm
          "
        >
          {links.map((link) => {
            const sectionId =
              link.href.replace("#", "");

            const isActive =
              activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`
                  relative
                  px-3
                  py-2
                  rounded-lg
                  transition-all
                  duration-300
                  ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                  }
                `}
              >
                {link.name}

                {/* Active Indicator */}

                {isActive && (
                  <span
                    className="
                      absolute
                      left-1/2
                      -bottom-1
                      -translate-x-1/2
                      w-1
                      h-1
                      rounded-full
                      bg-cyan-400
                      shadow-lg
                      shadow-cyan-400/50
                    "
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Controls */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* Notification */}

          <div
            className="
              hidden
              sm:flex
              w-9
              h-9
              rounded-lg
              border
              border-white/10
              bg-white/5
              items-center
              justify-center
            "
          >
            <Bell
              className="text-cyan-400"
              size={18}
            />
          </div>

          {/* Dashboard Button */}

          <a
            href="#dashboard"
            className="
              hidden
              sm:block
              px-4
              py-2
              rounded-xl
              bg-cyan-500
              hover:bg-cyan-400
              hover:-translate-y-0.5
              transition-all
              duration-300
              text-black
              font-semibold
              text-sm
              shadow-lg
              shadow-cyan-500/10
            "
          >
            Launch Dashboard
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="
              lg:hidden
              p-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              transition-all
              duration-300
            "
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}

      {mobileOpen && (
        <div
          className="
            lg:hidden
            border-t
            border-white/10
            bg-[#070b14]/95
            backdrop-blur-xl
          "
        >
          <div
            className="
              px-4
              py-5
              space-y-2
            "
          >

            {links.map((link) => {
              const sectionId =
                link.href.replace("#", "");

              const isActive =
                activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/10"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-white/5"
                    }
                  `}
                >
                  <span>
                    {link.name}
                  </span>

                  {isActive && (
                    <span
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-cyan-400
                      "
                    />
                  )}
                </a>
              );
            })}

            {/* Mobile Dashboard */}

            <a
              href="#dashboard"
              onClick={closeMobileMenu}
              className="
                block
                text-center
                mt-3
                px-4
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-400
                text-black
                font-semibold
                transition-all
                duration-300
              "
            >
              Launch Dashboard
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}