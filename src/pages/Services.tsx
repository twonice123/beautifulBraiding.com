import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { categories, describe, promotion } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";
import { ServiceCard } from "@/components/ServiceCard";

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
      <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3 sm:gap-4">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 3) * 90}>
            <ServiceCard to={`/services/${c.slug}`} image={c.cutout} name={c.name} description={describe(c.slug)} />
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
