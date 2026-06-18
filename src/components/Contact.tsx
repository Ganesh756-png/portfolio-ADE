"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.635-1.019-5.111-2.875-6.968-1.857-1.858-4.331-2.88-6.963-2.88-5.439 0-9.865 4.425-9.87 9.861-.002 1.748.459 3.456 1.336 4.965l-.975 3.565 3.653-.956zm11.396-6.195c-.3-.15-1.774-.875-2.053-.976-.279-.101-.482-.15-.683.15-.201.301-.778.976-.953 1.177-.175.201-.35.226-.65.076-.3-.15-1.266-.467-2.41-1.487-.89-.794-1.49-1.775-1.665-2.076-.175-.3-.019-.462.13-.611.135-.134.301-.351.451-.526.15-.175.2-.301.3-.501.1-.201.05-.376-.025-.526-.075-.15-.682-1.644-.934-2.253-.245-.595-.494-.515-.683-.525-.178-.009-.382-.01-.586-.01-.204 0-.537.077-.817.377-.28.301-1.07 1.051-1.07 2.562 0 1.511 1.1 2.969 1.25 3.17 1.15 1.56 2.65 2.5 4.15 3.05.351.13.67.2.92.24.475.05.905.02 1.245-.03.38-.06.774-.25 1.07-.5 1.02-.85 1.774-1.675 1.774-1.925 0-.25-.101-.376-.301-.501z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let valid = true;
    const tempErrors = { name: "", email: "", message: "" };

    if (!form.name.trim()) {
      tempErrors.name = "Name is required";
      valid = false;
    }

    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = `https://wa.me/911234567890?text=${encodeURIComponent(
      `Hi Ganesh, my name is ${form.name}. My email is ${form.email}.\n\nMessage: ${form.message}`
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger success confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00f2fe", "#0078d4", "#8b5cf6"],
    });

    // Clear form
    setForm({ name: "", email: "", message: "" });

    // Reset success alert after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold font-outfit text-white"
          >
            Get In <span className="text-gradient-cyan">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-16 h-1 bg-gradient-to-r from-neon-cyan to-azure-blue mx-auto mt-4 rounded-full"
          />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-light text-sm">
            Have a vacancy or interest in a project collaboration? Drop a message below or connect via email or LinkedIn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Info Details (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card border-white/5 shadow-xl"
          >
            <div className="space-y-6">
              <h3 className="font-outfit text-xl font-bold text-white mb-2">
                Connect Information
              </h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">
                I am actively seeking internship opportunities, junior data analyst, or associate Azure data engineering roles. Let&apos;s build something great.
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:ganesh.thakur@example.com"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-azure-blue/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-azure-blue/15 transition-all">
                    <Mail className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    ganesh.thakur@example.com
                  </span>
                </a>

                <a
                  href="https://linkedin.com/in/ganesh-thakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-azure-blue/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-azure-blue/15 transition-all">
                    <LinkedinIcon className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    linkedin.com/in/ganesh-thakur
                  </span>
                </a>

                <a
                  href="https://github.com/ganesh-thakur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-azure-blue/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-azure-blue/15 transition-all">
                    <GithubIcon className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    github.com/ganesh-thakur
                  </span>
                </a>

                <a
                  href="https://wa.me/911234567890?text=Hi%20Ganesh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-white/5 hover:border-green-500/20 transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-green-500/15 transition-all">
                    <WhatsappIcon className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                    Chat on WhatsApp
                  </span>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-900/40 border border-white/5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                    <MapPin className="w-4 h-4 text-neon-cyan" />
                  </div>
                  <span className="text-sm text-slate-300">
                    Sawantwadi, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-xs text-slate-500 font-mono mt-8 border-t border-white/5 pt-4">
              Response average time: &lt; 24 hours
            </div>
          </motion.div>

          {/* Form Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-card border-white/5 shadow-xl flex flex-col justify-between"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 text-sm rounded-xl flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Your message was sent successfully! Ganesh will get back to you soon.</span>
                </motion.div>
              )}

              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  placeholder="Ganesh Thakur"
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all ${
                    errors.name ? "border-red-500/50" : "border-white/5"
                  }`}
                />
                {errors.name && (
                  <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  placeholder="example@domain.com"
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all ${
                    errors.email ? "border-red-500/50" : "border-white/5"
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: "" });
                  }}
                  placeholder="Write your message here..."
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/20 transition-all resize-none ${
                    errors.message ? "border-red-500/50" : "border-white/5"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-red-400 flex items-center gap-1.5 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-azure-blue to-neon-cyan text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-azure-blue/20 hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* WhatsApp button */}
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer border border-emerald-500/20"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
