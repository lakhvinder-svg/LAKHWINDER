'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { CheckCircle2 } from 'lucide-react';

const trustItems = [
  'Only 3 Recent Bank Statements Required',
  'Fast Approval Process',
  'No Collateral Required',
  'Funding In 24-48 Hours',
  'Soft Credit Pull',
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-32 bg-dark-card">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-gold-text">Why Choose Birkin Capital?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We believe in transparency, speed, and simplicity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 p-4 rounded-lg bg-dark-bg/50 hover:bg-dark-bg transition-colors"
            >
              <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <p className="text-gray-300 text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
