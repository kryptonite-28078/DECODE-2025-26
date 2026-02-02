import { Card, CardContent } from "@/components/ui/card";
import { Handshake, ArrowRight, Star, Globe, Zap, Cpu, Leaf } from "lucide-react";
import uplLogo from "@/assets/sponsors/upl-logo.png";
import tisLogo from "@/assets/sponsors/tis-logo.png";
import daisLogo from "@/assets/sponsors/dais-logo.png";
import jioLogo from "@/assets/sponsors/jiohotstar-logo.png";

const sponsors = [
  {
    name: "UPL OpenAg",
    logo: uplLogo,
    icon: Leaf,
    description: "Reimagining sustainability for the world's food systems.",
    color: "text-orange-500",
    glowColor: "group-hover:translate-y-[-5px] shadow-[0_0_20px_rgba(249,115,22,0.3)]",
    borderColor: "border-orange-500/30",
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
  },
  {
    name: "The Innovation Story",
    logo: tisLogo,
    icon: Cpu,
    description: "Empowering young minds through technology and innovation.",
    color: "text-cyan-400",
    glowColor: "group-hover:translate-y-[-5px] shadow-[0_0_20px_rgba(34,211,238,0.3)]",
    borderColor: "border-cyan-400/30",
    gradient: "from-cyan-400/20 via-cyan-400/5 to-transparent",
  },
  {
    name: "Dhirubhai Ambani International School",
    logo: daisLogo,
    icon: Globe,
    description: "Dare to Dream, Learn to Excel.",
    color: "text-blue-600",
    glowColor: "group-hover:translate-y-[-5px] shadow-[0_0_20px_rgba(37,99,235,0.3)]",
    borderColor: "border-blue-600/30",
    gradient: "from-blue-600/20 via-blue-600/5 to-transparent",
  },
  {
    name: "JioHotstar",
    logo: jioLogo,
    icon: Zap,
    description: "Leading digital entertainment and connectivity.",
    color: "text-indigo-500",
    glowColor: "group-hover:translate-y-[-5px] shadow-[0_0_20px_rgba(99,102,241,0.3)]",
    borderColor: "border-indigo-500/30",
    gradient: "from-indigo-500/20 via-indigo-500/5 to-transparent",
  },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 sm:py-24 px-4 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "12s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md">
            <Handshake className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-widest uppercase">Our Partners</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              POWERED BY
            </span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary text-glow animate-gradient-x">
              EXCELLENCE
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our journey is supported by visionary organizations committed to the future of technology and education.
          </p>
        </div>

        {/* Balanced Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20">
          {sponsors.map((sponsor, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-0 bg-white/5 backdrop-blur-xl transition-all duration-500 group h-full ${sponsor.glowColor} hover:bg-white/10`}
            >
              {/* Gradient Border Overlay */}
              <div className={`absolute inset-0 border ${sponsor.borderColor} rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Internal Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sponsor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <CardContent className="p-6 flex flex-col items-center text-center h-full relative z-10">
                {/* Logo Container */}
                <div className="bg-white p-6 rounded-2xl shadow-xl mb-6 w-full aspect-[4/3] flex items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-50" />
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="relative max-w-[90%] max-h-[90%] object-contain filter transition-all duration-500"
                  />
                </div>

                <div className={`mb-3 p-2 rounded-full bg-white/5 border border-white/10 ${sponsor.color}`}>
                  <sponsor.icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{sponsor.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{sponsor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gratitude Card */}
          <Card className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 overflow-hidden backdrop-blur-3xl group relative">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center">
              <Star className="w-10 h-10 text-primary mb-4 animate-[spin_5s_linear_infinite]" />
              <h3 className="text-2xl font-bold text-white mb-3">Ideally Supported</h3>
              <p className="text-muted-foreground leading-relaxed">
                We extend our deepest gratitude to our sponsors. Your investment in youth robotics creates
                <span className="text-primary font-semibold"> future innovators</span>.
              </p>
            </CardContent>
          </Card>

          {/* Become Sponsor Card */}
          <Card className="bg-card/50 border border-white/10 overflow-hidden backdrop-blur-3xl group relative">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Join the Mission</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Help us inspire the next generation of engineers and leaders.
              </p>

              <a
                href="mailto:team.kryptonite.28078.ftc@gmail.com?cc=Shauryasule17@gmail.com&subject=Sponsorship%20Inquiry%20-%20Team%20Kryptonite"
                className="inline-flex items-center justify-center h-12 px-6 w-full bg-primary text-black font-bold hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:scale-[1.02] transition-all duration-300 rounded-xl"
              >
                Become a Sponsor
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
