import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { categories, describe, promotion } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

export default function Services() {
  useTitle("Services");
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <SectionHeading
        as="h1"
        eyebrow="Services"
        title="Our Braiding Styles"
        copy="Choose a style to see the sizes we offer. Pricing and availability are shown on our booking page."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 90}>
            <Link to={`/services/${c.slug}`} className="card card-hover group block h-full overflow-hidden">
              <div className="bg-brand aspect-[4/5] overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{describe(c.slug)}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-rose">
                  Book Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <Link to="/promotion" className="card card-hover group flex items-center gap-5 p-4">
          <img src={promotion.image} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover object-top" />
          <div className="flex-1">
            <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-rose">
              <Sparkles className="h-3.5 w-3.5" /> Promotion
            </p>
            <p className="font-display text-lg font-semibold">See our current limited-time offer</p>
          </div>
          <ArrowRight className="h-5 w-5 text-rose transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}
