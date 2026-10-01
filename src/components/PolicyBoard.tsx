import type { LucideIcon } from "lucide-react";
import {
  CalendarClock,
  Clock,
  CreditCard,
  Crown,
  Droplets,
  Handshake,
  Heart,
  Hourglass,
  Lock,
  Receipt,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { POLICY, siteMeta } from "@/lib/site-data";

const ICONS: Record<string, LucideIcon> = {
  "Booking & deposit": CreditCard,
  "Cancellation & rescheduling": CalendarClock,
  "Late arrivals": Clock,
  "Hair preparation": Droplets,
  "Hair included": Sparkles,
  "Touch-ups & take-out": Scissors,
  "Service timing": Hourglass,
  "Additional charges": Receipt,
  "Safety & hygiene": ShieldCheck,
  Privacy: Lock,
  Respect: Heart,
};

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

/**
 * Salon policies laid out like a printed policy poster:
 * dark curved header, framed light board of icon boxes, agreement bar.
 * 2 columns on phones, 3 on tablets, 4 on desktop.
 */
export function PolicyBoard({ as: Title = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <div className="rounded-[1.75rem] border-2 border-rose/30 bg-[#fff8f9] p-1.5 shadow-[0_24px_60px_-30px_rgb(224_0_38/0.45)] sm:p-2">
      <div className="overflow-hidden rounded-[1.4rem] border border-rose/20">
        {/* Header banner with a curved bottom edge */}
        <header className="relative bg-ink px-4 pb-12 pt-7 text-center text-white sm:pb-14 sm:pt-9 lg:pb-20 lg:pt-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{ background: "radial-gradient(90% 120% at 50% 0%, rgb(224 0 38 / 0.45), transparent 60%)" }}
          />
          <div className="relative grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
            <div>
              <Crown className="mx-auto h-7 w-7 text-teal lg:h-9 lg:w-9" aria-hidden />
              <p className="mt-1 font-display text-xl font-semibold uppercase tracking-[0.1em] sm:text-3xl sm:tracking-[0.12em] lg:text-4xl">
                {siteMeta.name}
              </p>
              <Ornament className="mt-2" />
            </div>
            <span aria-hidden className="hidden h-24 w-px bg-white/25 md:block" />
            <div>
              <Title className="bg-gradient-to-r from-[#ff5c78] to-teal bg-clip-text font-display text-[2rem] font-semibold uppercase leading-tight tracking-[0.04em] text-transparent sm:whitespace-nowrap sm:text-5xl sm:tracking-[0.06em] xl:text-6xl">
                Salon Policies
              </Title>
              <Ornament className="mt-2 md:hidden" />
              <p className="mt-2 text-sm text-white/85 sm:text-base lg:text-lg">Please read all information before booking.</p>
            </div>
          </div>
          {/* curve */}
          <div aria-hidden className="absolute -bottom-px left-0 right-0 h-8 rounded-t-[50%] bg-[#fff8f9] sm:h-10" />
          <div aria-hidden className="absolute bottom-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-teal to-transparent sm:bottom-8" />
        </header>

        {/* Policy boxes */}
        <div className="grid grid-cols-2 gap-2 px-2 pb-2 sm:gap-3 sm:px-4 sm:pb-4 md:grid-cols-3 lg:grid-cols-4">
          {POLICY.sections.map((p, i) => {
            const Icon = ICONS[p.title] ?? Sparkles;
            return (
              <article
                key={p.title}
                className={`rounded-xl border border-rose/25 bg-white/80 p-2.5 sm:flex sm:gap-3 sm:p-4 xl:p-5 ${
                  // 11 policies: the last one spans two columns so every row is full
                  i === POLICY.sections.length - 1 ? "col-span-2" : ""
                }`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] border-rose/60 text-rose sm:h-12 sm:w-12 xl:h-14 xl:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7" strokeWidth={1.5} />
                </span>
                <div className="mt-2 min-w-0 sm:mt-0">
                  <h3 className="font-display text-[0.72rem] font-bold uppercase leading-tight tracking-normal break-words text-ink sm:tracking-wide sm:text-base lg:text-[1.05rem]">
                    {p.title}
                  </h3>
                  {p.body && <p className="mt-1 text-[0.72rem] leading-snug text-muted sm:text-[0.8rem] lg:text-sm">{p.body}</p>}
                  {p.list && (
                    <ul className="mt-1 space-y-0.5">
                      {p.list.map((item) => (
                        <li key={item} className="flex gap-1.5 text-[0.72rem] leading-snug text-muted sm:text-[0.8rem] lg:text-sm">
                          <span className="mt-[0.45em] h-1 w-1 shrink-0 rounded-full bg-rose" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.note && (
                    <p className="mt-2 border-t border-rose/20 pt-1.5 text-[0.68rem] leading-snug text-muted sm:text-xs">{p.note}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Agreement bar */}
        <div className="mx-2 mb-2 flex flex-col items-center gap-3 rounded-xl bg-ink px-4 py-4 text-center text-white sm:mx-4 sm:mb-4 sm:flex-row sm:text-left">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-teal text-teal">
            <Handshake className="h-5 w-5" strokeWidth={1.6} />
          </span>
          <p className="font-display text-lg font-semibold uppercase tracking-wide text-teal">Policy agreement</p>
          <span aria-hidden className="hidden h-8 w-px bg-white/25 sm:block" />
          <p className="flex-1 text-sm text-white/85">
            By booking with {siteMeta.name}, you confirm that you have read, understood, and agreed to these policies.{" "}
            <Heart className="inline h-4 w-4 fill-rose text-rose" aria-hidden />
          </p>
        </div>
      </div>
    </div>
  );
}
