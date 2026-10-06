import { Link } from "react-router-dom";
import { Heart, MapPin, Phone, Sparkles, Star } from "lucide-react";
import { callUrl, mapsUrl, siteMeta, whatsappUrl } from "@/lib/site-data";
import { HoursBar, Reveal, SectionHeading, SocialIcons, WhatsAppIcon } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

export default function About() {
  useTitle("About Us");
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
        <div className="relative mx-auto w-full max-w-sm">
          <div aria-hidden className="absolute -inset-3 rounded-[999px_999px_2rem_2rem] border-[3px] border-teal" />
          <img
            src="/images/b6ae8203235676ecf21ad1f383927842.jpg"
            alt="Goddess knotless braids by Beautiful Braiding"
            className="relative aspect-[4/5] w-full rounded-[999px_999px_1.75rem_1.75rem] object-cover object-top shadow-xl"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="font-script text-4xl text-rose">About Us</p>
          <h1 className="text-4xl font-semibold md:text-5xl">Braids that make you feel beautiful</h1>
          <div className="rule-brand mx-auto mt-5 w-24 md:mx-0" />
          <p className="mt-6 leading-relaxed text-muted">
            Beautiful Braiding is a braiding salon in Houston, Texas, focused on neat, long-lasting protective styles. From
            soft boho braids to sleek knotless braids, goddess knotless and knotless twists, every style is done with care for
            your hair and your scalp.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            We keep booking simple: choose your style and size online, see the current price, and pick a time that works for
            you. Walk-ins are welcome during the day too.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link to="/booking" className="btn-rose">
              Book Appointment
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-teal">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-rose-soft">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading eyebrow="What we value" title="Why clients choose us" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { Icon: Heart, title: "Care first", copy: "Gentle, knotless techniques that protect your edges." },
              { Icon: Star, title: "Neat results", copy: "Clean parts and even sizing from front to back." },
              { Icon: Sparkles, title: "Styles you love", copy: "From classic knotless to curly goddess finishes." },
            ].map(({ Icon, title, copy }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="card h-full p-7 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-soft text-teal-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HoursBar />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <SectionHeading eyebrow="Visit us" title="Find the salon" />
        <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div className="card space-y-5 p-7">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-rose">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-rose" /> {siteMeta.address}
            </a>
            <a href={callUrl} className="flex items-center gap-3 hover:text-rose">
              <Phone className="h-5 w-5 text-rose" /> {siteMeta.phoneDisplay}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-rose">
              <WhatsAppIcon className="h-5 w-5 text-rose" /> Chat on WhatsApp
            </a>
            <SocialIcons className="pt-2" />
          </div>
          <iframe
            title="Map to Beautiful Braiding"
            src={`https://www.google.com/maps?q=${encodeURIComponent(siteMeta.address)}&output=embed`}
            className="h-80 w-full rounded-[1.25rem] border border-line"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
