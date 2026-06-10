import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBooking from "@/components/StickyBooking";
import Hero from "@/sections/Hero";
import BrandStory from "@/sections/BrandStory";
import Collections from "@/sections/Collections";
import Portfolio from "@/sections/Portfolio";
import Process from "@/sections/Process";
import SocialFeed from "@/sections/SocialFeed";
import Testimonials from "@/sections/Testimonials";
import BookingCTA from "@/sections/BookingCTA";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <BrandStory />
        <Collections />
        <Portfolio />
        <Process />
        <SocialFeed />
        <Testimonials />
        <BookingCTA />
        <Contact />
      </main>
      <Footer />
      <StickyBooking />
    </>
  );
}
