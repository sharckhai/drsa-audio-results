'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayerGrid from './AudioPlayerGrid';
import { Sample } from '@/data/gtzan-genres';

interface SampleAccordionProps {
  sample: Sample;
  displayNumber: number;
  defaultOpen?: boolean;
}

export default function SampleAccordion({ sample, displayNumber, defaultOpen = false }: SampleAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-200"
      >
        <h3 className="text-lg font-heading font-semibold text-gray-900">
          Sample {displayNumber}
        </h3>
        <motion.svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 py-6 bg-white border-t border-gray-100">
              <AudioPlayerGrid audioFiles={sample.audioFiles} sampleNumber={displayNumber} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
