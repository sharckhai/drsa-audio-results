import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import VisualizationImage from '@/components/visualization/VisualizationImage';
import SampleAccordion from '@/components/audio/SampleAccordion';
import { getGenreData, getAllGenreSlugs } from '@/data/gtzan-genres';

interface GenrePageProps {
  params: Promise<{
    genre: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllGenreSlugs();
  return slugs.map((slug) => ({
    genre: slug,
  }));
}

export async function generateMetadata({ params }: GenrePageProps): Promise<Metadata> {
  const { genre } = await params;
  const genreData = getGenreData(genre);

  if (!genreData) {
    return {
      title: 'Genre Not Found',
    };
  }

  return {
    title: `${genreData.title} | Samuel Harck`,
    description: genreData.description,
    keywords: ['DRSA', 'audio explanations', 'XAI', 'neural network', genreData.name.toLowerCase(), 'music classification'],
  };
}

export default async function GenrePage({ params }: GenrePageProps) {
  const { genre } = await params;
  const genreData = getGenreData(genre);

  if (!genreData) {
    notFound();
  }

  return (
    <Layout showBackLinks={true} parentLink="/gtzan" parentLinkText="Back to Music Showcase">
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-6">
            {genreData.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed">
            {genreData.description}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <VisualizationImage
          imagePath={genreData.imagePath}
          caption={genreData.imageCaption}
          alt={`${genreData.name} concept explanations visualization`}
        />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Audio Samples & Explanations
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-8 max-w-3xl mx-auto">
          Click on each sample to expand and listen to the original audio, standard LRP explanation,
          and the four disentangled concept explanations.
        </p>
        <div className="space-y-4">
          {genreData.samples.map((sample, index) => (
            <SampleAccordion
              key={sample.index}
              sample={sample}
              displayNumber={index + 1}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
