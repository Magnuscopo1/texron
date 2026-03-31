import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FloatingEmergency } from "../components/FloatingEmergency";
import { MobileStickyBar } from "../components/MobileStickyBar";
import { BackToTop } from "../components/BackToTop";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-14 md:pb-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingEmergency />
      <MobileStickyBar />
      <BackToTop />
    </div>
  );
}
