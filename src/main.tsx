import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./styles.css";
import { FloatingContact, SiteFooter, SiteHeader } from "@/components/site-chrome";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import ServiceCategory from "@/pages/ServiceCategory";
import Booking from "@/pages/Booking";
import Promotion from "@/pages/Promotion";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceCategory />} />
          <Route path="booking" element={<Booking />} />
          <Route path="book" element={<Booking />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
