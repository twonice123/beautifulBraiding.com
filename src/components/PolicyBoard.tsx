import { useEffect, useState } from "react";
import { Crown, Handshake, Heart, X } from "lucide-react";
import { POLICY, siteMeta, type PolicySection } from "@/lib/site-data";

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-teal sm:w-16" />
      <span className="h-1.5 w-1.5 rotate-45 bg-teal" />
      <span className="h-2 w-2 rotate-45 border border-white/60 bg-rose" />
      <span className="h-1.5 w-1.5 rotate-45 bg-teal" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-teal sm:w-16" />
    </div>
  );
}

/** Full text of one policy (used in the enlarged view). */
function PolicyText({ p }: { p: PolicySection }) {
  return (
    <>
      {p.body && <p className="leading-relaxed text-ink/80">{p.body}</p>}
      {p.list && (
        <ul className="mt-1 space-y-1.5">
          {p.list.map((item) => (
            <li key={item} className="flex gap-2 leading-relaxed text-ink/80">
              <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
              {item}
            </li>
          ))}
        </ul>
      )}
      {p.note && <p className="mt-3 border-t border-line pt-3 text-sm text-muted">{p.note}</p>}
    </>
  );
}

/** Short one-paragraph version for the compact panel. */
const summary = (p: PolicySection) => [p.body, p.list?.join(" "), p.note].filter(Boolean).join(" ");

/**
 * Salon policies as a compact board of panels (title bar + short text),
 * 2 columns on phones so clients see everything without long scrolling.
 * Tapping a panel opens the full policy.
 */
export function PolicyBoard({ as: Title = "h2" }: { as?: "h1" | "h2" }) {
  const [open, setOpen] = useState<number | null>(null);
  const active = open === null ? null : POLICY.sections[open];

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="rounded-[1.5rem] border-2 border-rose/30 bg-paper p-1.5 shadow-2xl shadow-rose/20 sm:p-2">
      <div className="overflow-hidden rounded-[1.2rem] border border-rose/20">
        {/* Header: compact on phones, fuller from tablet up */}
        <header className="relative bg-ink px-4 pb-5 pt-4 text-center text-white sm:pb-8 sm:pt-7 lg:pb-10 lg:pt-9">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(90% 120% at 50% 0%, color-mix(in srgb, var(--color-rose) 45%, transparent), transparent 60%)" }}
          />
          <div className="relative">
            <p className="flex items-center justify-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-base">
              <Crown className="h-4 w-4 text-teal sm:h-5 sm:w-5" aria-hidden /> {siteMeta.name}
            </p>
            <Title className="mt-1 bg-gradient-to-r from-rose-light to-teal bg-clip-text font-display text-3xl font-semibold uppercase tracking-[0.05em] text-transparent sm:text-5xl">
              Salon Policies
            </Title>
            <Ornament className="mt-2 hidden sm:flex" />
            <p className="mt-1 text-xs text-white/80 sm:mt-2 sm:text-base">Please read all information before booking.</p>
          </div>
        </header>

        {/* Panels */}
        <div className="grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-4 md:grid-cols-3 lg:grid-cols-4">
          {POLICY.sections.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${p.title}: read the full policy`}
              className={`group flex flex-col overflow-hidden rounded-lg border border-rose/25 bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-teal ${
                // 11 policies: the last one spans two columns so every row is full
                i === POLICY.sections.length - 1 ? "col-span-2" : ""
              }`}
            >
              <h3 className="bg-rose px-2 py-1.5 text-center font-sans text-[0.62rem] font-semibold uppercase leading-tight tracking-[0.08em] text-white sm:py-2 sm:text-xs sm:tracking-[0.12em]">
                {p.title}
              </h3>
              <div className="px-2 py-1.5 sm:px-3 sm:py-2">
                <p className="line-clamp-4 text-[0.64rem] leading-[1.35] text-ink/80 sm:line-clamp-5 sm:text-[0.8rem] lg:line-clamp-6">
                  {summary(p)}
                </p>
              </div>
            </button>
          ))}
        </div>

        <p className="pb-2 text-center text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-muted sm:text-xs">
          Tap a panel to enlarge
        </p>

        {/* Agreement bar */}
        <div className="mx-2 mb-2 flex items-center gap-3 rounded-lg bg-ink px-3 py-3 text-white sm:mx-4 sm:mb-4 sm:px-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-teal text-teal sm:h-11 sm:w-11">
            <Handshake className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.6} />
          </span>
          <p className="flex-1 text-[0.7rem] leading-snug text-white/85 sm:text-sm">
            <span className="font-semibold uppercase tracking-wide text-teal">Policy agreement · </span>
            By booking with {siteMeta.name}, you confirm that you have read, understood, and agreed to these policies.{" "}
            <Heart className="inline h-3.5 w-3.5 fill-rose-light text-rose-light" aria-hidden />
          </p>
        </div>
      </div>

      {/* Enlarged policy */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setOpen(null)}
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-3 bg-rose px-5 py-3 text-white">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em]">{active.title}</h3>
              <button type="button" aria-label="Close" onClick={() => setOpen(null)} className="rounded-full p-1 hover:bg-white/15">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-5">
              <PolicyText p={active} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
