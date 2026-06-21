import { Hero } from './Hero.js';
import { Vision } from './Vision.js';
import { Footer } from './Footer.js';

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Vision />
      <Footer />
    </div>
  );
}
