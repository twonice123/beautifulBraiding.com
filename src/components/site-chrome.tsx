import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { HOURS, callUrl, mapsUrl, siteMeta, whatsappUrl } from "@/lib/site-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/promotion", label: "Promotion" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About Us" },
  { to: "/policy", label: "Policies" },
];

/* ---------- Brand icons (lucide no longer ships brand marks) ---------- */

export function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21h2.9Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.2Z" />
    </svg>
  );
}

export const SOCIALS = [
  { href: siteMeta.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: siteMeta.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: whatsappUrl, label: "WhatsApp", Icon: WhatsAppIcon },
];

/* ---------- Header ---------- */

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors ${isActive ? "text-rose" : "text-ink hover:text-rose"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 md:px-5">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <img src="/logo.webp" alt="Beautiful Braiding" className="h-14 w-auto md:h-16" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/booking" className="btn-rose hidden !px-5 !py-2.5 sm:inline-flex">
            Book Now
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line bg-white px-4 pb-5 lg:hidden" aria-label="Mobile">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block border-b border-line py-3.5 text-base ${isActive ? "text-rose" : "text-ink"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)} className="btn-rose mt-5 w-full">
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}

/* ---------- Footer ---------- */

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-rose-soft">
      <div className="rule-brand" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img src="/logo.webp" alt="Beautiful Braiding" className="h-24 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Neat, beautiful protective styles in Houston, Texas. Book online in a few taps.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose shadow-sm transition-colors hover:bg-rose hover:text-white"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-ink">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...NAV, { to: "/booking", label: "Book Appointment" }].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-rose">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-ink">Visit & Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={callUrl} className="flex items-center gap-2 transition-colors hover:text-rose">
                <Phone className="h-4 w-4 text-rose" /> {siteMeta.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 transition-colors hover:text-rose">
                <WhatsAppIcon className="h-4 w-4 text-rose" /> Chat on WhatsApp
              </a>
            </li>
            <li>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 transition-colors hover:text-rose">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-rose" /> {siteMeta.address}
              </a>
            </li>
          </ul>
          <Link to="/booking" className="btn-rose mt-6">
            Book Appointment
          </Link>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteMeta.name}. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- Floating WhatsApp + call buttons ---------- */

export function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      <a
        href={callUrl}
        aria-label="Call Beautiful Braiding"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-rose text-white shadow-lg transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-ring flex h-14 w-14 items-center justify-center rounded-full bg-teal text-ink shadow-lg transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}

/* ---------- Building blocks ---------- */

export function SectionHeading({ eyebrow, title, copy, as: Tag = "h2" }: { eyebrow: string; title: string; copy?: string; as?: "h1" | "h2" }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-script text-3xl text-rose md:text-4xl">{eyebrow}</p>
      <Tag className="mt-1 text-3xl font-semibold text-ink md:text-4xl">{title}</Tag>
      <div className="rule-brand mx-auto mt-5 w-24" />
      {copy && <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{copy}</p>}
    </div>
  );
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Marquee() {
  const items = ["Boho braids", "Knotless braids", "Goddess knotless", "Knotless twist", "Book online today"];
  return (
    <div className="overflow-hidden bg-rose text-white">
      <div className="marquee-track py-2.5">
        {[0, 1].map((dup) => (
          <span key={dup} className="inline-flex items-center" aria-hidden={dup === 1}>
            {[...items, ...items].map((t, i) => (
              <span key={i} className="inline-flex items-center">
                <span className="px-6 text-[0.7rem] font-medium uppercase tracking-[0.3em] md:text-xs">{t}</span>
                <span className="text-teal">♥</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}

export function HoursBar() {
  return (
    <section className="border-y border-line bg-teal-soft">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-rose shadow-sm">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-teal-ink">Salon Hours</p>
              <h2 className="text-2xl font-semibold md:text-3xl">Open 24 Hours, Mon to Thu</h2>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Walk-ins welcome <span className="font-medium text-ink">8 AM – 8 PM</span>, Monday through Thursday. After{" "}
            <span className="font-medium text-ink">8 PM</span>, appointments only.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {HOURS.map((h) => (
            <div key={h.day} className="card flex flex-col gap-1 p-5 text-center">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-rose">{h.day}</p>
              <p className="font-display text-xl font-semibold">{h.detail}</p>
              <p className="text-xs leading-snug text-muted">{h.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BackButton({ fallback = "/" }: { fallback?: string }) {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => (window.history.length > 1 ? navigate(-1) : navigate(fallback))}
      className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs uppercase tracking-[0.2em] text-teal-ink transition-colors hover:border-teal hover:bg-teal-soft"
    >
      <ArrowLeft className="h-4 w-4" /> Back
    </button>
  );
}

/** Outbound booking link to Schedulebility. */
export function BookLink({ href, children, className = "btn-rose" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
