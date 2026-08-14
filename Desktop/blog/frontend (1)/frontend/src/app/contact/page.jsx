// app/contact/page.jsx
export const metadata = {
  title: "Contact Us | FilmyCharcha",
  description: "Get in touch with FilmyCharcha for queries, partnerships, or feedback.",
};

const contactDetails = [
  {
    label: "Address",
    value: (
      <>
        RV Rising Entertainment, Office No. 47, 1st Floor, Heera Panna,
        Oshiwara, Andheri West, Mumbai, Maharashtra – 400102
      </>
    ),
  },
  {
    label: "Email",
    value: (
      <div className="flex flex-col">
        <a href="mailto:contact@filmycharcha.com" className="hover:text-crimson transition-colors">
          contact@filmycharcha.com
        </a>
        <a href="mailto:rvrisingentertainment@gmail.com" className="hover:text-crimson transition-colors">
          rvrisingentertainment@gmail.com
        </a>
      </div>
    ),
  },
  {
    label: "Official Number",
    value: (
      <div className="flex flex-col">
        <a href="tel:9594643234" className="hover:text-crimson transition-colors">
          9594643234
        </a>
        <a href="tel:9717298478" className="hover:text-crimson transition-colors">
          9717298478
        </a>
      </div>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">
          Contact <span className="text-crimson">Us</span>
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Have a question, story tip, or partnership idea? Reach out to us.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Contact Details Card */}
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="relative bg-crimson text-white text-sm font-semibold px-6 py-2 inline-block">
            Contact Details
          </div>
          <div className="border-t-4 border-crimson" />

          <div className="p-6 space-y-6">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:gap-4">
                <div className="w-full sm:w-40 flex-shrink-0 font-semibold text-sm text-gray-800">
                  {item.label}
                </div>
                <div className="flex gap-2 text-sm text-gray-600">
                  <span className="text-gray-400">:</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm min-h-[320px] lg:min-h-full">
          <iframe
            title="FilmyCharcha Office Location"
            src="https://maps.google.com/maps?q=Om+Heera+Panna+Mall,+Oshiwara+Police+Station+Rd,+Mhada+Colony,+Andheri+West,+Mumbai,+Maharashtra+400102&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "320px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Message Form */}
      <div className="mt-12 border-t border-gray-200 pt-10">
        <h2 className="font-display text-xl font-bold mb-1">Send Us a Message</h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill the form below and our team will get back to you soon.
        </p>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="What is this regarding?"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              required
              placeholder="Write your message here..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-crimson/40 resize-none"
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-crimson text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}