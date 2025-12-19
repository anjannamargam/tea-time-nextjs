export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <span className="text-base font-extrabold tracking-tight">Tea Time</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a className="hover:opacity-70" href="#menu">Menu</a>
            <a className="hover:opacity-70" href="#franchise">Franchise</a>
            <a className="hover:opacity-70" href="#locations">Locations</a>
            <a className="hover:opacity-70" href="#contact">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold hover:bg-slate-50"
            >
              Enquiry
            </a>
            <a
              href="#franchise"
              className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:opacity-90"
            >
              Get Franchise
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-100" />
          <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-slate-100" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-200" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold">
              ☕ Fresh Tea • Quick Snacks • Franchise
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
              Tea Time — Fresh Chai & Snacks for Every Mood
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              A modern tea brand built for high footfall locations. Explore our popular
              menu and learn how to start your own Tea Time franchise with support,
              training, and proven operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                View Menu
              </a>
              <a
                href="#franchise"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Franchise Details
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                WhatsApp Enquiry
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <Stat label="Daily Footfall Friendly" value="Quick-Serve" />
              <Stat label="Support & Training" value="Included" />
              <Stat label="Popular Combos" value="Best Sellers" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-600">Signature Picks</p>
                  <p className="mt-1 text-2xl font-extrabold">Today’s Highlights</p>
                </div>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                  Hot & Fresh
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <MenuRow title="Masala Chai" desc="Bold & spicy, freshly brewed." />
                <MenuRow title="Ginger Tea" desc="Strong ginger kick for tea lovers." />
                <MenuRow title="Lemon Tea" desc="Light, refreshing, and tangy." />
                <MenuRow title="Snack Combos" desc="Samosa, puffs, biscuits & more." />
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-semibold">Perfect for</p>
                <p className="mt-1 text-sm text-slate-600">
                  Offices • Colleges • High Streets • Transit Routes
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl bg-slate-900 md:block" />
          </div>
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-extrabold tracking-tight">Popular Menu</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Best-selling tea varieties and quick snacks that customers love.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card title="Tea Specials" items={["Masala Chai", "Ginger Tea", "Elaichi Tea", "Lemon Tea"]} />
          <Card title="Snacks" items={["Samosa", "Veg Puff", "Egg Puff", "Cutlet"]} />
          <Card title="Combos" items={["Tea + Samosa", "Tea + Puff", "Tea + Biscuit", "Tea + Bun"]} />
        </div>
      </section>

      <section id="franchise" className="border-y bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold tracking-tight">Tea Time Franchise</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Start your outlet with brand support, training, and a standardized menu.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">What you get</h3>
              <div className="mt-4 grid gap-3">
                <Bullet>Branding & store setup guidance</Bullet>
                <Bullet>Staff training & operations checklist</Bullet>
                <Bullet>Menu support + sourcing guidance</Bullet>
                <Bullet>Marketing templates for launch</Bullet>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">Franchise Snapshot</h3>
              <p className="mt-2 text-sm text-slate-600">
                (Sample placeholders — we can update later.)
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <MiniStat label="Setup Time" value="15–30 Days" />
                <MiniStat label="Ideal Size" value="150–300 sqft" />
                <MiniStat label="Staff Needed" value="2–4 People" />
                <MiniStat label="Support" value="Training + SOPs" />
              </div>

              <a
                href="#contact"
                className="mt-6 inline-flex rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Request Franchise Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="locations" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-extrabold tracking-tight">Locations</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Add outlets here later (city pages help SEO).
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <LocationCard title="Hyderabad" desc="Sample location listing" />
          <LocationCard title="Secunderabad" desc="Sample location listing" />
          <LocationCard title="Your City" desc="Add your outlet address" />
        </div>
      </section>

      <section id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold tracking-tight">Contact & Enquiry</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Next step: we’ll connect this form to WhatsApp / Email / Google Sheets.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold">Quick Actions</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
                  href="https://wa.me/919999999999?text=Hi%20Tea%20Time%2C%20I%20want%20franchise%20details."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Now
                </a>
                <a
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                  href="tel:+919999999999"
                >
                  Call
                </a>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Replace the phone number with the real Tea Time contact later.
              </p>
            </div>

            <form className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-extrabold">Send a Message</h3>
              <div className="mt-5 grid gap-3">
                <Input label="Full Name" placeholder="Your name" />
                <Input label="Phone" placeholder="Your phone number" />
                <Input label="City" placeholder="Your city" />
                <Input label="Message" placeholder="I want franchise details..." />
              </div>
              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Submit (backend next)
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Tea Time. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3">
      <div className="text-xs font-semibold text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-extrabold">{value}</div>
    </div>
  );
}

function MenuRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 p-4">
      <div>
        <p className="font-extrabold">{title}</p>
        <p className="mt-1 text-sm text-slate-600">{desc}</p>
      </div>
      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
        ☕
      </span>
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold">{title}</h3>
      <ul className="mt-4 grid gap-2 text-sm text-slate-700">
        {items.map((x) => (
          <li key={x} className="rounded-xl bg-slate-50 px-3 py-2">
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-lg bg-slate-900 text-white">
        ✓
      </span>
      <p className="text-sm text-slate-700">{children}</p>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4">
      <div className="text-xs font-semibold text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-extrabold">{value}</div>
    </div>
  );
}

function LocationCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-lg font-extrabold">{title}</p>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
      <a
        href="#contact"
        className="mt-4 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
      >
        Enquire
      </a>
    </div>
  );
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-semibold text-slate-700">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
      />
    </label>
  );
}
