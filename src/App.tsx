import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { useReducedMotion } from './hooks/useReducedMotion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { GrainOverlay } from './components/GrainOverlay';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Arena } from './components/Arena';
import { CourtExperience } from './components/CourtExperience';
import { SpeedSection } from './components/SpeedSection';
import { Booking } from './components/Booking';
import { Pricing } from './components/Pricing';
import { Tournament } from './components/Tournament';
import { MatchExperience } from './components/MatchExperience';
import { Players } from './components/Players';
import { Community } from './components/Community';
import { SocialWall } from './components/SocialWall';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReduced = useReducedMotion();

  // Initialize Lenis smooth scroll (disabled if user prefers reduced motion)
  useLenis(!prefersReduced);

  const handleOpenBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F2] font-sans antialiased selection:bg-[#B6FF00] selection:text-[#050505]">
      {/* 2.3s Preloader with SVG pitch drawing animation */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      {/* Cinematic Film Grain Overlay */}
      <GrainOverlay />

      {/* Dynamic Contextual Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Navbar with Scroll Detection & Magnetic CTA */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Section 00: Hero Showcase */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Section 01: The Arena */}
        <Arena />

        {/* Section 02: Court Experience */}
        <CourtExperience />

        {/* Special Animation: The Speed of the Game */}
        <SpeedSection />

        {/* Section 03: Direct Booking Console */}
        <Booking />

        {/* Section 04: Match Packages & Pricing */}
        <Pricing onSelectPlan={handleOpenBooking} />

        {/* Section 05: Vortex Night Cup Tournament */}
        <Tournament />

        {/* Section 06: Live Match Experience & Scoreboard */}
        <MatchExperience />

        {/* Section 07: Meet the Players */}
        <Players />

        {/* Section 08: Community & Storytelling */}
        <Community />

        {/* Section 09: Social Wall & Highlights */}
        <SocialWall />

        {/* Section 10: Final Stadium CTA */}
        <FinalCTA onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
