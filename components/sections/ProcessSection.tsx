'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FileCheck, Send, DollarSign, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileCheck,
    title: 'Submit Application',
    description: 'Complete our simple form and upload your 3 recent bank statements',
  },
  {
    icon: Send,
    title: 'Quick Review',
    description: 'Our team reviews your application and qualifies your funding eligibility',
  },
  {
    icon: DollarSign,
    title: 'Receive Funding',
    description: 'Get funded directly to your business account in 24-48 hours',
  },
  {
    icon: CheckCircle,
    title: 'Start Growing',
    description: 'Use your capital to expand and scale your business',
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-dark-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold-text">Simple Process</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From application to funding in just 4 easy steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-12 right-12 h-1 bg-gradient-to-r from-gold/30 via-gold/50 to-gold/30"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center z-10 shadow-lg">
                  <span className="text-dark-bg font-bold text-xl">{idx + 1}</span>
                </div>

                {/* Card */}
                <div className="card-premium p-8 text-center pt-12 group hover:shadow-glow transition-all">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 w-fit mx-auto mb-4 group-hover:from-gold/30 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
