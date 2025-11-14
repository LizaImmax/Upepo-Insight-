'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, 
  TrendingUp, 
  BarChart3, 
  Zap,
  ArrowRight,
  Sparkles,
  Globe2,
  Shield,
  Award
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm mb-8"
            >
              <Sparkles size={16} className="text-indigo-400" />
              <span className="text-sm font-medium text-gray-300">Africa's Premier Intelligence Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8"
            >
              <span className="block text-white mb-2">Transforming</span>
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Data into Authority
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
            >
              Comprehensive research, analytics, and intelligence for cloud computing and cybersecurity across Africa
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/reports" className="group btn-primary inline-flex items-center gap-2 text-base">
                Explore Research
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/metrics" className="btn-secondary inline-flex items-center gap-2 text-base">
                <BarChart3 size={18} />
                View Metrics
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
            >
              {[
                { value: '50+', label: 'Reports' },
                { value: '12', label: 'Countries' },
                { value: '500K+', label: 'Data Points' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-indigo-500"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Core Offerings */}
      <section className="section-padding bg-gradient-to-b from-[#0a0a0f] to-[#0f0f1a]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Intelligence That Powers <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                The Ecosystem
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FileText size={24} />,
                title: 'Research Reports',
                description: 'Quarterly and annual reports on cloud adoption, cybersecurity trends, and skills across Africa.',
                href: '/reports',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: <Zap size={24} />,
                title: 'Upepo Pulse',
                description: 'Monthly insights digest covering what\'s trending in cloud, cyber, and emerging technologies.',
                href: '/pulse',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <TrendingUp size={24} />,
                title: 'Industry Trends',
                description: 'Real-time tracking of cloud services, security patterns, and technology shifts.',
                href: '/trends',
                gradient: 'from-pink-500 to-orange-500'
              },
              {
                icon: <BarChart3 size={24} />,
                title: 'Metrics Dashboard',
                description: 'Live data on skill demand, salary trends, job markets, and adoption rates.',
                href: '/metrics',
                gradient: 'from-orange-500 to-yellow-500'
              },
              {
                icon: <Globe2 size={24} />,
                title: 'Knowledge Hub',
                description: 'Curated library of tutorials, breakdowns, and technical deep-dives.',
                href: '/knowledge-hub',
                gradient: 'from-cyan-500 to-blue-500'
              },
              {
                icon: <Shield size={24} />,
                title: 'Research Lab',
                description: 'Dedicated research analyzing industry data, community growth, and skill gaps.',
                href: '/research-lab',
                gradient: 'from-blue-500 to-indigo-500'
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={item.href}>
                  <div className="group relative h-full glass-card hover:border-indigo-500/30 transition-all duration-500 cursor-pointer">
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {item.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex items-center text-indigo-400 text-sm font-medium">
                      <span className="group-hover:mr-2 transition-all">Learn more</span>
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all" />
                    </div>

                    {/* Hover gradient effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Upepo Insights */}
      <section className="section-padding bg-[#0f0f1a] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/5 to-transparent"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                OUR MISSION
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Building Africa's <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Intelligence Authority
                </span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Data equals authority. By producing consistent, high-quality insights, Upepo becomes more than a community—we become a thought leader, trusted source, and the go-to platform for cloud and security intelligence in Africa.
              </p>

              <div className="space-y-4">
                {[
                  'Authoritative research backed by real data',
                  'Strategic insights for enterprises and institutions',
                  'Partner resource for universities and governments',
                  'Category leader in African cloud intelligence',
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Award size={12} className="text-white" />
                      </div>
                    </div>
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="inline-flex items-center gap-2 mt-8 text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Learn more about us
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-10">
                <h3 className="text-2xl font-bold text-white mb-8">Our Impact</h3>
                <div className="space-y-8">
                  {[
                    { label: 'Cloud Adoption Tracking', value: 85, countries: '12 Countries' },
                    { label: 'Skills Database', value: 92, count: '50K+ Profiles' },
                    { label: 'Research Publications', value: 78, count: '50+ Reports' },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-gray-300 font-medium">{item.label}</span>
                        <span className="text-indigo-400 font-bold">{item.countries || item.count}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.2 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Ahead with Upepo Pulse
              </h2>
              <p className="text-xl text-indigo-100 mb-10">
                Join thousands of professionals receiving monthly insights, trends, and reports directly to their inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button type="submit" className="px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm text-indigo-200">
                Free forever • Unsubscribe anytime • 10,000+ subscribers
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
