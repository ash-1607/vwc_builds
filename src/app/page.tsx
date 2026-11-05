import ContactForm from "@/components/contactForm";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-2">Request an Estimate</h1>
        <p className="text-gray-600 text-center mb-8">
          Tell us about your drywall or framing project and we'll get back to you with a quote.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}