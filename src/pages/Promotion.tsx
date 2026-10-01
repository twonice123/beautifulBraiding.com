import { ArrowUpRight, Sparkles } from "lucide-react";
import { promotion } from "@/lib/site-data";
import { BackButton, BookLink } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

const PROMO_PHOTOS = [promotion.image, "/images/2c6bed3ccee79e2d908652ee96ca75eb.jpg"];

export default function Promotion() {
  useTitle("Promotion");
  return (
    <section className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <BackButton />
      <div className="text-center">
        <span className="inline-flex items-center gap-1 rounded-full bg-rose px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
          <Sparkles className="h-3.5 w-3.5" /> Limited-time offer
        </span>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Current Promotion</h1>
        <div className="rule-brand mx-auto mt-5 w-24" />
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted">
          Check out our current special. Tap below to see the promotional price and book your spot before it ends.
        </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4">
        {PROMO_PHOTOS.map((src) => (
          <img key={src} src={src} alt="Promotion style" className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-lg" />
        ))}
      </div>
      <div className="mt-10 text-center">
        <BookLink href={promotion.link}>
          See Promo Price & Book <ArrowUpRight className="h-4 w-4" />
        </BookLink>
      </div>
    </section>
  );
}
