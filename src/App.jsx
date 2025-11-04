import Hero from "./components/Hero";
import Features from "./components/Features";
import CropAdvisor from "./components/CropAdvisor";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-green-500 to-emerald-600" />
            FarmWise
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#advisor" className="hover:text-gray-900">Advisor</a>
            <a href="#" className="rounded-md border border-gray-200 px-3 py-1.5 hover:bg-gray-50">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CropAdvisor />
        <CTA />
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-gray-600 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} FarmWise. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
