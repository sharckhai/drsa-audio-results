import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import VisualizationImage from '@/components/visualization/VisualizationImage';
import SampleAccordion from '@/components/audio/SampleAccordion';
import { getSectionData } from '@/data/synthetic-data';

export const metadata: Metadata = {
  title: 'Explanations on Synthetic Data | Samuel Harck',
  description: 'View DRSA-extracted explanations on synthetic audio samples with known ground truth for validation.',
  keywords: ['DRSA', 'synthetic data', 'explanations', 'XAI', 'validation', 'ground truth'],
};

export default function ExplanationsPage() {
  const sectionData = getSectionData('explanations');

  if (!sectionData) {
    return <div>Section not found</div>;
  }

  return (
    <Layout showBackLinks={true} parentLink="/synthetic" parentLinkText="Back to Synthetic Toy Case">
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 text-center mb-6">
            {sectionData.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed">
            {sectionData.description}
          </p>
        </div>
      </section>

      {sectionData.classes.map((classData, classIndex) => (
        <section key={classData.slug} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
              {classData.name}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              {classData.description}
            </p>
          </div>

          <div className="mb-8">
            <VisualizationImage
              imagePath={classData.imagePath}
              caption={classData.imageCaption}
              alt={`${classData.name} DRSA explanations visualization`}
            />
          </div>

          {classData.samples && (
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                Audio Samples & Explanations
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                Click on each sample to expand and listen to the original audio, standard LRP explanation,
                and the four disentangled concept explanations.
              </p>
              <div className="space-y-4">
                {classData.samples.map((sample, index) => (
                  <SampleAccordion
                    key={sample.index}
                    sample={sample}
                    displayNumber={index + 1}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
            </div>
          )}

          {classIndex < sectionData.classes.length - 1 && (
            <div className="mt-12 mb-8 border-t border-gray-200"></div>
          )}
        </section>
      ))}
    </Layout>
  );
}
