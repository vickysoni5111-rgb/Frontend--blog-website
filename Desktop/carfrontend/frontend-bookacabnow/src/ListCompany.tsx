import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  ChevronDown,
  Check,
  AlertCircle,
  FileText
} from 'lucide-react';

import car2 from './assets/car2.png';

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: 'opacity, transform',
        transitionDuration: '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)'
      }}
    >
      {children}
    </div>
  );
}

const WIZARD_STEPS = [
  { key: 'basic', label: 'Basic Details' },
  { key: 'business', label: 'Business Details' },
  { key: 'address', label: 'Address' },
  { key: 'fleet', label: 'Fleet Information' },
  { key: 'documents', label: 'Documents' },
  { key: 'branding', label: 'Branding' },
  { key: 'review', label: 'Review & Submit' }
];

const APPLICATION_PREVIEW = [
  { n: '01', label: 'Company profile' },
  { n: '02', label: 'Fleet and services' },
  { n: '03', label: 'Verification review' }
];

const LAUNCH_STEPS = [
  {
    icon: Building2,
    title: 'Add company details',
    desc: 'Share business identity, city, contact and services.'
  },
  {
    icon: FileText,
    title: 'Provide Text Details',
    desc: 'Add registration numbers, tax IDs and brand info directly as text.'
  },
  {
    icon: ShieldCheck,
    title: 'Await approval',
    desc: 'Your listing goes live after admin verification.'
  }
];

const FAQS = [
  {
    q: 'How long does approval take?',
    a: 'Most complete applications are reviewed within 2–3 business days. You will get an email once your listing is approved or if we need more information.'
  },
  {
    q: 'What documents or details do I need to register my company?',
    a: 'You will need business registration number, GST details (if applicable), fleet RC details, and a valid owner/contact ID.'
  },
  {
    q: 'Can I edit my profile after submitting?',
    a: 'Yes. You can update fleet, branding, and contact details anytime from your company dashboard, even after approval.'
  },
  {
    q: 'Is there a fee to register my company?',
    a: 'Registration and listing are free. BookACabNow only takes a commission on completed bookings routed through the platform.'
  }
];

const initialForm = {
  // basic
  companyName: '',
  ownerName: '',
  phone: '',
  whatsapp: '',
  email: '',
  // business
  registrationType: '',
  gstin: '',
  yearsInOperation: '',
  servicesOffered: '',
  // address
  address: '',
  city: '',
  state: '',
  pincode: '',
  citiesServed: '',
  // fleet
  totalVehicles: '',
  segments: '',
  driverPartners: '',
  avgVehicleAge: '',
  // documents (Text only now)
  businessRegNumber: '',
  gstNumber: '',
  fleetRcDetails: '',
  insuranceDetails: '',
  ownerIdNumber: '',
  // branding (Text only now)
  logoUrlText: '',
  tagline: '',
  aboutCompany: ''
};

const REQUIRED_BY_STEP = {
  basic: ['companyName', 'ownerName', 'phone'],
  address: ['city'],
  fleet: ['totalVehicles']
};

export default function ListCompany() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState(initialForm);

  const updateField = (key) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((err) => (err[key] ? { ...err, [key]: undefined } : err));
  };

  const validateStep = (stepKey) => {
    const required = REQUIRED_BY_STEP[stepKey];
    if (!required) return true;
    const nextErrors = {};
    required.forEach((key) => {
      if (!String(form[key] || '').trim()) {
        nextErrors[key] = 'This field is required.';
      }
    });
    setErrors((prev) => ({ ...prev, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    const currentKey = WIZARD_STEPS[activeStep].key;
    if (!validateStep(currentKey)) return;
    setActiveStep((s) => Math.min(s + 1, WIZARD_STEPS.length - 1));
  };

  const goBack = () => setActiveStep((s) => Math.max(s - 1, 0));

  const goToStep = (idx) => {
    if (idx <= activeStep) {
      setActiveStep(idx);
      return;
    }
    const currentKey = WIZARD_STEPS[activeStep].key;
    if (validateStep(currentKey)) setActiveStep(idx);
  };

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const handleSubmit = () => {
    const basicOk = validateStep('basic');
    const addressOk = validateStep('address');
    const fleetOk = validateStep('fleet');
    if (!basicOk) {
      setActiveStep(WIZARD_STEPS.findIndex((s) => s.key === 'basic'));
      return;
    }
    if (!addressOk) {
      setActiveStep(WIZARD_STEPS.findIndex((s) => s.key === 'address'));
      return;
    }
    if (!fleetOk) {
      setActiveStep(WIZARD_STEPS.findIndex((s) => s.key === 'fleet'));
      return;
    }

    navigate('/list-company/success');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-slate-800 font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={car2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b2853]/95 via-[#0b2853]/85 to-[#1D4ED8]/70" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28">
          <Reveal>
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-300/70 bg-black/20 backdrop-blur-sm text-amber-300 text-xs font-bold tracking-wider uppercase mb-6">
              Company Registration
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-3xl drop-shadow-sm">
              Register your taxi company
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mt-6">
              Create your BookACabNow partner profile with fleet details, company details, and city coverage.
              Your listing goes live after admin approval.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap gap-4 pt-8">
              <a
                href="#company-registration-form"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 hover:-translate-y-0.5 active:translate-y-0 text-slate-900 font-bold text-sm transition-all duration-200 shadow-lg shadow-black/20"
              >
                Start registration <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#company-register-process"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/15 border border-white/40 backdrop-blur-sm text-white hover:bg-white/25 hover:-translate-y-0.5 active:translate-y-0 font-semibold text-sm transition-all duration-200"
              >
                View process
              </a>
            </div>
          </Reveal>

          <Reveal delay={260} className="mt-14">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl max-w-xl">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Application preview
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-semibold">
                  7-step onboarding
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-2 mb-5">
                Complete company details, service coverage, document numbers, and brand info in one guided flow.
              </p>
              <div className="space-y-3">
                {APPLICATION_PREVIEW.map((item) => (
                  <div
                    key={item.n}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-100 border border-slate-200"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#1D4ED8] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {item.n}
                    </span>
                    <span className="text-sm font-bold text-slate-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="company-register-process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-3">
              How it works
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Launch your company profile in three steps
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LAUNCH_STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={idx * 100}>
                <div className="group bg-white p-7 rounded-2xl border border-slate-100 shadow-md h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-200">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold text-sm flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* FORM WIZARD SECTION */}
      <section id="company-registration-form" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-8 py-5 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider">
                  Draft
                </span>
                <span className="text-sm text-slate-500">
                  Complete all steps and submit for approval.
                </span>
              </div>
              <span className="text-xs font-semibold text-blue-700">
                Step {activeStep + 1} of {WIZARD_STEPS.length}
              </span>
            </div>

            <div className="h-1 bg-slate-100">
              <div
                className="h-full bg-[#1D4ED8] transition-all duration-500 ease-out"
                style={{ width: `${((activeStep + 1) / WIZARD_STEPS.length) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 p-4 sm:p-6">
                <ol className="space-y-1">
                  {WIZARD_STEPS.map((step, idx) => {
                    const isActive = idx === activeStep;
                    const isDone = idx < activeStep;
                    return (
                      <li key={step.key}>
                        <button
                          type="button"
                          onClick={() => goToStep(idx)}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-sm font-semibold transition-all duration-200 ${
                            isActive
                              ? 'bg-blue-50 text-blue-700 ring-1 ring-blue-200'
                              : 'text-slate-500 hover:bg-slate-50'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 transition-colors duration-200 ${
                              isDone
                                ? 'bg-green-600 text-white'
                                : isActive
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {isDone ? <Check className="w-3.5 h-3.5" /> : idx + 1}
                          </span>
                          {step.label}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="lg:col-span-8 p-6 sm:p-8">
                <WizardStepContent
                  step={WIZARD_STEPS[activeStep].key}
                  form={form}
                  updateField={updateField}
                  errors={errors}
                />

                <div className="flex justify-between pt-8 mt-8 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={goBack}
                    disabled={activeStep === 0}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-semibold hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Back
                  </button>
                  {activeStep < WIZARD_STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center px-6 py-2.5 rounded-xl bg-[#1D4ED8] hover:bg-blue-800 hover:-translate-y-0.5 active:translate-y-0 text-white text-sm font-semibold transition-all duration-200 shadow-md shadow-blue-500/20"
                    >
                      Continue <ChevronRight className="ml-1.5 w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="inline-flex items-center px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 hover:-translate-y-0.5 active:translate-y-0 text-slate-900 text-sm font-bold transition-all duration-200 shadow-md"
                    >
                      Submit for approval <Sparkles className="ml-1.5 w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-3">
              Support
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently asked questions
            </h2>
          </div>
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 70}>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: openFaq === idx ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {item.a}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {message}
    </p>
  );
}

/** Renders the text field set for active wizard step */
function WizardStepContent({ step, form, updateField, errors }) {
  const baseInput =
    'w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-shadow';
  const okInput = 'border-slate-200 focus:ring-blue-500/30 focus:border-blue-400';
  const errInput = 'border-red-300 focus:ring-red-500/30 focus:border-red-400';
  const inputClass = (hasError) => `${baseInput} ${hasError ? errInput : okInput}`;
  const labelClass = 'text-xs font-bold text-slate-600 mb-1.5 block';

  if (step === 'basic') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Basic Details</h3>
        <p className="text-sm text-slate-500 mb-6">Primary company and owner contact information.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Company name *</label>
            <input
              className={inputClass(errors.companyName)}
              placeholder="e.g. Rajdhani Cabs Pvt Ltd"
              value={form.companyName}
              onChange={updateField('companyName')}
            />
            <FieldError message={errors.companyName} />
          </div>
          <div>
            <label className={labelClass}>Owner name *</label>
            <input
              className={inputClass(errors.ownerName)}
              placeholder="Full name"
              value={form.ownerName}
              onChange={updateField('ownerName')}
            />
            <FieldError message={errors.ownerName} />
          </div>
          <div>
            <label className={labelClass}>Phone *</label>
            <input
              className={inputClass(errors.phone)}
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={updateField('phone')}
              inputMode="tel"
            />
            <FieldError message={errors.phone} />
          </div>
          <div>
            <label className={labelClass}>WhatsApp</label>
            <input
              className={inputClass(false)}
              placeholder="Same as phone, or different"
              value={form.whatsapp}
              onChange={updateField('whatsapp')}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Email address</label>
            <input
              type="email"
              className={inputClass(false)}
              placeholder="e.g. contact@rajdhanicabs.com"
              value={form.email}
              onChange={updateField('email')}
            />
          </div>
        </div>
      </div>
    );
  }

  if (step === 'business') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Business Details</h3>
        <p className="text-sm text-slate-500 mb-6">Specify business registration and tax details.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Registration Type</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. Pvt Ltd, Proprietorship, LLP"
              value={form.registrationType}
              onChange={updateField('registrationType')}
            />
          </div>
          <div>
            <label className={labelClass}>GSTIN</label>
            <input
              className={inputClass(false)}
              placeholder="GST Number (optional)"
              value={form.gstin}
              onChange={updateField('gstin')}
            />
          </div>
          <div>
            <label className={labelClass}>Years in operation</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. 5"
              value={form.yearsInOperation}
              onChange={updateField('yearsInOperation')}
            />
          </div>
          <div>
            <label className={labelClass}>Services Offered</label>
            <input
              className={inputClass(false)}
              placeholder="Outstation, Local, Airport Transfer..."
              value={form.servicesOffered}
              onChange={updateField('servicesOffered')}
            />
          </div>
        </div>
      </div>
    );
  }

  if (step === 'address') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Address</h3>
        <p className="text-sm text-slate-500 mb-6">Headquarters and coverage areas.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label className={labelClass}>Office Address</label>
            <input
              className={inputClass(false)}
              placeholder="Street address, building, suite"
              value={form.address}
              onChange={updateField('address')}
            />
          </div>
          <div>
            <label className={labelClass}>City *</label>
            <input
              className={inputClass(errors.city)}
              placeholder="Main city"
              value={form.city}
              onChange={updateField('city')}
            />
            <FieldError message={errors.city} />
          </div>
          <div>
            <label className={labelClass}>State</label>
            <input
              className={inputClass(false)}
              placeholder="State"
              value={form.state}
              onChange={updateField('state')}
            />
          </div>
          <div>
            <label className={labelClass}>Pincode</label>
            <input
              className={inputClass(false)}
              placeholder="6-digit pincode"
              value={form.pincode}
              onChange={updateField('pincode')}
            />
          </div>
          <div>
            <label className={labelClass}>Cities Served</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. Delhi, Jaipur, Agra"
              value={form.citiesServed}
              onChange={updateField('citiesServed')}
            />
          </div>
        </div>
      </div>
    );
  }

  if (step === 'fleet') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Fleet Information</h3>
        <p className="text-sm text-slate-500 mb-6">Information about your vehicles and operations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Total Vehicles *</label>
            <input
              className={inputClass(errors.totalVehicles)}
              placeholder="Number of vehicles in fleet"
              value={form.totalVehicles}
              onChange={updateField('totalVehicles')}
            />
            <FieldError message={errors.totalVehicles} />
          </div>
          <div>
            <label className={labelClass}>Vehicle Segments</label>
            <input
              className={inputClass(false)}
              placeholder="Sedan, SUV, Luxury, Tempo"
              value={form.segments}
              onChange={updateField('segments')}
            />
          </div>
          <div>
            <label className={labelClass}>Driver Partners</label>
            <input
              className={inputClass(false)}
              placeholder="Number of drivers"
              value={form.driverPartners}
              onChange={updateField('driverPartners')}
            />
          </div>
          <div>
            <label className={labelClass}>Average Vehicle Age</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. 2 years"
              value={form.avgVehicleAge}
              onChange={updateField('avgVehicleAge')}
            />
          </div>
        </div>
      </div>
    );
  }

  // DOCUMENTS - Pure Text Details (File upload removed completely)
  if (step === 'documents') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Document Information</h3>
        <p className="text-sm text-slate-500 mb-6">Provide document identification numbers for verification.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Business Registration No.</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. CIN / Registration Number"
              value={form.businessRegNumber}
              onChange={updateField('businessRegNumber')}
            />
          </div>
          <div>
            <label className={labelClass}>GSTIN Certificate No.</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. 07AAAAA0000A1Z5"
              value={form.gstNumber}
              onChange={updateField('gstNumber')}
            />
          </div>
          <div>
            <label className={labelClass}>Fleet RC Numbers / Summary</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. DL01AB1234, DL01CD5678"
              value={form.fleetRcDetails}
              onChange={updateField('fleetRcDetails')}
            />
          </div>
          <div>
            <label className={labelClass}>Commercial Insurance / Permit No.</label>
            <input
              className={inputClass(false)}
              placeholder="Policy / Permit details"
              value={form.insuranceDetails}
              onChange={updateField('insuranceDetails')}
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Owner Identity Proof (PAN / Tax ID)</label>
            <input
              className={inputClass(false)}
              placeholder="PAN Number or Identity Registration Number"
              value={form.ownerIdNumber}
              onChange={updateField('ownerIdNumber')}
            />
          </div>
        </div>
      </div>
    );
  }

  // BRANDING - Pure Text Details
  if (step === 'branding') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Branding</h3>
        <p className="text-sm text-slate-500 mb-6">Add text information for your public listing profile.</p>
        <div className="space-y-5">
          <div>
            <label className={labelClass}>Company Tagline</label>
            <input
              className={inputClass(false)}
              placeholder="e.g. Premium & Reliable Outstation Cab Service"
              value={form.tagline}
              onChange={updateField('tagline')}
            />
          </div>
          <div>
            <label className={labelClass}>Logo / Banner Image URL (Optional link)</label>
            <input
              className={inputClass(false)}
              placeholder="https://example.com/logo.png"
              value={form.logoUrlText}
              onChange={updateField('logoUrlText')}
            />
          </div>
          <div>
            <label className={labelClass}>About Company</label>
            <textarea
              rows={4}
              className={`${inputClass(false)} resize-none`}
              placeholder="Write a brief description about your taxi business, experience, and commitment to service quality..."
              value={form.aboutCompany}
              onChange={updateField('aboutCompany')}
            />
          </div>
        </div>
      </div>
    );
  }

  // REVIEW STEP
  if (step === 'review') {
    return (
      <div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-1">Review & Submit</h3>
        <p className="text-sm text-slate-500 mb-6">Verify your information before submitting for approval.</p>
        <div className="space-y-4 text-sm bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-600">Company Name:</span>
            <span className="text-slate-900">{form.companyName || 'N/A'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-600">Owner Name:</span>
            <span className="text-slate-900">{form.ownerName || 'N/A'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-600">Phone:</span>
            <span className="text-slate-900">{form.phone || 'N/A'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-600">City:</span>
            <span className="text-slate-900">{form.city || 'N/A'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 border-b border-slate-200 pb-2">
            <span className="font-bold text-slate-600">Total Vehicles:</span>
            <span className="text-slate-900">{form.totalVehicles || 'N/A'}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <span className="font-bold text-slate-600">Reg / ID Details:</span>
            <span className="text-slate-900">{form.businessRegNumber || form.ownerIdNumber || 'Provided'}</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}