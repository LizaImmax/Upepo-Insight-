'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Calendar,
  Tag,
  Star,
  TrendingUp,
  FileText,
  Lock
} from 'lucide-react';
import Link from 'next/link';

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);

  const categories = [
    'All',
    'Annual Reports',
    'Quarterly Briefs',
    'Industry Analysis',
    'Salary Reports',
    'Technology Trends',
    'Security Analysis'
  ];

  const reports = [
    {
      id: 1,
      title: 'State of Cloud in Africa 2026',
      slug: 'state-of-cloud-africa-2026',
      category: 'Annual Reports',
      description: 'Comprehensive analysis of cloud adoption, trends, and challenges across 12 African countries. Includes infrastructure patterns, service preferences, and investment insights.',
      publishDate: 'Nov 2025',
      downloads: 2456,
      views: 12340,
      featured: true,
      tags: ['Cloud', 'Africa', 'Annual', 'Trends'],
      coverImage: '/reports/cloud-2026.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity Threat Landscape Q4 2025',
      slug: 'cyber-threat-landscape-q4-2025',
      category: 'Quarterly Briefs',
      description: 'Latest threat intelligence, attack vectors, and security incidents affecting African organizations. Real-world case studies and mitigation strategies.',
      publishDate: 'Nov 2025',
      downloads: 1823,
      views: 8567,
      featured: true,
      tags: ['Cybersecurity', 'Threats', 'Quarterly'],
      coverImage: '/reports/cyber-q4.jpg'
    },
    {
      id: 3,
      title: 'DevOps & SRE Salary Report 2025',
      slug: 'devops-sre-salary-2025',
      category: 'Salary Reports',
      description: 'Detailed compensation analysis for DevOps engineers, SREs, and cloud architects across experience levels and regions.',
      publishDate: 'Oct 2025',
      downloads: 3145,
      views: 15678,
      featured: true,
      tags: ['Salary', 'DevOps', 'SRE', 'Careers'],
      coverImage: '/reports/salary-2025.jpg'
    },
    {
      id: 4,
      title: 'Cloud Certification Trends 2025',
      slug: 'cloud-certification-trends-2025',
      category: 'Industry Analysis',
      description: 'Analysis of the most in-demand cloud certifications, pass rates, career impact, and ROI for AWS, Azure, and GCP credentials.',
      publishDate: 'Sep 2025',
      downloads: 1967,
      views: 9234,
      featured: false,
      tags: ['Certifications', 'AWS', 'Azure', 'GCP'],
      coverImage: '/reports/certs-2025.jpg'
    },
    {
      id: 5,
      title: 'AI & Cloud Integration Report',
      slug: 'ai-cloud-integration-2025',
      category: 'Technology Trends',
      description: 'How AI and machine learning are transforming cloud infrastructure, automation, and security practices.',
      publishDate: 'Aug 2025',
      downloads: 2234,
      views: 10567,
      featured: false,
      tags: ['AI', 'Cloud', 'Machine Learning'],
      coverImage: '/reports/ai-cloud.jpg'
    },
    {
      id: 6,
      title: 'Serverless Architecture Adoption',
      slug: 'serverless-adoption-2025',
      category: 'Technology Trends',
      description: 'Growth patterns, use cases, and challenges in serverless computing across African tech companies.',
      publishDate: 'Jul 2025',
      downloads: 1456,
      views: 7890,
      featured: false,
      tags: ['Serverless', 'Architecture', 'Trends'],
      coverImage: '/reports/serverless.jpg'
    },
  ];

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || report.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredReports = reports.filter(r => r.featured);

  const handleDownloadClick = (report: any) => {
    setSelectedReport(report);
    setShowDownloadModal(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-royal-950 to-black border-b border-royal-900">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Research <span className="gradient-text">Reports</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              In-depth analysis, data-driven insights, and authoritative research on cloud computing, 
              cybersecurity, and technology trends across Africa.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search reports by title, topic, or keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-500 text-white"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Reports */}
      {featuredReports.length > 0 && (
        <section className="section-padding bg-gradient-to-b from-black to-gray-900">
          <div className="container-custom">
            <div className="flex items-center gap-2 mb-8">
              <Star className="text-gold-500" size={24} />
              <h2 className="text-3xl font-bold">Featured Reports</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card group hover:border-gold-600 cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-royal-900 to-royal-950 rounded-lg mb-4 flex items-center justify-center">
                    <FileText size={48} className="text-royal-400" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gold-900 text-gold-300 text-xs rounded-full">
                      {report.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>{report.publishDate}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-royal-400 transition-colors">
                    {report.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Download size={14} />
                      <span>{report.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{report.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {report.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleDownloadClick(report)}
                    className="w-full btn-gold text-sm flex items-center justify-center gap-2"
                  >
                    <Lock size={16} />
                    Download Report
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Reports */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">All Reports</h2>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <Filter size={20} className="text-gray-400 flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                      selectedCategory === category
                        ? 'bg-royal-600 text-white'
                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredReports.length === 0 ? (
            <div className="text-center py-16">
              <FileText size={64} className="text-gray-700 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No reports found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="card group hover:border-royal-600"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <FileText size={48} className="text-gray-600" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-royal-900 text-royal-300 text-xs rounded-full">
                      {report.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>{report.publishDate}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 group-hover:text-royal-400 transition-colors">
                    {report.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {report.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Download size={14} />
                      <span>{report.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{report.views.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDownloadClick(report)}
                    className="w-full btn-primary text-sm flex items-center justify-center gap-2"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && selectedReport && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-xl max-w-md w-full p-8 border border-gray-800"
          >
            <h3 className="text-2xl font-bold mb-4">Download Report</h3>
            <p className="text-gray-400 mb-6">
              Enter your email to download <span className="text-white font-semibold">{selectedReport.title}</span>
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-500 text-white"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-royal-500 text-white"
                />
              </div>
              
              <div className="flex items-start gap-2">
                <input type="checkbox" id="subscribe" className="mt-1" />
                <label htmlFor="subscribe" className="text-sm text-gray-400">
                  Subscribe to Upepo Pulse for monthly insights and updates
                </label>
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowDownloadModal(false)}
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 btn-gold"
                >
                  Download
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              We respect your privacy. Your email will only be used for reports and updates.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}
