import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  PhoneCall 
} from 'lucide-react';

function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Booking', 'Payments', 'Cancellations', 'Safety'];

  const faqList = [
    {
      category: "Booking",
      question: "How can I book a verified cab on BookCabNow?",
      answer: "You can book a cab easily by selecting your trip type (One Way, Round Trip, Airport Transfer, or Local Rental), entering your pickup and drop locations, and comparing approved cab companies and their fleets. Click 'Book Now' on your preferred vehicle to finalize your ride."
    },
    {
      category: "Booking",
      question: "Are the drivers and cab companies fully verified?",
      answer: "Yes, absolutely! Every partner company listed on BookCabNow undergoes strict background checks, vehicle inspection verification, and license validation to ensure your absolute safety during outstation and city trips."
    },
    {
      category: "Payments",
      question: "What payment methods are accepted?",
      answer: "We support multiple secure payment options including UPI, Credit/Debit cards, Net Banking, and cash payments directly to verified chauffeurs where applicable."
    },
    {
      category: "Payments",
      question: "Are there any hidden charges or toll fees included?",
      answer: "No hidden charges! Our pricing is completely transparent. Toll taxes, state taxes, and parking fees are either clearly itemized during checkout or included as per your chosen package."
    },
    {
      category: "Cancellations",
      question: "What is the cancellation policy for booked cabs?",
      answer: "You can cancel your booking directly from your dashboard. Free cancellations are available up to a few hours before your scheduled pickup time depending on the partner company's policy."
    },
    {
      category: "Safety",
      question: "What safety protocols are followed during the ride?",
      answer: "Our partners provide sanitized vehicles, GPS-enabled tracking for all trips, 24/7 customer support assistance, and background-verified professional drivers."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqList.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/backgroundpic.png" 
            alt="FAQ Highway Background" 
            className="w-full h-full object-cover object-center brightness-75"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1920&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-[#F8FAFC]"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto -mt-6">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" /> BookCabNow Help Center
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            Frequently asked <span className="text-amber-400">questions.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 font-medium max-w-2xl mx-auto drop-shadow">
            Got questions about bookings, payments, or verified cab partners? Find quick answers right here.
          </p>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORIES BAR */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 -mt-14 pb-12">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-300/60 border border-slate-100 p-6 sm:p-8 backdrop-blur-xl">
          <div className="relative mb-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
              <Search className="w-5 h-5" />
            </span>
            <input 
              type="text"
              placeholder="Search your question here (e.g., payments, cancellation, safety)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-sm sm:text-base font-medium rounded-2xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACCORDION FAQ LIST SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Need clear answers?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-1">
            Browse through our most common inquiries below.
          </p>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching questions found</h3>
            <p className="text-slate-500 text-sm">Try searching with another keyword or explore all categories.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
                    isOpen ? 'border-blue-500/50 ring-4 ring-blue-500/5' : 'border-slate-200/80'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                      <span className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 bg-blue-600 text-white' : ''
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80 mt-1">
                      <p className="pt-4">
                        {faq.answer}
                      </p>
                      <div className="mt-3 inline-block bg-slate-100 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        Category: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 4. SUPPORT BANNER */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-600/30 border border-blue-400/30 rounded-2xl flex items-center justify-center mx-auto mb-5 backdrop-blur-md">
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Still have questions or need custom assistance?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8">
              Our support team is available 24/7 to help you with bookings, emergency support, and cab partner inquiries.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-8 py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 transition-all text-sm flex items-center gap-2">
                <PhoneCall className="w-4 h-4" /> Contact Support
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-3.5 rounded-2xl backdrop-blur-md transition-all text-sm">
                Chat with Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default FAQ; 