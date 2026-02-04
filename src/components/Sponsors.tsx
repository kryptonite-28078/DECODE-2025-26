import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Star, Leaf, Zap, Cpu, Globe } from "lucide-react";
import uplLogo from "@/assets/sponsors/upl-logo.png";
import jioLogo from "@/assets/sponsors/jiohotstar-logo.png";
import tisLogo from "@/assets/sponsors/tis-logo.png";
import daisLogo from "@/assets/sponsors/dais-logo.png";

const primarySponsors = [
  { name: "UPL OpenAg", logo: uplLogo, icon: Leaf },
  { name: "JioHotstar", logo: jioLogo, icon: Zap },
];

const educationSponsors = [
  { name: "The Innovation Story", logo: tisLogo, icon: Cpu },
  { name: "Dhirubhai Ambani International School", logo: daisLogo, icon: Globe },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 sm:py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-0 w-[520px] h-[520px] bg-primary/5 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[620px] h-[620px] bg-blue-500/5 rounded-full blur-[150px] animate-pulse"
          style={{ animationDuration: "12s" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
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
            We raised <span className="text-primary font-semibold">2.6 Lakh</span> with UPL and Hotstar. TIS and DAIS
            are our educational sponsors, shown below in a smaller size.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 max-w-6xl mx-auto mb-16">
          <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary animate-[spin_6s_linear_infinite]" />
                <h3 className="text-xl sm:text-2xl font-bold text-white">Lead Sponsors</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {primarySponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center text-center"
                  >
                    <div className="bg-white rounded-xl shadow-xl w-full h-28 sm:h-32 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-16 sm:h-20 w-auto max-w-[85%] object-contain"
                      />
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary">
                      <sponsor.icon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Handshake className="w-6 h-6 text-primary" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">Educational Sponsors</h3>
              </div>

              <div className="space-y-4">
                {educationSponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 flex items-center gap-4"
                  >
                    <div className="bg-white rounded-lg w-20 h-14 flex items-center justify-center">
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="h-8 w-auto max-w-[85%] object-contain"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-white/90">
                      <sponsor.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-semibold">{sponsor.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 overflow-hidden backdrop-blur-3xl group relative">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center">
              <Star className="w-10 h-10 text-primary mb-4 animate-[spin_5s_linear_infinite]" />
              <h3 className="text-2xl font-bold text-white mb-3">Grateful for Every Partner</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your support powers our build season and gives students real-world engineering experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border border-white/10 overflow-hidden backdrop-blur-3xl group relative">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-8 relative z-10 h-full flex flex-col justify-center items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary">
                  <Handshake className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Join the Mission</h3>
              </div>

              <p className="text-muted-foreground mb-6">Help us inspire the next generation of engineers and leaders.</p>

              <div className="inline-flex items-center justify-center h-12 px-6 w-full bg-primary/10 text-primary font-bold border border-primary/30 rounded-xl">
                team.kryptonite.28078.ftc@gmail.com
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
