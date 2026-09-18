import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { openClauddeWidget } from "@/lib/claudde";
import { Check, X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "You catch yourself rehearsing worst-case scenarios in your head.",
    "Your self-talk flips between hopeful and harsh—so your actions stall.",
    "You've read Neville but you're not consistent day to day.",
    "You're ready to upgrade your self-concept, not just your goals.",
  ];

  const solutions = [
    "A quick diagnostic of your primary bottleneck.",
    "A clear End sentence (already-done outcome).",
    "One recommended technique to start (Inner Speech, SATS, or Revision).",
    "A personal recommendation for the best coaching path to make it stick.",
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Purple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f3460] via-[#1a1a2e] to-[#16213e]" />
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Is this you? */}
          <Card className="bg-card/50 backdrop-blur border-border/50">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Is this you?</h2>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* What changes here */}
          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-6 text-foreground">What changes here:</h2>
              <ul className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => {
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  openClauddeWidget();
                }}
              >
                Book Your Clarity Consultation
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
