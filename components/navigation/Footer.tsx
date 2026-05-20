'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-gold/20">
      <Container className="py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gold">B</span>
              <span className="text-white">Birkin Capital</span>
            </h3>
            <p className="text-gray-400 mb-6">Premium business funding solutions for growing companies.</p>
            <div className="flex gap-4">
              <a href="tel:781-591-2345" className="text-gold hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="mailto:info@birkincap.com" className="text-gold hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/funding-programs" className="text-gray-400 hover:text-gold transition-colors">
                  Funding Programs
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-400 hover:text-gold transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-gold transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Birkin Capital. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="tel:781-591-2345" className="hover:text-gold transition-colors flex items-center gap-2">
              <Phone size={16} />
              781-591-2345
            </a>
            <a href="mailto:info@birkincap.com" className="hover:text-gold transition-colors flex items-center gap-2">
              <Mail size={16} />
              info@birkincap.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
