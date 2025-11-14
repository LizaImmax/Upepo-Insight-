'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { TrendingUp, TrendingDown, DollarSign, Users, Award, Code } from 'lucide-react';

export default function MetricsPage() {
  // Sample data - In production, this would come from your API
  const salaryData = [
    { role: 'Junior DevOps', salary: 35000 },
    { role: 'Mid DevOps', salary: 65000 },
    { role: 'Senior DevOps', salary: 95000 },
    { role: 'Junior Cloud', salary: 40000 },
    { role: 'Mid Cloud', salary: 70000 },
    { role: 'Senior Cloud', salary: 105000 },
    { role: 'Junior Security', salary: 38000 },
    { role: 'Mid Security', salary: 68000 },
    { role: 'Senior Security', salary: 100000 },
  ];

  const cloudAdoption = [
    { country: 'Nigeria', adoption: 72 },
    { country: 'Kenya', adoption: 68 },
    { country: 'South Africa', adoption: 85 },
    { country: 'Ghana', adoption: 54 },
    { country: 'Egypt', adoption: 61 },
    { country: 'Morocco', adoption: 58 },
  ];

  const certificationTrends = [
    { name: 'AWS Solutions Architect', value: 3400 },
    { name: 'Azure Administrator', value: 2100 },
    { name: 'GCP Associate', value: 1200 },
    { name: 'Kubernetes CKA', value: 1800 },
    { name: 'Security+', value: 2500 },
  ];

  const skillDemand = [
    { skill: 'Docker/K8s', demand: 95 },
    { skill: 'Terraform', demand: 88 },
    { skill: 'AWS', demand: 92 },
    { skill: 'CI/CD', demand: 85 },
    { skill: 'Python', demand: 82 },
    { skill: 'Security', demand: 90 },
  ];

  const monthlyGrowth = [
    { month: 'Jun', learners: 450, projects: 120 },
    { month: 'Jul', learners: 580, projects: 165 },
    { month: 'Aug', learners: 720, projects: 210 },
    { month: 'Sep', learners: 890, projects: 275 },
    { month: 'Oct', learners: 1050, projects: 340 },
    { month: 'Nov', learners: 1280, projects: 420 },
  ];

  const COLORS = ['#8b5cf6', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'];

  const stats = [
    {
      icon: <Users />,
      label: 'Active Learners',
      value: '12,400',
      change: '+18%',
      trending: 'up',
      color: 'from-royal-600 to-royal-800'
    },
    {
      icon: <Award />,
      label: 'Certifications Earned',
      value: '8,350',
      change: '+24%',
      trending: 'up',
      color: 'from-gold-500 to-gold-700'
    },
    {
      icon: <Code />,
      label: 'Projects Built',
      value: '4,200',
      change: '+31%',
      trending: 'up',
      color: 'from-cyber-500 to-cyber-700'
    },
    {
      icon: <DollarSign />,
      label: 'Avg. Salary Increase',
      value: '47%',
      change: '+5%',
      trending: 'up',
      color: 'from-green-500 to-green-700'
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="bg-gradient-to-b from-royal-950 to-black border-b border-royal-900">
        <div className="container-custom section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Live <span className="gradient-text">Metrics Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300">
              Real-time data on cloud adoption, skills demand, salary trends, and community growth across Africa
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {stat.icon}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stat.trending === 'up' ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {stat.trending === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Salary Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6">Average Salaries by Role (USD)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="role" stroke="#999" angle={-45} textAnchor="end" height={100} />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="salary" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Cloud Adoption by Country */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6">Cloud Adoption by Country (%)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={cloudAdoption} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis type="number" stroke="#999" />
                  <YAxis dataKey="country" type="category" stroke="#999" width={100} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="adoption" fill="#06b6d4" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Monthly Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6">Community Growth Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    labelStyle={{ color: '#fff' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="learners" stroke="#8b5cf6" strokeWidth={3} />
                  <Line type="monotone" dataKey="projects" stroke="#f59e0b" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Certification Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6">Top Certifications Earned</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={certificationTrends}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {certificationTrends.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Skill Demand Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-6">In-Demand Skills Analysis</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillDemand}>
                  <PolarGrid stroke="#333" />
                  <PolarAngleAxis dataKey="skill" stroke="#999" />
                  <PolarRadiusAxis stroke="#999" />
                  <Radar name="Demand" dataKey="demand" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                    labelStyle={{ color: '#fff' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Insights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 card-royal"
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text-gold">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-royal-300">📈 Fastest Growing Skill</h4>
                <p className="text-gray-300">Container orchestration (Docker/Kubernetes) shows 95% demand, up 31% from last quarter.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-royal-300">💰 Highest ROI Certification</h4>
                <p className="text-gray-300">AWS Solutions Architect leads with average 47% salary increase post-certification.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-royal-300">🌍 Regional Leader</h4>
                <p className="text-gray-300">South Africa maintains 85% cloud adoption rate, followed by Nigeria at 72%.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-royal-300">🎯 Emerging Trend</h4>
                <p className="text-gray-300">Security skills demand up 42%, reflecting increased focus on cybersecurity across the continent.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
