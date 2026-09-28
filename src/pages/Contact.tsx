import { useState } from 'react';

const interests = [
  'SG Technology',
  'SG Construction',
  'SG Logistics',
  'SG E-Commerce',
  'SG E-Learning',
  'SG Agriculture',
  'General Enquiry',
  'Partnership',
  'Other',
];

const budgetRanges = [
  'Prefer not to say',
  'Under ₦5 million',
  '₦5M – ₦20M',
  '₦20M – ₦100M',
  '₦100M+',
  'International / USD',
];

const contactMethods = ['Email', 'Phone call', 'Video meeting', 'WhatsApp'];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  challenge: string;
  budget: string;
  preferredContact: string;
  consent: boolean;
};

const empty: FormState = {
  name: '', company: '', email: '', phone: '', country: '',
  interest: '', challenge: '', budget: '', preferredContact: '', consent: false,
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const val = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) errs.email = 'Enter a valid email address.';
    if (!form.interest) errs.interest = 'Please select an area of interest.';
    if (!form.challenge.trim()) errs.challenge = 'Please briefly describe your challenge or project.';
    if (!form.consent) errs.consent = 'Please confirm your consent to proceed.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-[#003B73] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="section-label mb-4">Get in Touch</div>
          <h1 className="font-display font-bold text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Start a Conversation.
          </h1>
          <p className="mt-4 text-white/60 max-w-xl text-lg leading-relaxed">
            Tell us what you are trying to achieve. Our team will respond promptly with the right conversation partner.
          </p>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Contact details */}
          <div>
            <h2 className="font-display font-bold text-[#003B73] text-xl mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div>
                <div className="section-label mb-2">Address</div>
                <address className="not-italic text-[#29323A]/70 text-sm leading-relaxed">
                  OASIC Estate,<br />
                  24B Okunola Aina Street,<br />
                  Okupe Estate, Maryland,<br />
                  Lagos, Nigeria
                </address>
              </div>
              <div>
                <div className="section-label mb-2">Phone</div>
                <div className="space-y-1">
                  <a href="tel:+2348023120797" className="block text-sm text-[#0057A8] hover:text-[#003B73] transition-colors">+234 802 312 0797</a>
                  <a href="tel:+2347033395702" className="block text-sm text-[#0057A8] hover:text-[#003B73] transition-colors">+234 703 339 5702</a>
                </div>
              </div>
              <div>
                <div className="section-label mb-2">Email</div>
                <div className="space-y-1">
                  <a href="mailto:info@sgglobalalliance.com" className="block text-sm text-[#0057A8] hover:text-[#003B73] transition-colors">info@sgglobalalliance.com</a>
                  <a href="mailto:sgglobalalliance@gmail.com" className="block text-sm text-[#0057A8] hover:text-[#003B73] transition-colors">sgglobalalliance@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 rounded border border-[#DDE4EE] overflow-hidden bg-[#DDE4EE] flex items-center justify-center" style={{ height: 200 }}>
              <div className="text-center">
                <svg className="mx-auto text-[#B0BBC8]" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16 3C10.477 3 6 7.477 6 13c0 8 10 18 10 18s10-10 10-18C26 7.477 21.523 3 16 3z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="text-[#B0BBC8] text-xs mt-2">Map — Maryland, Lagos</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-[#DDE4EE] rounded p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEF8F3] flex items-center justify-center mx-auto mb-5">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="12" stroke="#3A7D44" strokeWidth="1.5" />
                    <path d="M8 14l4 4 8-8" stroke="#3A7D44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-display font-bold text-[#003B73] text-2xl mb-3">Message received.</h2>
                <p className="text-[#29323A]/60 text-sm leading-relaxed max-w-sm mx-auto">
                  Thank you, {form.name.split(' ')[0]}. A member of our team will be in touch using your preferred contact method.
                </p>
                <button
                  onClick={() => { setForm(empty); setSubmitted(false); }}
                  className="mt-6 px-5 py-2.5 border border-[#DDE4EE] text-[#29323A] text-sm font-medium rounded hover:border-[#0057A8] hover:text-[#0057A8] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-white border border-[#DDE4EE] rounded p-8 space-y-5">
                <h2 className="font-display font-bold text-[#003B73] text-xl mb-1">Send us a message</h2>
                <p className="text-[#29323A]/50 text-sm">Fields marked * are required.</p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" error={errors.name}>
                    <input value={form.name} onChange={set('name')} type="text" placeholder="Your name" className={inputCls(!!errors.name)} />
                  </Field>
                  <Field label="Company / Organization" error={errors.company}>
                    <input value={form.company} onChange={set('company')} type="text" placeholder="Company name" className={inputCls(false)} />
                  </Field>
                  <Field label="Email Address *" error={errors.email}>
                    <input value={form.email} onChange={set('email')} type="email" placeholder="you@company.com" className={inputCls(!!errors.email)} />
                  </Field>
                  <Field label="Phone Number" error={errors.phone}>
                    <input value={form.phone} onChange={set('phone')} type="tel" placeholder="+234 …" className={inputCls(false)} />
                  </Field>
                  <Field label="Country" error={errors.country}>
                    <input value={form.country} onChange={set('country')} type="text" placeholder="Nigeria" className={inputCls(false)} />
                  </Field>
                  <Field label="Area of Interest *" error={errors.interest}>
                    <select value={form.interest} onChange={set('interest')} className={inputCls(!!errors.interest)}>
                      <option value="">Select…</option>
                      {interests.map((i) => <option key={i}>{i}</option>)}
                    </select>
                  </Field>
                </div>

                <Field label="Project / Challenge *" error={errors.challenge}>
                  <textarea
                    value={form.challenge}
                    onChange={set('challenge')}
                    rows={4}
                    placeholder="Briefly describe what you are trying to achieve or the challenge you are facing…"
                    className={inputCls(!!errors.challenge)}
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Budget Range (optional)" error={undefined}>
                    <select value={form.budget} onChange={set('budget')} className={inputCls(false)}>
                      <option value="">Prefer not to say</option>
                      {budgetRanges.slice(1).map((r) => <option key={r}>{r}</option>)}
                    </select>
                  </Field>
                  <Field label="Preferred Contact Method" error={undefined}>
                    <select value={form.preferredContact} onChange={set('preferredContact')} className={inputCls(false)}>
                      <option value="">No preference</option>
                      {contactMethods.map((m) => <option key={m}>{m}</option>)}
                    </select>
                  </Field>
                </div>

                <div>
                  <label className={`flex items-start gap-3 cursor-pointer ${errors.consent ? 'text-red-500' : 'text-[#29323A]/60'}`}>
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={set('consent')}
                      className="mt-0.5 accent-[#0057A8]"
                    />
                    <span className="text-xs leading-relaxed">
                      I consent to SG Global Alliance Limited processing my personal information to respond to this enquiry. I understand my data will be handled in accordance with their privacy policy.
                    </span>
                  </label>
                  {errors.consent && <p className="mt-1 text-xs text-red-500">{errors.consent}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#0057A8] text-white font-bold text-sm rounded hover:bg-[#003B73] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, error, children }: { label: string; error: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#29323A]/70 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-3.5 py-2.5 text-sm border rounded bg-[#F7F9FC] text-[#29323A] placeholder-[#29323A]/30 focus:outline-none transition-colors ${
    hasError
      ? 'border-red-400 focus:border-red-500'
      : 'border-[#DDE4EE] focus:border-[#0057A8]'
  }`;
}
