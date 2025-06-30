// src/App.jsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import StudentBenefitsSection from './components/StudentBenefitsSection';
import RecruiterBenefitsSection from './components/RecruiterBenefitsSection';
import VerificationFeatures from './components/VerificationFeatures';
import WhoIsItForSection from './components/WhoIsItForSection';
import CTASection from './components/CTASection';
import FAQsSection from './components/FAQsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative"> 
      <Navbar />
      <main>
        {/* We can remove the top padding from HeroSection and control it here if needed */}
        <HeroSection />
        <HowItWorksSection />
        <StudentBenefitsSection />
        <RecruiterBenefitsSection />
        <WhoIsItForSection />
        <VerificationFeatures />
        <CTASection />
        <FAQsSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;