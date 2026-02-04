import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/kryptonite-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Achievements", id: "achievements" },
    { label: "FIRST", id: "first" },
    { label: "Team", id: "team" },
    { label: "Sponsors", id: "sponsors" },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] md:w-auto md:min-w-[600px] rounded-full border ${isScrolled
          ? "bg-background/80 backdrop-blur-xl border-primary/20 shadow-[0_0_20px_rgba(0,255,136,0.1)]"
          : "bg-transparent border-transparent"
          }`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => scrollToSection("home")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/50 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img src={logo} alt="Team Kryptonite Logo" className="relative h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]" />
              </div>
              <span className="font-bold text-base md:text-lg tracking-tight group-hover:text-primary transition-colors hidden sm:inline">
                KRYPTONITE
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-full hover:bg-primary/10 group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
              <div className="w-px h-6 bg-border mx-2" />
              <div className="inline-flex items-center gap-2 px-3 py-2 text-xs sm:text-sm bg-primary/10 text-primary rounded-full font-semibold border border-primary/30">
                team.kryptonite.28078.ftc@gmail.com
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-primary/10 text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex items-center justify-center animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 w-full max-w-xs px-4 text-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-2xl font-bold text-foreground hover:text-primary transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <div className="w-full inline-flex items-center justify-center h-11 px-6 bg-primary/10 text-primary mt-4 rounded-full font-bold text-sm border border-primary/30">
              team.kryptonite.28078.ftc@gmail.com
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
