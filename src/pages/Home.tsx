import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Heart, Phone, Sparkles, Star } from "lucide-react";
import { HERO_SLIDES, callUrl, categories, describe, gallery, promotion, siteMeta, whatsappUrl } from "@/lib/site-data";
import { FacebookIcon, HoursBar, InstagramIcon, Marquee, Reveal, SectionHeading, WhatsAppIcon } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      {/* Red/teal swoosh rings behind the photo, like the logo */}
      <div aria-hidden className="absolute -inset-3 rounded-[999px_999px_2rem_2rem] border-[3px] border-teal" />
      <div aria-hidden className="absolute -inset-6 rounded-[999px_999px_2.5rem_2.5rem] border-2 border-rose/70" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[999px_999px_1.75rem_1.75rem] bg-rose-soft shadow-2xl">
        {HERO_SLIDES.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>
      <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-white px-3 py-2 shadow-md">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${i === index ? "w-6 bg-rose" : "w-2.5 bg-teal/60"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  useTitle("Braiding Salon in Houston, TX");

  return (
    <div>
      <Marquee />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-teal-soft" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-rose-soft" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="rise text-center md:text-left">
            <p className="font-script text-4xl text-rose md:text-5xl">Welcome to</p>
            <h1 className="mt-1 text-4xl font-semibold leading-[1.1] md:text-6xl">
              Beautiful Braids, <span className="text-rose">Made Just for You</span>
            </h1>
            <div className="rule-brand mx-auto mt-6 w-32 md:mx-0" />
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted md:mx-0 md:text-base">
              Boho braids, knotless braids, goddess knotless and knotless twists, done neatly and with care in
              Houston, Texas. Pick your style and book your appointment online in minutes.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link to="/booking" className="btn-rose">
                <CalendarCheck className="h-4 w-4" /> Book Appointment
              </Link>
              <Link to="/gallery" className="btn-teal">
                View Gallery
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-sm md:justify-start">
              <a href={callUrl} className="flex items-center gap-2 font-medium hover:text-rose">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-rose text-white">
                  <Phone className="h-4 w-4" />
                </span>
                {siteMeta.phoneDisplay}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium hover:text-rose">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal text-ink">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                WhatsApp us
              </a>
              <div className="flex items-center gap-2">
                <a href={siteMeta.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-soft text-rose transition-colors hover:bg-rose hover:text-white">
                  <InstagramIcon className="h-4 w-4" />
                </a>
                <a href={siteMeta.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-soft text-rose transition-colors hover:bg-rose hover:text-white">
                  <FacebookIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
          <HeroSlideshow />
        </div>
      </section>

      <HoursBar />

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Choose Your Braiding Style"
          copy="Tap a style to see the sizes we offer, then continue to booking for current pricing and availability."
        />
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {/* Promotion card first */}
          <Reveal>
            <Link to="/promotion" className="card card-hover group relative block h-full overflow-hidden">
              <div className="bg-brand relative aspect-square overflow-hidden">
                <img src={promotion.cutout} alt="Current promotion" className="h-full w-full object-cover object-top drop-shadow-[0_10px_18px_rgb(0_0_0/0.25)] transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute left-2 top-2 inline-flex sm:left-3 sm:top-3 items-center gap-1 rounded-full bg-rose px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow">
                  <Sparkles className="h-3.5 w-3.5" /> Promotion
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="text-base font-semibold sm:text-lg">Current promotion</h3>
                <p className="mt-1 hidden line-clamp-2 text-sm text-muted lg:block">Limited-time offer. See the details and book.</p>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-rose">
                  Book Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={((i + 1) % 3) * 90}>
              <Link to={`/services/${c.slug}`} className="card card-hover group block h-full overflow-hidden">
                <div className="bg-brand aspect-square overflow-hidden">
                  <img src={c.cutout} alt={c.name} className="h-full w-full object-cover object-top drop-shadow-[0_10px_18px_rgb(0_0_0/0.25)] transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-base font-semibold sm:text-lg">{c.name}</h3>
                  <p className="mt-1 hidden line-clamp-2 text-sm text-muted lg:block">{describe(c.slug)}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-rose">
                    Book Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-rose-soft">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-3">
          {[
            { Icon: Heart, title: "Gentle on your hair", copy: "Knotless techniques that keep tension off your edges and scalp." },
            { Icon: Star, title: "Neat, lasting finish", copy: "Clean parts and even braids that look good for weeks." },
            { Icon: CalendarCheck, title: "Easy online booking", copy: "Choose your style and size, then pick a time that suits you." },
          ].map(({ Icon, title, copy }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="card h-full p-7 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-soft text-teal-ink">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <SectionHeading eyebrow="Our Work" title="Real Styles by Beautiful Braiding" />
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {gallery.slice(0, 8).map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 70}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/gallery" className="btn-teal">
            See Full Gallery
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-rose px-6 py-14 text-center text-white">
          <div aria-hidden className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[14px] border-teal/40" />
          <p className="font-script text-4xl text-teal">Ready for your new look?</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Book your braids today</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/85">
            Walk-ins are welcome during the day, and you can book online any time.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/booking" className="btn-rose !bg-white !text-rose hover:!bg-teal hover:!text-ink">
              Book Appointment
            </Link>
            <a href={callUrl} className="btn-teal !border-white !bg-transparent !text-white hover:!bg-white/10">
              <Phone className="h-4 w-4" /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
