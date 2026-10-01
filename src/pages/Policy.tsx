import { Link } from "react-router-dom";
import { POLICY, callUrl, siteMeta } from "@/lib/site-data";
import { Reveal, SectionHeading } from "@/components/site-chrome";
import { useTitle } from "@/lib/use-title";

export default function Policy() {
  useTitle("Policies");

  return (
    <div>
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="text-center lg:text-left">
            <p className="font-script text-4xl text-rose">Before you book</p>
            <h1 className="mt-1 text-4xl font-semibold md:text-5xl">Salon policies</h1>
            <div className="rule-brand mx-auto mt-5 w-24 lg:mx-0" />
            <p className="mx-auto mt-6 max-w-lg leading-relaxed text-muted lg:mx-0">{POLICY.intro}</p>
          </div>

          {/* The one rule everyone needs: the deposit. */}
          <div className="bg-brand relative overflow-hidden rounded-[1.75rem] p-8 text-white shadow-xl md:p-10">
            <span aria-hidden className="pointer-events-none absolute -right-2 -top-6 font-display text-[9rem] leading-none text-white/15">
              {POLICY.deposit.amount}
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85">Deposit</p>
            <p className="mt-3 font-display text-5xl font-semibold">{POLICY.deposit.amount}</p>
            <p className="mt-4 max-w-sm leading-relaxed text-white/90">{POLICY.deposit.text}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {POLICY.sections.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 90}>
              <article className="card h-full p-7 md:p-8">
                <span className="font-display text-3xl font-semibold text-teal">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
                {p.body && <p className="mt-3 leading-relaxed text-muted">{p.body}</p>}
                {p.list && (
                  <ul className="mt-4 space-y-2">
                    {p.list.map((item) => (
                      <li key={item} className="flex gap-3 text-muted">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {p.note && <p className="mt-4 text-sm italic text-muted">{p.note}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-rose-soft">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center">
          <p className="font-script text-4xl text-rose">Read them?</p>
          <h2 className="mt-1 text-3xl font-semibold md:text-4xl">Let&rsquo;s book your braids</h2>
          <p className="mt-4 max-w-md text-muted">
            Questions about a policy? Call or text{" "}
            <a href={callUrl} className="font-semibold text-rose underline underline-offset-4">
              {siteMeta.phoneDisplay}
            </a>
            .
          </p>
          <Link to="/booking" className="btn-rose mt-8">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
