import { HelmetProvider } from 'react-helmet-async';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <HelmetProvider>
      <div className="app-container">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <Testimonials />
          <CTASection />
          <InstagramFeed />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
