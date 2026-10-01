import { Link } from "react-router-dom";
import { callUrl, siteMeta } from "@/lib/site-data";
import { PolicyBoard } from "@/components/PolicyBoard";
import { useTitle } from "@/lib/use-title";

export default function Policy() {
  useTitle("Policies");

  return (
    <div>
      <section className="mx-auto max-w-7xl px-3 py-10 sm:px-5 md:py-14">
        <PolicyBoard as="h1" />
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
