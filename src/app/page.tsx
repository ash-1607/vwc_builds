import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            VISIONARY <span className="text-blue-600">WALLS</span>
          </h1>
          <a href="#quote" className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Premium Drywall & Ceiling Construction
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Delivering high-quality residential and commercial framing, boarding, and finishing with precision and speed.
          </p>
          <a href="#quote" className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded shadow-lg hover:bg-blue-500 transition">
            Start Your Project
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Metal & Wood Framing", desc: "Solid foundations for walls and drop ceilings engineered to exact specifications." },
            { title: "Drywall Installation", desc: "Expert boarding for renovations, basements, and new commercial builds." },
            { title: "Taping & Finishing", desc: "Flawless mudding and sanding, ready for prime and paint." }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
              <h4 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h4>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="quote" className="bg-slate-200 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Request an Estimate</h3>
            <p className="text-slate-600">
              Tell us about your project below. Our team will review the details and get back to you with pricing.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            {/* Your working Supabase/Resend form components sits here perfectly */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>© 2026 Visionary Walls and Ceilings. All rights reserved.</p>
      </footer>
    </div>
  );
}