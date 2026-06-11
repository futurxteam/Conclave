import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { WhyAttend } from '../components/WhyAttend';
import { EventOverview } from '../components/EventOverview';
import { DomainsCovered } from '../components/DomainsCovered';
import { Speakers } from '../components/Speakers';
import { CareerDevelopment } from '../components/CareerDevelopment';
import { Networking } from '../components/Networking';
import { CulturalAndKPSA } from '../components/CulturalAndKPSA';
import { Agenda } from '../components/Agenda';
import { Ticket } from '../components/Ticket';
import { VenueInfo } from '../components/VenueInfo';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-white/60 backdrop-blur-sm border-t border-slate-200">
        <About />
        <WhyAttend />
        <EventOverview />
        <DomainsCovered />
        <Speakers />
        <CareerDevelopment />
        <Networking />
        <CulturalAndKPSA />
        <Agenda />
        <Ticket />
        <VenueInfo />
        <FAQ />
        <Contact />
      </div>
    </>
  );
}
