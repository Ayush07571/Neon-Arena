'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSent(false), 5000);
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-lg px-12 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-md";
  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div className="relative group">
        <User className={iconClasses} size={20} />
        <input
          required
          type="text"
          placeholder="Sector Callsign"
          className={inputClasses}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="relative group">
        <Mail className={iconClasses} size={20} />
        <input
          required
          type="email"
          placeholder="Encrypted Uplink Email"
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="relative group">
        <MessageSquare className="absolute left-4 top-4 text-gray-500 group-focus-within:text-cyan-400 transition-colors" size={20} />
        <textarea
          required
          rows={5}
          placeholder="Transmission Data"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-12 py-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 backdrop-blur-md resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full relative py-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-[0.3em] rounded group overflow-hidden transition-all duration-300 disabled:opacity-50"
      >
        <span className="relative z-10 flex items-center justify-center">
          {isSent ? 'Transmission Received' : isSubmitting ? 'Syncing...' : (
            <>
              Initialize Uplink
              <Send size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </span>
        <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {isSent && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-cyan-400 font-mono text-sm"
        >
          {"// SUCCESS: Data encrypted and forwarded to Central Hub."}
        </motion.p>
      )}
    </form>
  );
};
