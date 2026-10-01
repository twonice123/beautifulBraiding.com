import type { LucideIcon } from "lucide-react";
import {
  CalendarX,
  Clock,
  Droplets,
  HeartHandshake,
  Hourglass,
  Lock,
  Receipt,
  Scissors,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { POLICY } from "@/lib/site-data";
import { Reveal } from "@/components/site-chrome";

const ICONS: Record<string, LucideIcon> = {
  "Booking & deposit": Wallet,
  "Cancellation & rescheduling": CalendarX,
  "Late arrivals": Clock,
  "Hair preparation": Droplets,
  "Hair included": Sparkles,
  "Touch-ups & take-out": Scissors,
  "Service timing": Hourglass,
  "Additional charges": Receipt,
  "Safety & hygiene": ShieldCheck,
  Privacy: Lock,
  Respect: HeartHandshake,
};

/** Salon policies as icon tiles: 1 column on phones, 2 from tablet up. */
export function PolicyGrid() {
  return (
    <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
      {POLICY.sections.map((p, i) => {
        const Icon = ICONS[p.title] ?? Sparkles;
        return (
          <Reveal key={p.title} delay={(i % 2) * 80}>
            <article className="card flex h-full gap-4 p-4 sm:p-5">
              <span className="bg-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-md">
                <Icon className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-rose">{p.title}</h3>
                {p.body && <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.body}</p>}
                {p.list && (
                  <ul className="mt-2 space-y-1.5">
                    {p.list.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {p.note && <p className="mt-2 text-xs italic text-muted">{p.note}</p>}
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
