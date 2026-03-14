'use client'
import { useState } from 'react';
import { Mail, Phone, Check, Loader2 } from 'lucide-react';

export default function ContactSection({ contactInfo, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) errs.email = 'Email address is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email';
    if (!form.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    
    setErrors({});
    setSubmitting(true);
    await onSubmit(form);
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = (field) => `w-full border rounded-xl px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2 bg-white ${
    errors[field] ? 'border-red-300 focus:ring-red-100' : 'border-gray-200 focus:ring-blue-100 focus:border-blue-400'
  }`;

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden grid grid-cols-1 md:grid-cols-2">
      {/* Left Column */}
      <div className="p-10 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-10">
          We'll show you self-help options first. Additional help is available if you need it, including live chat with our specialist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="bg-purple-50 text-purple-500 rounded-xl p-2 w-10 h-10 flex items-center justify-center mb-4">
              <Mail size={20} />
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">Our Email</p>
            <p className="text-xs text-gray-400 font-medium">{contactInfo?.email}</p>
          </div>

          <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="bg-blue-50 text-blue-500 rounded-xl p-2 w-10 h-10 flex items-center justify-center mb-4">
              <Phone size={20} />
            </div>
            <p className="text-sm font-bold text-gray-900 mb-1">Phone</p>
            <p className="text-xs text-gray-400 font-medium">{contactInfo?.phone}</p>
          </div>
        </div>
      </div>

      {/* Right Column (Form) */}
      <div className="bg-[#F8FAFC] p-10 md:p-12 border-l border-gray-50">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name</label>
            <input 
              type="text"
              placeholder="Full Name"
              className={inputClass('name')}
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.name}</p>}
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Email address</label>
            <input 
              type="email"
              placeholder="Enter your email address"
              className={inputClass('email')}
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.email}</p>}
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">About your inquiry</label>
            <textarea 
              rows={5}
              placeholder="Enter your message"
              className={`${inputClass('message')} resize-none`}
              value={form.message}
              onChange={(e) => setForm({...form, message: e.target.value})}
            />
            {errors.message && <p className="text-xs text-red-500 mt-1.5 font-medium">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting || submitted}
            className={`w-full py-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
              submitted 
                ? 'bg-green-500 text-white' 
                : 'bg-[#1D7DFF] hover:bg-blue-700 text-white shadow-lg shadow-blue-100 active:scale-[0.98]'
            }`}
          >
            {submitting ? (
              <><Loader2 size={18} className="animate-spin" /> Sending...</>
            ) : submitted ? (
              <><Check size={18} /> Message Sent!</>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}