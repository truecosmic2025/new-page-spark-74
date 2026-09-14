import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { openClauddeWidget } from "@/lib/claudde";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/80 via-[#16213e]/70 to-[#0f3460]/80" />
      
      {/* Animated purple to cyan gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-500/5 animate-gradient" />
      
      {/* Radial glow effect */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl animate-pulse-slow" />
      
      <div className="container relative z-10 max-w-5xl mx-auto text-center">
        {/* Main headline */}
        <h1 className="mb-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Change the Voice Inside —{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Change the Life Outside
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mb-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Book a <span className="text-primary font-semibold">free 30-minute clarity consult</span> with <span className="font-semibold text-foreground">Cheryl Andrisani</span>. We'll identify your main bottleneck, craft a clean End sentence, and recommend the right coaching path using Neville's <span className="font-semibold text-foreground">Inner Conversations</span> and <span className="font-semibold text-foreground">Self-Concept</span> methods.
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-muted-foreground">
          <span>Judgment-free</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Neville methods</span>
          <span className="text-muted-foreground/50">•</span>
          <span>Practical micro steps</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg h-14"
            onClick={() => {
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              openClauddeWidget();
            }}
          >
            Book Your Clarity Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-foreground/30 text-foreground hover:bg-foreground/10 px-8 text-lg h-14"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn How Inner Conversations Work
          </Button>
        </div>

        {/* Micro-copy */}
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto italic">
          It's a diagnostic consult—not a full coaching session. If a program fits, we'll recommend it—no pressure.
        </p>
      </div>
    </section>
  );
};
