export interface AudioFile {
  label: string;
  path: string;
}

export interface Sample {
  index: number;
  audioFiles: AudioFile[];
}

export interface GenreData {
  name: string;
  slug: string;
  title: string;
  description: string;
  imagePath: string;
  imageCaption: string;
  samples: Sample[];
}

const basePath = process.env.NODE_ENV === 'production' ? '/drsa-audio-results' : '';

const createSampleAudioFiles = (genre: string, sampleIndex: number): AudioFile[] => [
  { label: 'Original Audio', path: `${basePath}/audio/gtzan/${genre}/${sampleIndex}_original_audio.mp3` },
  { label: 'Standard Explanation', path: `${basePath}/audio/gtzan/${genre}/${sampleIndex}_standard_explanation.mp3` },
  { label: 'Concept 1', path: `${basePath}/audio/gtzan/${genre}/${sampleIndex}_concept1.mp3` },
  { label: 'Concept 2', path: `${basePath}/audio/gtzan/${genre}/${sampleIndex}_concept2.mp3` },
  { label: 'Concept 3', path: `${basePath}/audio/gtzan/${genre}/${sampleIndex}_concept3.mp3` },
  { label: 'Concept 4', path: `${basePath}/audio/gtzan/${genre}/${sampleIndex}_concept4.mp3` },
];

export const genreData: Record<string, GenreData> = {
  reggae: {
    name: 'Reggae',
    slug: 'reggae',
    title: 'Reggae Music Explanations - DRSA Concept Analysis',
    description: 'Provided are two exemplary samples of reggae music along with the extracted explanations. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. In order to enable good visual inspection, the audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/reggae_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 0, audioFiles: createSampleAudioFiles('reggae', 0) },
      { index: 1, audioFiles: createSampleAudioFiles('reggae', 1) },
    ],
  },
  jazz: {
    name: 'Jazz',
    slug: 'jazz',
    title: 'Jazz Music Explanations - DRSA Concept Analysis',
    description: 'Provided are two exemplary samples of jazz music along with the extracted explanations. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. In order to enable good visual inspection, the audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/jazz_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 1, audioFiles: createSampleAudioFiles('jazz', 1) },
      { index: 2, audioFiles: createSampleAudioFiles('jazz', 2) },
    ],
  },
  classical: {
    name: 'Classical',
    slug: 'classical',
    title: 'Classical Music Explanations - DRSA Concept Analysis',
    description: 'Provided are two exemplary samples of classical music along with the extracted explanations. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. In order to enable good visual inspection, the audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/classical_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 0, audioFiles: createSampleAudioFiles('classical', 0) },
      { index: 1, audioFiles: createSampleAudioFiles('classical', 1) },
    ],
  },
  metal: {
    name: 'Metal',
    slug: 'metal',
    title: 'Metal Music Explanations - DRSA Concept Analysis',
    description: 'Provided are two exemplary samples of metal music along with the extracted explanations. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. In order to enable good visual inspection, the audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/metal_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 0, audioFiles: createSampleAudioFiles('metal', 0) },
      { index: 1, audioFiles: createSampleAudioFiles('metal', 1) },
    ],
  },
  hiphop: {
    name: 'Hip-Hop',
    slug: 'hiphop',
    title: 'Hip-Hop Music Explanations - DRSA Concept Analysis',
    description: 'Provided are two exemplary samples of hip-hop music along with the extracted explanations. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. In order to enable good visual inspection, the audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/hiphop_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 1, audioFiles: createSampleAudioFiles('hiphop', 1) },
      { index: 2, audioFiles: createSampleAudioFiles('hiphop', 2) },
    ],
  },
  'special-cases': {
    name: 'Special Cases',
    slug: 'special-cases',
    title: 'Special Cases - DRSA Concept Analysis',
    description: 'Provided are two exemplary special case samples along with the extracted explanations. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. In order to enable good visual inspection, the audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/special-cases_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 1, audioFiles: createSampleAudioFiles('special-cases', 1) },
      { index: 2, audioFiles: createSampleAudioFiles('special-cases', 2) },
    ],
  },
};

export const getAllGenreSlugs = (): string[] => {
  return Object.keys(genreData);
};

export const getGenreData = (slug: string): GenreData | undefined => {
  return genreData[slug];
};
