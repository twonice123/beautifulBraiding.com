import { Link } from "react-router-dom";
import { useTitle } from "@/lib/use-title";

export default function NotFound() {
  useTitle("Page not found");
  return (
    <section className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-script text-5xl text-rose">Oops!</p>
      <h1 className="mt-2 text-3xl font-semibold">We could not find that page</h1>
      <p className="mt-4 text-muted">The page may have moved. Head back home or go straight to booking.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-teal">
          Go Home
        </Link>
        <Link to="/booking" className="btn-rose">
          Book Appointment
        </Link>
      </div>
    </section>
  );
}
