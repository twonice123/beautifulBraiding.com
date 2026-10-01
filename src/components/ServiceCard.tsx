import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

type Props = {
  to: string;
  image: string;
  name: string;
  description?: string;
  /** Shows the "Special offer" badge (promotion card). */
  offer?: boolean;
};

/**
 * Service category card.
 * Phones: a horizontal row (photo · name · Book Now), like a booking list.
 * Tablet and up: a square-photo card.
 */
export function ServiceCard({ to, image, name, description, offer }: Props) {
  return (
    <Link
      to={to}
      className={`card card-hover group relative flex h-full items-center gap-3 overflow-hidden p-3 sm:block sm:p-0 ${
        offer ? "promo-card" : ""
      }`}
    >
      <div className="bg-brand relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:aspect-square sm:h-auto sm:w-full sm:rounded-none">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top drop-shadow-[0_10px_18px_rgb(0_0_0/0.25)] transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {offer && (
          <span className="absolute left-3 top-3 hidden items-center gap-1 rounded-full bg-rose px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow sm:inline-flex">
            <Sparkles className="h-3.5 w-3.5" /> Promotion
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1 sm:p-4">
        {offer && (
          <p className="inline-flex items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose">
            <Sparkles className="h-3 w-3" /> Special offer
          </p>
        )}
        <h3 className="text-base font-semibold leading-snug sm:text-lg">{name}</h3>
        {description && <p className="mt-1 hidden line-clamp-2 text-sm text-muted lg:block">{description}</p>}
        <span className="btn-rose btn-bounce mt-3 hidden !px-4 !py-2 !text-[0.7rem] sm:inline-flex">Book Now</span>
      </div>

      <span className="btn-rose btn-bounce shrink-0 !px-4 !py-2.5 !text-[0.7rem] sm:hidden">Book Now</span>
    </Link>
  );
}
