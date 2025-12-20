import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Layout from '@/components/Layout';
import VisualizationImage from '@/components/visualization/VisualizationImage';
import SampleAccordion from '@/components/audio/SampleAccordion';
import ConceptDescriptions from '@/components/visualization/ConceptDescriptions';
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

  const basePath = process.env.NODE_ENV === 'production' ? '/drsa-audio-results' : '';
  const isValidationPage = genre === 'special-cases';

  return (
    <Layout showBackLinks={true} parentLink="/gtzan" parentLinkText="Back to Music Showcase">
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 text-center mb-6">
            {genreData.name}
          </h1>
          <div className="text-base sm:text-lg text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed space-y-4">
            {genreData.description.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {isValidationPage && genreData.quantitativeEvaluation && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
            Quantitative Evaluation
          </h2>
          <div className="text-base sm:text-lg text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed space-y-4 mb-8">
            {genreData.quantitativeEvaluation.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="max-w-2xl mx-auto">
            <VisualizationImage
              imagePath={`${basePath}/images/gtzan/interclass_validation.png`}
              caption="Depicted are 10 different AUPC scores for each attributed genre class. Specifically, explanations according to one target class c are decomposed C times with the subspaces pertaining to each class c ∈ C. The rows state which class was attributed, while the columns show which subspaces U(c) were used for explanation decomposition."
              alt="Interclass validation visualization showing AUPC scores"
            />
          </div>
        </section>
      )}

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isValidationPage && (
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
            Qualitative Evaluation
          </h2>
        )}
        {isValidationPage && genreData.qualitativeEvaluation && (
          <div className="text-base sm:text-lg text-gray-700 text-justify max-w-4xl mx-auto leading-relaxed space-y-4 mb-8">
            {genreData.qualitativeEvaluation.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
        <VisualizationImage
          imagePath={genreData.imagePath}
          caption={genreData.imageCaption}
          alt={`${genreData.name} concept explanations visualization`}
        />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ConceptDescriptions concepts={genreData.concepts} />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
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
