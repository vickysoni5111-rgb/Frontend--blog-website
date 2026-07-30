import React, { useEffect, useState } from "react";
import { 
  PhoneCall, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Headphones,
  Compass
} from "lucide-react";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";

// Background Image Import
import carPic3 from "./assets/carpic3.png";

const Contact1: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
    website: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-slate-900 font-sans overflow-hidden selection:bg-amber-400 selection:text-slate-950">

      {/* ================= HERO SECTION WITH carpic3.png BACKGROUND ================= */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={carPic3}
            alt="Contact BookACabNow"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Overlay for text contrast, fades into white at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-white"></div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[140px] pointer-events-none z-[1]"></div>

        <div className="max-w-[1450px] mx-auto px-6 lg:px-16 w-full relative z-10 text-center">
          
          <div data-aos="fade-down" data-aos-duration="1000" className="inline-flex items-center gap-2 bg-white/10 border border-amber-300/40 text-amber-300 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase shadow-xl backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            GET IN TOUCH WITH US
          </div>

          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight max-w-4xl mx-auto mb-6" data-aos="fade-up" data-aos-duration="1200">
            We Are Here to Help Your Journey Begin with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Confidence</span>
          </h1>

          <p className="text-slate-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="250">
            Reach our taxi booking team through the channel that works best for you. Whether it is an outstation custom itinerary or an airport transfer, we are ready to assist.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-3 rounded-2xl backdrop-blur-md text-sm text-white">
              <ShieldCheck size={18} className="text-amber-400" /> 100% Secure Support
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-3 rounded-2xl backdrop-blur-md text-sm text-white">
              <Zap size={18} className="text-amber-400" /> Quick Response Time
            </div>
          </div>

        </div>
      </section>

      {/* ================= SUPPORT CARDS SECTION ================= */}
      <section className="py-24 bg-white border-t border-slate-200 relative">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              COMMUNICATION CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Support options tailored for you
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Pick your preferred way to connect with our fleet executives.
            </p>
          </div>

          {/* Grid of 5 Distinct Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            
            {/* Card 1: Call */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
              <div>
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <PhoneCall size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  Contact number available soon
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                Direct Line
              </div>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <MessageSquare size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  Chat support available soon
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                Instant Chat
              </div>
            </div>

            {/* Card 3: Email */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="300">
              <div>
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <Mail size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  Email support available soon
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                Inquiries
              </div>
            </div>

            {/* Card 4: Location */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <MapPin size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  Serving Delhi NCR and Rajasthan routes
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                Regional Hub
              </div>
            </div>

            {/* Card 5: Business Hours */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-300 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between md:col-span-2 lg:col-span-1 xl:col-span-1" data-aos="fade-up" data-aos-delay="500">
              <div>
                <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                  <Clock size={26} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Business Hours</h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  Mon-Sun, 8:00 AM-10:00 PM
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                Availability
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= BOOKING DESK & ENQUIRY SECTION ================= */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Form Details & Description */}
            <div className="lg:col-span-5 space-y-8" data-aos="fade-right" data-aos-duration="1000">
              
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
                  01 / BOOKING DESK
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mt-4 tracking-tight">
                  Send an enquiry
                </h2>
                <p className="text-slate-500 text-base font-normal mt-4 leading-relaxed">
                  Tell us how we can help. Share your pickup city, destination, date and cab preference.
                </p>
              </div>

              {/* Points with cool icons */}
              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Pickup City & Destination</h4>
                    <p className="text-slate-500 text-xs mt-1">Specify your exact route requirements across Delhi NCR and Rajasthan.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Date & Time Schedule</h4>
                    <p className="text-slate-500 text-xs mt-1">Let us know when you need your cab dispatched for total punctuality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">Cab Preference</h4>
                    <p className="text-slate-500 text-xs mt-1">Choose between standard sedans, corporate business cabs, or family SUVs.</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side: Interactive Enquiry Form */}
            <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="1000">
              <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-[32px] shadow-xl relative">
                
                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-amber-400 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Enquiry Received Successfully!</h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto">
                      Thank you for reaching out. Our booking team will review your route details and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-amber-600 font-bold px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Your Name <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Email Address <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Mobile Number <span className="text-amber-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="mobile"
                          required
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                          Website (Optional)
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://yourwebsite.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                        />
                      </div>

                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Subject <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Outstation Taxi Jaipur to Delhi"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                        Message <span className="text-amber-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your pickup city, destination, date and cab preference..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:bg-white transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 text-sm cursor-pointer"
                    >
                      Send Message <Send size={16} />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= GOOGLE MAP SECTION POINTING TO DELHI NCR & RAJASTHAN ================= */}
      <section className="py-20 bg-white border-t border-slate-200 relative">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-16">
          
          <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              SERVICE COVERAGE ZONE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4">
              Serving Delhi NCR and Rajasthan routes
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
              Pickup availability depends on your selected taxi service and itinerary.
            </p>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-slate-200 shadow-xl relative h-[450px] bg-slate-100" data-aos="zoom-in">
            {/* Embedded Google Map focusing on Delhi NCR & Rajasthan */}
            <iframe
              title="Serving Delhi NCR and Rajasthan routes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0518779956487!2d75.7872708!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db41264426511%3A0xfa5d8d477a3d3c82!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay informative badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 border border-slate-200 px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center flex-shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Serving Delhi NCR and Rajasthan routes</p>
                <p className="text-xs text-slate-500 mt-0.5">Pickup availability depends on your selected taxi service and itinerary.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact1;