import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music Genre Recognition with DRSA - Disentangled Audio Explanations | Samuel Harck',
  description: 'Explore disentangled explanations for music genre classification on the GTZAN dataset. View concept-based XAI results for Classical, Jazz, Hip-Hop, Metal, and Reggae genres using DRSA and LRP.',
  keywords: ['music genre recognition', 'GTZAN dataset', 'DRSA', 'audio explanations', 'XAI', 'neural network', 'classical music', 'jazz', 'hip-hop', 'metal', 'reggae'],
};

const genres = [
  { name: 'HipHop', slug: 'hiphop', description: 'Explore disentangled explanations for hip-hop genre classification' },
  { name: 'Jazz', slug: 'jazz', description: 'View concept-based explanations for jazz music analysis' },
  { name: 'Reggae', slug: 'reggae', description: 'Discover how the model identifies reggae characteristics' },
  { name: 'Metal', slug: 'metal', description: 'Analyze disentangled explanations for metal music' },
  { name: 'Classical', slug: 'classical', description: 'Examine classical music genre recognition results' },
  { name: 'Special Cases', slug: 'special-cases', description: 'Explore interesting edge cases and special scenarios' },
];

export default function GTZANPage() {
  return (
    <Layout showBackLinks={true}>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-6">
            Music Showcase
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Explore disentangled explanations for various music genres from the GTZAN dataset
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre) => (
              <Link
                key={genre.slug}
                href={`/gtzan/${genre.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl p-6 sm:p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex flex-col h-full">
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3">
                    {genre.name}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base flex-grow">
                    {genre.description}
                  </p>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800 font-medium">
                    <span>View Results</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About the GTZAN Dataset</h2>
            <p className="text-gray-700 leading-relaxed">
              The GTZAN dataset is a widely-used benchmark for music genre recognition tasks. Each genre category contains
              recorded audio samples of a specific genre.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
