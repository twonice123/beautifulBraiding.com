import { Link } from "react-router-dom";
import { ChevronRight, Sparkles } from "lucide-react";
import { categories, promotion } from "@/lib/site-data";
import { BackButton, SectionHeading } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

const THUMB = "h-[72px] w-[72px] shrink-0 overflow-hidden rounded-xl sm:h-20 sm:w-20";

export default function Booking() {
  useTitle("Book Appointment");
  return (
    <section className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <BackButton />
      <SectionHeading
        as="h1"
        eyebrow="Booking"
        title="Choose Your Service"
        copy="Pick a style to see its sizes, current pricing and appointment availability."
      />
      <div className="mt-12 space-y-4">
        <Link to="/promotion" className="card card-hover group flex items-center gap-4 !border-rose/30 !bg-rose-soft p-3 sm:gap-5 sm:p-4">
          <div className={THUMB}>
            <img src={promotion.image} alt="" className="h-full w-full object-cover object-top" />
          </div>
          <div className="flex-1">
            <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose">
              <Sparkles className="h-3.5 w-3.5" /> Limited time
            </p>
            <p className="font-display text-lg font-semibold sm:text-xl">Promotion</p>
          </div>
          <ChevronRight className="h-5 w-5 text-rose transition-transform group-hover:translate-x-1" />
        </Link>

        {categories.map((c) => (
          <Link key={c.slug} to={`/services/${c.slug}`} className="card card-hover group flex items-center gap-4 p-3 sm:gap-5 sm:p-4">
            <div className={THUMB}>
              <img src={c.image} alt="" className="h-full w-full object-cover object-top" loading="lazy" />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg font-semibold sm:text-xl">{c.name}</p>
              <p className="text-xs text-muted sm:text-sm">
                Book Now
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-rose transition-transform group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-muted">
        A $30 non-refundable deposit is required to confirm your appointment. Please read{" "}
        <Link to="/policy" className="font-medium text-rose underline underline-offset-4">
          our policies
        </Link>{" "}
        before booking.
      </p>
    </section>
  );
}
