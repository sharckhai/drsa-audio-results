export interface ConceptDescription {
  number: number;
  title: string;
  description: string;
}

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
  concepts: ConceptDescription[];
  quantitativeEvaluation?: string;
  qualitativeEvaluation?: string;
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
    concepts: [
      { number: 1, title: 'Rhythmic Guitar', description: 'Characteristic offbeat guitar patterns and the distinctive "chop" rhythm that defines reggae music.' },
      { number: 2, title: 'Bass Line', description: 'Deep, prominent bass lines that form the foundation of reggae\'s rhythmic structure.' },
      { number: 3, title: 'Drum Patterns', description: 'Syncopated drum rhythms with emphasis on the backbeat, creating the signature reggae groove.' },
      { number: 4, title: 'Mid-frequency Elements', description: 'Keyboard and organ sounds in the mid-frequency range that complement the rhythmic foundation.' },
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
    concepts: [
      { number: 1, title: 'High-frequency Percussion', description: 'Cymbal sounds and upper harmonics that provide the shimmering texture characteristic of jazz.' },
      { number: 2, title: 'Main Melody', description: 'Primary melodic lines and instrumental solos that define the jazz composition.' },
      { number: 3, title: 'Bass Foundation', description: 'Low-frequency bass line that anchors the rhythm section and harmonic progression.' },
      { number: 4, title: 'Melodic Variations', description: 'Complex patterns, ornamentations, and variations within the melodic structure.' },
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
    concepts: [
      { number: 1, title: 'Core Rhythm / Groove', description: 'Strongly predictive and repetitive rhythmic patterns that define the foundational pulse of classical compositions.' },
      { number: 2, title: 'Percussive Detail', description: 'Encodes articulation and attack characteristics, capturing the precise timing and dynamics of instrumental onsets.' },
      { number: 3, title: 'Melody / Pitch Motion', description: 'Sparse, task-dependent melodic contours and pitch progressions that carry the thematic material.' },
      { number: 4, title: 'Harmony / Timbre', description: 'Encodes spectral structure including harmonic progressions and the characteristic timbral quality of classical instrumentation.' },
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
    concepts: [
      { number: 1, title: 'Electric Guitar Noise', description: 'Distorted electric guitar riffs and high-gain sound that defines the metal aesthetic.' },
      { number: 2, title: 'Fast Snare Drums', description: 'Rapid, aggressive snare patterns and double bass drumming characteristic of metal percussion.' },
      { number: 3, title: 'Power Chords', description: 'Heavy, low-frequency power chord progressions that create the genre\'s signature wall of sound.' },
      { number: 4, title: 'Rhythmic Intensity', description: 'Complex rhythmic patterns and tempo changes that drive the aggressive energy of metal.' },
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
    concepts: [
      { number: 1, title: 'Vocals', description: 'Rap vocals and vocal tracks that deliver the lyrical content and flow characteristic of hip-hop.' },
      { number: 2, title: 'Low-frequency Kick', description: 'Powerful kick drum hits in the low-frequency range, often accompanied by deep bass lines.' },
      { number: 3, title: 'Rhythmic Drums', description: 'Combined kick and snare patterns that create the fundamental rhythmic backbone of the beat.' },
      { number: 4, title: 'Deep Bass', description: 'Sub-bass frequencies including kick drum and bass that provide the heavy low-end foundation.' },
    ],
  },
  'special-cases': {
    name: 'Evaluation of Findings',
    slug: 'special-cases',
    title: 'Evaluation of Findings - DRSA Class Specificity',
    description: 'This page demonstrates both quantitative and qualitative evaluation of DRSA, proving that concepts extracted with DRSA are indeed class specific. The quantitative evaluation shows that subspaces are most effective when applied to their corresponding genre, while the qualitative evaluation reveals that cross-genre application produces inferior explanations.',
    quantitativeEvaluation: 'To assess the class distinctiveness of subspaces and eliminate the possibility of DRSA simply dividing explanations by frequency bands, an exhaustive cross-class evaluation was performed. Explanations of each target class c were decomposed using subspaces U(c) from all 10 genres. The resulting AUPC scores reveal that the highest scores consistently appear on the diagonal, proving that the best disentanglement is obtained when decomposing explanations with their true class subspaces.\n\nKey findings include: Hip-hop and classical achieve the best disentanglement across all classes. Genre similarities align with human intuition—metal responds strongly to blues and rock subspaces, while reggae achieves the worst score with classical subspaces. The rock class shows minimal improvement over standard explanations and similar scores for both rock and blues subspaces, reflecting known mislabeling issues in the GTZAN dataset. These patterns demonstrate that DRSA learns meaningful, class-specific concepts rather than simple frequency-based divisions.',
    qualitativeEvaluation: 'In this qualitative evaluation, explanations for jazz samples were disentangled with the subspaces extracted for hip-hop music. As an example: subspace 2 of hip-hop music represents the kick drum (low frequencies). As shown in the figure below, this subspace fails to accurately extract the low frequencies of jazz music, which indicates that subspaces react not only to frequency bands but to higher-level dynamics and rhythmic structures of sound concepts. When inspecting this special case, it is recommended to also examine the "real" explanations of both genres jazz and hip-hop.\n\nShown are snippets of two different samples of jazz music, whose explanations were propagated through hip-hop subspaces. The standard heatmap specifies the local explanation as obtained with standard LRP. The subspace heatmaps represent the disentangled explanation-components as extracted with DRSA and LRP. Audio players for each explanation are provided in collapsible sections below the figure.',
    imagePath: `${basePath}/images/gtzan/hiphop_jazz_concepts.png`,
    imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as extracted with hip-hop subspaces applied to jazz samples. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
    samples: [
      { index: 1, audioFiles: createSampleAudioFiles('special-cases', 1) },
      { index: 2, audioFiles: createSampleAudioFiles('special-cases', 2) },
    ],
    concepts: [
      { number: 1, title: 'Hip-Hop Concept 1 on Jazz', description: 'Hip-hop vocal subspace applied to jazz - shows misalignment as jazz lacks rap vocals.' },
      { number: 2, title: 'Hip-Hop Concept 2 on Jazz', description: 'Hip-hop kick drum subspace fails to extract jazz low frequencies, revealing class-specific rhythmic structures.' },
      { number: 3, title: 'Hip-Hop Concept 3 on Jazz', description: 'Hip-hop rhythmic drum pattern subspace applied to jazz rhythm section - demonstrates structural mismatch.' },
      { number: 4, title: 'Hip-Hop Concept 4 on Jazz', description: 'Hip-hop bass subspace on jazz bass line - highlights genre-specific low-frequency dynamics.' },
    ],
  },
};

export const getAllGenreSlugs = (): string[] => {
  return Object.keys(genreData);
};

export const getGenreData = (slug: string): GenreData | undefined => {
  return genreData[slug];
};
