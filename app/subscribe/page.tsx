'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';

export default function SubscribePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setName('');
      }
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-royal-950 via-black to-black">
      <div className="container-custom section-padding">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail size={40} className="text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Subscribe to <span className="gradient-text-gold">Upepo Pulse</span>
            </h1>
            <p className="text-xl text-gray-300">
              Get monthly insights, research reports, and industry trends delivered to your inbox
            </p>
          </motion.div>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="card-royal text-center p-12"
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">You're all set! 🎉</h2>
              <p className="text-gray-300 mb-6">
                Welcome to Upepo Pulse! Check your inbox for a confirmation email.
              </p>
              <p className="text-sm text-gray-400">
                You'll receive your first digest at the start of next month.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-royal"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? 'Subscribing...' : 'Subscribe to Upepo Pulse'}
                </button>

                <p className="text-sm text-gray-400 text-center">
                  Free forever. Unsubscribe anytime. We respect your privacy.
                </p>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="font-semibold mb-4">What you'll get:</h3>
                <ul className="space-y-3">
                  {[
                    'Monthly industry insights and trends',
                    'Early access to new research reports',
                    'Cloud & cyber security updates',
                    'Job market and salary trends',
                    'Exclusive content and analysis'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
