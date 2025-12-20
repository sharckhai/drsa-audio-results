import React from 'react';
import { Metadata } from 'next';
import Layout from '@/components/Layout';
import VisualizationImage from '@/components/visualization/VisualizationImage';
import WaveformPlayer from '@/components/audio/WaveformPlayer';
import { getSectionData } from '@/data/synthetic-data';

export const metadata: Metadata = {
  title: 'Synthetic Data by Construction | Samuel Harck',
  description: 'Explore the construction of synthetic audio data with controlled properties for evaluating DRSA concept extraction.',
  keywords: ['synthetic data', 'audio synthesis', 'DRSA', 'ground truth', 'concept extraction', 'XAI'],
};

export default function SyntheticDataPage() {
  const sectionData = getSectionData('synthetic_data');

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
              alt={`${classData.name} construction visualization`}
            />
          </div>

          {classData.conceptAudios && (
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 sm:p-8 border border-purple-100">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
                Audio Components
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6">
                Listen to each individual concept and the final combined sample:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {classData.conceptAudios.map((audio, index) => (
                  <WaveformPlayer
                    key={index}
                    audioPath={audio.path}
                    label={audio.label}
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
