import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container max-w-8xl py-32 text-center">
      <p className="eyebrow justify-center mb-6" style={{ display: "inline-flex" }}>
        404
      </p>
      <h1 className="headline text-4xl md:text-5xl mb-6">Page Not Found.</h1>
      <p className="text-sm md:text-base text-ink-soft max-w-md mx-auto mb-10">
        The page you're looking for doesn't exist or may have moved. Browse our products or
        get in touch with our team directly.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
        <Link href="/products" className="btn-secondary">
          View Products
        </Link>
      </div>
    </section>
  );
}
