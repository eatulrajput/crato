import heroImg from "@/assets/hero-crato.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Bot, Camera, Mic, ShieldCheck, Watch, Zap } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Nav = () => (
  <header className="w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 sticky top-0 z-40">
    <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2">
        <div aria-hidden className="size-6 rounded-md bg-accent" />
        <span className="font-semibold tracking-tight">Crato</span>
      </a>
      <div className="hidden sm:flex items-center gap-4 text-sm">
        <a href="#how" className="story-link">How it works</a>
        <a href="#features" className="story-link">Features</a>
        <a href="#demo" className="story-link">Demo</a>
      </div>
      <a href="#waitlist" className="ml-3">
        <Button variant="accent" size="sm" className="hover-scale">Join waitlist</Button>
      </a>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:pt-16 sm:pb-16">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6 animate-enter">
        <h1 className="font-display text-4xl sm:text-5xl leading-tight">
          Real-time conversational coaching for runners
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg">
          Crato is a voice-first AI coach that adapts to your fatigue, sleep, and performance — giving short, specific cues as you run.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="#demo"><Button variant="hero" size="lg" className="hover-scale">Try the demo</Button></a>
          <a href="#waitlist"><Button variant="outline" size="lg" className="hover-scale">Join waitlist</Button></a>
        </div>
        <ul className="text-sm text-muted-foreground grid grid-cols-2 gap-y-2 max-w-md">
          <li className="flex items-center gap-2"><Mic className="text-accent" /> Voice-first cues</li>
          <li className="flex items-center gap-2"><Watch className="text-accent" /> Wearable-aware</li>
          <li className="flex items-center gap-2"><Camera className="text-accent" /> Quick form check</li>
          <li className="flex items-center gap-2"><ShieldCheck className="text-accent" /> Privacy-first</li>
        </ul>
      </div>
      <div className="relative">
        <div className="rounded-xl overflow-hidden shadow-elevated">
          <img
            src={heroImg}
            alt="Crato AI running coach – minimalist runner with electric blue accents"
            loading="eager"
            decoding="async"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
    <header className="mb-6">
      <h2 className="text-2xl font-semibold">How it works</h2>
    </header>
    <div className="grid sm:grid-cols-3 gap-6">
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="size-9 rounded-md bg-accent/10 text-accent grid place-items-center mb-3">
          <Watch size={18} />
        </div>
        <h3 className="font-medium mb-1">Connect your wearable</h3>
        <p className="text-sm text-muted-foreground">Pair your watch or band. Crato reads heart rate, pace, and sleep.</p>
      </article>
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="size-9 rounded-md bg-accent/10 text-accent grid place-items-center mb-3">
          <Mic size={18} />
        </div>
        <h3 className="font-medium mb-1">Start your run & talk</h3>
        <p className="text-sm text-muted-foreground">Ask questions hands-free. Get concise cues in real-time.</p>
      </article>
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="size-9 rounded-md bg-accent/10 text-accent grid place-items-center mb-3">
          <Camera size={18} />
        </div>
        <h3 className="font-medium mb-1">Quick form check</h3>
        <p className="text-sm text-muted-foreground">Use your phone camera for a 10-second form scan before or after.</p>
      </article>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
    <header className="mb-6">
      <h2 className="text-2xl font-semibold">Built for reliability, UX, and innovation</h2>
    </header>
    <div className="grid sm:grid-cols-2 gap-6">
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="flex items-center gap-2 mb-2"><ShieldCheck className="text-accent" /><h3 className="font-medium">Reliable coaching</h3></div>
        <p className="text-sm text-muted-foreground">Grounded responses with clear guardrails. Cues adapt to fatigue, terrain, and weather context.</p>
      </article>
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="flex items-center gap-2 mb-2"><Zap className="text-accent" /><h3 className="font-medium">Delightful UX</h3></div>
        <p className="text-sm text-muted-foreground">Voice-first, hands-free. Short, actionable messages that never overload.</p>
      </article>
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="flex items-center gap-2 mb-2"><Bot className="text-accent" /><h3 className="font-medium">Technical innovation</h3></div>
        <p className="text-sm text-muted-foreground">On-device wake-word, real-time metric fusion, and lightweight vision for basic form checks.</p>
      </article>
      <article className="p-5 rounded-lg border bg-card/50">
        <div className="flex items-center gap-2 mb-2"><Camera className="text-accent" /><h3 className="font-medium">Thoughtful execution</h3></div>
        <p className="text-sm text-muted-foreground">Privacy-first design and clear opt-ins. Battery-aware coaching modes for long runs.</p>
      </article>
    </div>
  </section>
);

const Demo = () => (
  <section id="demo" className="mx-auto max-w-6xl px-4 pb-12 sm:pb-16">
    <header className="mb-6">
      <h2 className="text-2xl font-semibold">Watch a short demo</h2>
      <p className="text-sm text-muted-foreground">60–120s walk-through of Crato in action.</p>
    </header>
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full overflow-hidden rounded-xl border bg-card/60 hover-scale shadow-elevated">
          <div className="relative">
            <img src={heroImg} alt="Crato demo poster" loading="lazy" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="px-4 py-2 rounded-full bg-accent text-accent-foreground font-medium shadow-glow">Play demo</div>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Crato demo preview</DialogTitle>
        </DialogHeader>
        <div className="rounded-lg overflow-hidden border">
          <div className="bg-hero min-h-[220px] sm:min-h-[360px] grid place-items-center text-primary-foreground">
            <div className="text-center px-6 py-10">
              <p className="font-display text-2xl mb-3">“Relax your shoulders. Cadence steady. Nice work.”</p>
              <p className="text-sm opacity-90">This preview simulates the voice demo. Full video coming soon.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
);

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter an email");
    toast.success("You're on the list. Thanks for your interest!");
    setEmail("");
    setLevel("");
  };

  return (
    <section id="waitlist" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="rounded-xl border bg-card/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold mb-2">Join the waitlist</h2>
        <p className="text-sm text-muted-foreground mb-6">Be first to try Crato and help shape the roadmap. No spam.</p>
        <form onSubmit={onSubmit} className="grid sm:grid-cols-6 gap-3 items-end">
          <div className="sm:col-span-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" aria-label="Email address" />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="level">Running level</Label>
            <Input id="level" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="e.g., 5k, marathon" aria-label="Running level" />
          </div>
          <div className="sm:col-span-1 flex">
            <Button type="submit" variant="accent" className="w-full">Sign up</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground">
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
      <p>© {new Date().getFullYear()} Crato Labs</p>
      <div className="flex items-center gap-4">
        <a href="#how" className="story-link">How it works</a>
        <a href="#features" className="story-link">Features</a>
        <a href="#demo" className="story-link">Demo</a>
      </div>
    </div>
  </footer>
);

const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Crato Labs",
        "url": "/",
        "brand": { "@type": "Brand", "name": "Crato" }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Crato",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "iOS, Android",
        "abstract": "Real-time conversational coaching for runners.",
        "description": "Voice-first AI running coach delivering real-time cues based on wearable metrics and brief form analysis.",
        "offers": { "@type": "Offer", "price": 0, "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How does Crato work?", "acceptedAnswer": { "@type": "Answer", "text": "Connect your wearable, start your run, and talk to Crato. It provides short, adaptive cues based on your metrics and quick form checks." } },
          { "@type": "Question", "name": "Is this medical advice?", "acceptedAnswer": { "@type": "Answer", "text": "No. Crato offers general coaching cues and is not a substitute for professional medical advice." } }
        ]
      }
    ]
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
};

const Index = () => {
  return (
    <main>
      <StructuredData />
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Demo />
      <Waitlist />
      <Footer />
    </main>
  );
};

export default Index;
