import type { Metadata } from "next";
import SiteNav from "../components/SiteNav";
import PortfolioExperience from "./PortfolioExperience";
import { PORTFOLIO_BG } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portafolio | Blue Garden",
  description: "Colecciones de experiencias al aire libre — estética editorial dreamcore.",
};

export default function PortafolioPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#e8e4dc]">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${PORTFOLIO_BG}')` }}
        aria-hidden
      />
      <div className="dream-overlay fixed inset-0" aria-hidden />
      <div className="grain fixed inset-0" aria-hidden />

      <div className="relative z-10">
        <header className="px-6 py-8 sm:px-10">
          <SiteNav variant="dark" />
        </header>

        <main className="pb-20">
          <div className="portfolio-card relative mx-auto mt-4 max-w-5xl overflow-hidden rounded-[2rem] border border-white/40 bg-[#f7f4ef]/88 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:mx-6 lg:mx-auto">
            <PortfolioExperience />
          </div>

          <p className="mx-auto mt-12 max-w-md px-6 text-center font-serif text-sm italic text-white/70">
            Cada imagen es referencia visual. Tu portafolio real, cuando esté listo,
            elevará esta misma estructura.
          </p>
        </main>
      </div>
    </div>
  );
}
