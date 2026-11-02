import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon } from '../common/SocialIcons';
import { companyData, servicesData } from '../../data/consultancyData';
import { ContactFormData } from '../../types';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    phone: '',
    service: servicesData[0]?.name || 'Business Consulting',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Business Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email address.';
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company / Enterprise name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid contact phone number.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide brief context regarding your strategic challenge.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Message must be at least 15 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-level error on change
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        companyName: '',
        phone: '',
        service: servicesData[0]?.name || 'Business Consulting',
        message: '',
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Badge variant="orange" className="mb-4">
                Confidential Inquiry
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-black tracking-tight leading-[1.15] mb-6">
                Start Your Strategic <span className="text-brand-orange">Transformation</span>.
              </h2>

              <p className="text-base text-brand-gray-600 leading-relaxed mb-8">
                Connect with our senior practice partners to assess your operational horizon,
                diagnose structural bottlenecks, or discuss an impending corporate transaction.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6 mb-10">
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-brand-gray-400 tracking-wider">
                      Direct Advisory Email
                    </span>
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-base sm:text-lg font-bold text-brand-black hover:text-brand-orange transition-colors"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-brand-gray-400 tracking-wider">
                      Headquarters Direct Line
                    </span>
                    <a
                      href={`tel:${companyData.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-base sm:text-lg font-bold text-brand-black hover:text-brand-orange transition-colors"
                    >
                      {companyData.phone}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-brand-gray-400 tracking-wider">
                      Global Headquarters
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-brand-black leading-snug">
                      {companyData.address}
                    </p>
                  </div>
                </div>

                {/* Business Hours & SLA */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-gray-100 text-brand-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-bold text-brand-gray-400 tracking-wider">
                      Operating Hours & SLA
                    </span>
                    <p className="text-sm text-brand-gray-700 font-medium">
                      {companyData.businessHours}
                    </p>
                    <span className="text-xs text-brand-orange font-bold mt-0.5 block">
                      ⚡ Average partner response time &lt; 24 business hours
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-brand-gray-200">
              <span className="block text-xs uppercase font-bold text-brand-gray-400 tracking-wider mb-3">
                Follow Vanguard Executive Perspectives
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={companyData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vanguard on LinkedIn"
                  className="w-10 h-10 rounded-lg bg-brand-gray-100 hover:bg-brand-orange hover:text-white text-brand-black flex items-center justify-center transition-colors cursor-pointer"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={companyData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vanguard on Twitter"
                  className="w-10 h-10 rounded-lg bg-brand-gray-100 hover:bg-brand-orange hover:text-white text-brand-black flex items-center justify-center transition-colors cursor-pointer"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a
                  href={companyData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vanguard on GitHub"
                  className="w-10 h-10 rounded-lg bg-brand-gray-100 hover:bg-brand-orange hover:text-white text-brand-black flex items-center justify-center transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={companyData.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Vanguard on YouTube"
                  className="w-10 h-10 rounded-lg bg-brand-gray-100 hover:bg-brand-orange hover:text-white text-brand-black flex items-center justify-center transition-colors cursor-pointer"
                >
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-gray-50 rounded-3xl p-8 sm:p-10 border border-brand-gray-200/90 shadow-elevated relative">
              
              <div className="mb-8">
                <h3 className="text-2xl font-extrabold text-brand-black mb-2">
                  Request a Diagnostic Briefing
                </h3>
                <p className="text-sm text-brand-gray-600">
                  Please provide preliminary details regarding your enterprise requirement. All submissions are governed by strict mutual non-disclosure.
                </p>
              </div>

              {/* Success Confirmation State */}
              {isSubmitted ? (
                <div
                  role="status"
                  className="bg-white rounded-2xl p-8 border border-green-200 text-center animate-fade-in space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h4 className="text-2xl font-bold text-brand-black">
                    Briefing Request Received
                  </h4>
                  <p className="text-sm text-brand-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you. A senior managing partner will review your enterprise details and contact you within 24 business hours to arrange a confidential discussion.
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  
                  {/* Grid for Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-brand-gray-700 mb-1.5"
                      >
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Jonathan Mercer"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all min-h-[44px] ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-brand-gray-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-brand-gray-700 mb-1.5"
                      >
                        Business Email <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="j.mercer@enterprise.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all min-h-[44px] ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-brand-gray-300'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Grid for Company & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="companyName"
                        className="block text-xs font-bold uppercase tracking-wider text-brand-gray-700 mb-1.5"
                      >
                        Company Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Global Industries"
                        aria-invalid={!!errors.companyName}
                        aria-describedby={errors.companyName ? 'companyName-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all min-h-[44px] ${
                          errors.companyName ? 'border-red-500 bg-red-50/20' : 'border-brand-gray-300'
                        }`}
                      />
                      {errors.companyName && (
                        <p id="companyName-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.companyName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-brand-gray-700 mb-1.5"
                      >
                        Phone Number <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 019-2830"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all min-h-[44px] ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-brand-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Interested In Dropdown */}
                  <div>
                    <label
                      htmlFor="service-select"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-gray-700 mb-1.5"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-brand-gray-300 text-sm text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all cursor-pointer min-h-[44px]"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.name}>
                          {svc.name}
                        </option>
                      ))}
                      <option value="Enterprise Comprehensive Advisory">
                        Enterprise Comprehensive Advisory (Multi-Disciplinary)
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-brand-gray-700 mb-1.5"
                    >
                      Message / Strategic Objective <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your strategic objectives, key friction points, or transformation timeline..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-brand-black placeholder:text-brand-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-brand-gray-300'
                      }`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      fullWidth
                      size="lg"
                      variant="primary"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <ArrowRight className="w-5 h-5" />}
                    >
                      {isSubmitting ? 'Transmitting Secure Request...' : 'Submit Consultation Enquiry'}
                    </Button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-brand-gray-400 text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                    <span>256-bit encrypted transmission • Strict NDA compliant</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
