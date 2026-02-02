import { Mail } from "lucide-react";
import logo from "@/assets/kryptonite-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl pt-20 pb-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Team Kryptonite" className="h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 object-contain drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]" />
              <div>
                <h3 className="font-bold text-lg sm:text-xl tracking-tight text-white">TEAM KRYPTONITE</h3>
                <p className="text-primary text-sm font-mono">#28078</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Pushing the boundaries of robotics and engineering. Champions of APOC 2025.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:team.kryptonite.28078.ftc@gmail.com?cc=Shauryasule17@gmail.com&subject=Contact%20Team%20Kryptonite"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/70 hover:bg-primary hover:text-black transition-all duration-300 hover:-translate-y-1 text-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">Contact Us</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {["Home", "Achievements", "FIRST", "Team", "Sponsors"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 scale-0 group-hover:scale-100 transition-transform" />
                  FIRST Tech Challenge
                </a>
              </li>
              <li>
                <a href="https://ftc-resources.firstinspires.org/ftc/game" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 scale-0 group-hover:scale-100 transition-transform" />
                  Game Manual
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 FTC Team Kryptonite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
