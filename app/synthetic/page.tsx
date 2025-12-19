import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Synthetic Audio Dataset - Controlled XAI Evaluation | Samuel Harck',
  description: 'Synthetic audio dataset designed for quantitative evaluation of disentangled explanations. Explore concept-based analysis with ground truth using DRSA and LRP.',
  keywords: ['synthetic audio', 'DRSA', 'XAI evaluation', 'controlled dataset', 'concept-based XAI', 'neural network explanations'],
};

const sections = [
  {
    name: 'Synthetic Data by Construction',
    slug: 'synthetic_data',
    description: 'Explore the synthetic audio dataset created with controlled properties for evaluation',
    icon: '🔬',
  },
  {
    name: 'Explanations on Synthetic Data',
    slug: 'explanations',
    description: 'View disentangled explanations extracted using DRSA on synthetic audio samples',
    icon: '📊',
  },
];

export default function SyntheticPage() {
  return (
    <Layout showBackLinks={true}>
      <section className="bg-gradient-to-b from-purple-50 to-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            Synthetic Toy Case
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Below you will find a link to exemplary samples of each synthetic data class with additional information about the generation process,
                and a link to the disentangled explanations extracted with DRSA for each class that reveal the decision behaviour of the network.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {sections.map((section) => (
              <Link
                key={section.slug}
                href={`/synthetic/${section.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 sm:p-10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <div className="text-5xl mb-4">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 mb-3">
                    {section.name}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base flex-grow mb-4">
                    {section.description}
                  </p>
                  <div className="mt-auto flex items-center text-purple-600 group-hover:text-purple-800 font-medium">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Synthetic Dataset</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The synthetic dataset was specifically designed for quantitative evaluation of disentangled explanations. By creating
              audio samples with controlled properties, we can establish ground truth for concept-based explanations and rigorously
              evaluate the performance of DRSA.
            </p>
            <p className="text-gray-700 leading-relaxed">
              This controlled environment allows for systematic analysis of how well the neural network identifies and separates
              distinct audio concepts, providing insights into the model's decision-making process that complement the real-world
              music genre recognition results.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
