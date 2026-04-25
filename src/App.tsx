import { Suspense, lazy, useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Lazy load project demos
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
      <p className="text-slate-600 mb-8 max-w-md text-sm">{error.message || 'Something went wrong while rendering this demo.'}</p>
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

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => navigate('/');

  useEffect(() => {
    // 1. Listen for postMessage (for iFrame support)
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'BACK_TO_HOME' || event.data?.type === 'BACK_TO_HOME') {
        handleBack();
      }
    };
    window.addEventListener('message', handleMessage);

    // 2. Global Cleanup on Route Change
    if (gsap) {
      ScrollTrigger.getAll().forEach(t => t.kill());
      gsap.killTweensOf("*");
    }
    
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.height = "";
    document.body.className = "font-sans antialiased";

    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }

    const timer = setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      window.dispatchEvent(new Event('scroll'));
      ScrollTrigger.refresh();
    }, 200);

    const path = location.pathname.substring(1);
    document.title = path 
      ? `${path.charAt(0).toUpperCase() + path.slice(1)} Demo — Skyline Digital`
      : 'Skyline Digital — Professional Website Design';

    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <div className="font-sans antialiased">
      <CustomCursor />
      <ErrorBoundary 
        FallbackComponent={ErrorFallback} 
        onReset={() => {
          sessionStorage.removeItem('homeScrollPos');
          navigate('/');
        }}
      >
        <Suspense fallback={
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-6">
            <div className="w-16 h-16 border-4 border-sky-500 border-t-transparent rounded-full animate-spin shadow-lg shadow-sky-500/20"></div>
            <div className="text-center">
              <p className="font-black tracking-widest uppercase text-sm mb-2 animate-pulse">Entering Demo</p>
              <p className="text-sky-400 text-xs font-medium uppercase tracking-[0.2em]">{location.pathname.substring(1) || 'Home'}</p>
            </div>
          </div>
        }>
          <Outlet context={{ handleBack }} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

function Home() {
  useScrollAnimation();
  
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('homeScrollPos');
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);
      const timer = setTimeout(() => {
        window.scrollTo({ top: position, behavior: 'instant' });
        sessionStorage.removeItem('homeScrollPos');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function DemoWrapper({ children, theme }: { children: React.ReactNode, theme: string }) {
  return (
    <div className={`${theme} min-h-screen relative bg-white`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Restaurant" element={<DemoWrapper theme="restaurant-theme"><RestaurantDemo onBack={() => window.dispatchEvent(new MessageEvent('message', { data: 'BACK_TO_HOME' }))} /></DemoWrapper>} />
        <Route path="Ecommerce" element={<DemoWrapper theme="ecommerce-theme"><EcommerceDemo onBack={() => window.dispatchEvent(new MessageEvent('message', { data: 'BACK_TO_HOME' }))} /></DemoWrapper>} />
        <Route path="Corporate" element={<DemoWrapper theme="corporate-theme"><CorporateDemo onBack={() => window.dispatchEvent(new MessageEvent('message', { data: 'BACK_TO_HOME' }))} /></DemoWrapper>} />
        <Route path="Portfolio" element={<DemoWrapper theme="portfolio-theme"><PersonalPortfolioDemo onBack={() => window.dispatchEvent(new MessageEvent('message', { data: 'BACK_TO_HOME' }))} /></DemoWrapper>} />
        <Route path="Clinic" element={<DemoWrapper theme="clinic-theme"><ClinicDemo onBack={() => window.dispatchEvent(new MessageEvent('message', { data: 'BACK_TO_HOME' }))} /></DemoWrapper>} />
        <Route path="Gym" element={<DemoWrapper theme="gym-theme"><GymDemo onBack={() => window.dispatchEvent(new MessageEvent('message', { data: 'BACK_TO_HOME' }))} /></DemoWrapper>} />
      </Route>
    </Routes>
  );
}

export default App;
