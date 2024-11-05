// app/page.tsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoreValues />
    </>
  );
}
