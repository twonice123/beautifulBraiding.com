import { useParams } from "react-router-dom";
import { SERVICE_PAGE_INSTRUCTION, describe, getCategory } from "@/lib/site-data";
import { BackButton, BookLink, Reveal } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";
import NotFound from "./NotFound";

export default function ServiceCategory() {
  const { slug = "" } = useParams();
  const category = getCategory(slug);
  useTitle(category?.name ?? "Service not found");
  if (!category) return <NotFound />;

  return (
    <section className="mx-auto max-w-5xl px-5 py-12 md:py-16">
      <BackButton fallback="/services" />
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-[2rem] border-2 border-teal" />
          <img src={category.image} alt={category.name} className="relative aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top shadow-xl" />
        </div>
        <div className="text-center md:text-left">
          <p className="font-script text-3xl text-rose">Our Services</p>
          <h1 className="text-4xl font-semibold md:text-5xl">{category.name}</h1>
          <div className="rule-brand mx-auto mt-5 w-24 md:mx-0" />
          <p className="mt-5 leading-relaxed text-muted">{describe(category.slug)}</p>
          {category.subcategories.length === 0 && (
            <div className="mt-8">
              <BookLink href={category.link}>
                Book Now
              </BookLink>
            </div>
          )}
        </div>
      </div>

      {category.subcategories.length > 0 && (
        <div className="mt-16">
          <h2 className="text-center text-2xl font-semibold md:text-3xl">Choose your size</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted">{SERVICE_PAGE_INSTRUCTION}</p>
          <div className="mt-8 space-y-4">
            {category.subcategories.map((s, i) => (
              <Reveal key={s.subcatId} delay={i * 70}>
                <a href={s.link} className="card card-hover group flex items-center gap-4 p-3 sm:gap-5 sm:p-4">
                  <img src={s.image} alt={s.name} className="h-20 w-20 shrink-0 rounded-xl object-cover object-top sm:h-24 sm:w-24" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg font-semibold sm:text-xl">{s.name}</p>
                  </div>
                  <span className="btn-rose btn-bounce shrink-0 !px-4 !py-2">Book Now</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
