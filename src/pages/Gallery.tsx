import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { gallery } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

export default function Gallery() {
  useTitle("Gallery");
  const [open, setOpen] = useState<number | null>(null);
  const step = (d: number) => setOpen((i) => (i === null ? i : (i + d + gallery.length) % gallery.length));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Gallery"
        title="Real Styles, Real Clients"
        copy="A look at some of the braids we have done. Tap a photo to see it larger."
      />
      <div className="mt-12 columns-2 gap-3 md:columns-3 lg:columns-4">
        {gallery.map((g, i) => (
          <Reveal key={g.src} className="mb-3 break-inside-avoid" delay={(i % 4) * 60}>
            <button type="button" onClick={() => setOpen(i)} className="group relative block w-full overflow-hidden rounded-2xl">
              <img
                src={g.src}
                alt={g.alt}
                className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 ${g.tall ? "aspect-[3/4]" : "aspect-square"}`}
                loading="lazy"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {g.alt}
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/booking" className="btn-rose">
          Book Your Style
        </Link>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={gallery[open].alt}
          onClick={() => setOpen(null)}
        >
          <button type="button" aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={() => setOpen(null)}>
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Previous photo"
            className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[open].src} alt={gallery[open].alt} className="max-h-[80vh] w-auto rounded-xl" />
            <figcaption className="mt-3 text-center text-sm text-white/85">{gallery[open].alt}</figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
