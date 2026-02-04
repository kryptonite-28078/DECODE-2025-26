import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Sparkles } from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 px-4 relative overflow-hidden bg-black/40">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-bold text-primary tracking-wider uppercase">Our Legacy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              THE
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary text-glow ml-2 sm:ml-4">
              CHAMPIONS
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide">
              APOC Winner
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide">
              Think Award Winner — C V Raman West India Regionals, Mumbai
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-0 bg-black/40 backdrop-blur-xl ring-1 ring-primary/30 shadow-[0_0_50px_rgba(0,255,136,0.15)] group hover:shadow-[0_0_80px_rgba(0,255,136,0.25)] transition-all duration-500">
            {/* Holographic Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-white/10 to-primary/30 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

            <CardContent className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-center text-center relative z-10">
              <div className="mb-6 sm:mb-8 p-4 sm:p-6 rounded-full bg-primary/10 text-primary shadow-[0_0_30px_rgba(0,255,136,0.3)] animate-bounce" style={{ animationDuration: "3s" }}>
                <Trophy className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
              </div>

              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded border border-primary/30 bg-primary/10 text-primary font-mono font-bold text-sm sm:text-base">2025</span>
                <span className="flex items-center gap-1 text-xs sm:text-sm font-bold uppercase tracking-wider text-primary animate-pulse">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" /> Winner
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4 sm:mb-6 text-glow">
                APOC CHAMPIONS
              </h3>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light px-2">
                Overall winners of the prestigious <span className="text-white font-semibold">Asia Pacific Open Championship</span>.
                A historic victory in our rookie year, defining a new standard of excellence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
