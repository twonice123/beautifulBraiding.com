import { Link } from "react-router-dom";
import { Wallet } from "lucide-react";
import { POLICY, callUrl, siteMeta } from "@/lib/site-data";
import { PolicyGrid } from "@/components/PolicyGrid";
import { useTitle } from "@/lib/use-title";

export default function Policy() {
  useTitle("Policies");

  return (
    <div>
      <section className="mx-auto max-w-5xl px-5 pt-12 md:pt-16">
        {/* Intro card */}
        <div className="rounded-[1.75rem] bg-rose-soft px-6 py-10 text-center md:px-12 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-ink">{siteMeta.name}</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-5xl">Salon Policies</h1>
          <div className="rule-brand mx-auto mt-5 w-20" />
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            Welcome to <strong className="text-ink">{siteMeta.name}</strong>. {POLICY.intro}
          </p>
        </div>

        {/* Deposit highlight */}
        <div className="bg-brand mt-5 flex flex-col items-center gap-4 rounded-[1.75rem] p-6 text-center text-white shadow-lg sm:flex-row sm:text-left md:p-8">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <Wallet className="h-7 w-7" />
          </span>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85">Deposit</p>
            <p className="mt-1 leading-relaxed">{POLICY.deposit.text}</p>
          </div>
          <p className="font-display text-5xl font-semibold">{POLICY.deposit.amount}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <PolicyGrid />
      </section>

      <section className="bg-rose-soft">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-16 text-center">
          <p className="font-script text-4xl text-rose">Thank you!</p>
          <h2 className="mt-1 text-3xl font-semibold md:text-4xl">Ready to book your braids?</h2>
          <p className="mt-4 max-w-md text-muted">
            Questions about a policy? Call or text{" "}
            <a href={callUrl} className="font-semibold text-rose underline underline-offset-4">
              {siteMeta.phoneDisplay}
            </a>
            .
          </p>
          <Link to="/booking" className="btn-rose btn-bounce mt-8">
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
