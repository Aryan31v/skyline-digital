import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Lazy load project demos from their direct source folders
const RestaurantDemo = lazy(() => import('./websites/RESTAURANT/src/App'));
const EcommerceDemo = lazy(() => import('./websites/E_COMMERCE/src/App'));
const CorporateDemo = lazy(() => import('./websites/CORPORATE_WEBSITE/src/App'));
const PersonalPortfolioDemo = lazy(() => import('./websites/PORTFOLIO/src/App'));
const ClinicDemo = lazy(() => import('./websites/CLINIC/src/App'));
const GymDemo = lazy(() => import('./websites/GYM_WEBSITE/src/App'));

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-6 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Oops! This demo failed to load</h2>
      <p className="text-slate-600 mb-8 max-w-md">{error.message}</p>
      <button
        onClick={() => {
          resetErrorBoundary();
          window.location.href = '/';
        }}
        className="px-8 py-4 bg-sky-500 text-white rounded-full font-bold shadow-lg hover:bg-sky-600 transition-all hover:scale-105 active:scale-95"
      >
        Return to Home
      </button>
    </div>
  );
}

function Home() {
  useScrollAnimation();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Pricing />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on every route change
    window.scrollTo(0, 0);
    
    // Trigger a window resize event to force scroll-reveal libraries to recalculate
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      // Also trigger a scroll event
      window.dispatchEvent(new Event('scroll'));
}, 100);

    // Update Document Title
    const path = location.pathname.substring(1);
    document.title = path 
      ? `${path.charAt(0).toUpperCase() + path.slice(1)} Demo — Landing Page`
      : 'Landing Page — Professional Website Design';
}, [location]);

  const handleBack = () => {
    navigate('/');
    // Scroll to portfolio section after returning
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="font-sans antialiased">
      <CustomCursor />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate('/')}>
        <Suspense fallback={
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-6">
            <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin shadow-lg shadow-sky-500/20"></div>
            <div className="text-center">
              <p className="font-black tracking-widest uppercase text-sm mb-2 animate-pulse">Entering Demo</p>
              <p className="text-sky-400 text-xs font-medium uppercase tracking-[0.2em]">{location.pathname.substring(1)}</p>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Restaurant" element={<div className="restaurant-theme"><RestaurantDemo onBack={handleBack} /></div>} />
            <Route path="/Ecommerce" element={<div className="ecommerce-theme"><EcommerceDemo onBack={handleBack} /></div>} />
            <Route path="/Corporate" element={<div className="corporate-theme"><CorporateDemo onBack={handleBack} /></div>} />
            <Route path="/Portfolio" element={<div className="portfolio-theme"><PersonalPortfolioDemo onBack={handleBack} /></div>} />
            <Route path="/Clinic" element={<div className="clinic-theme"><ClinicDemo onBack={handleBack} /></div>} />
            <Route path="/Gym" element={<div className="gym-theme"><GymDemo onBack={handleBack} /></div>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
