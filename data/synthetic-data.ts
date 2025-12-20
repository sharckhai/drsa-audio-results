export interface AudioFile {
  label: string;
  path: string;
}

export interface Sample {
  index: number;
  audioFiles: AudioFile[];
}

export interface ClassData {
  name: string;
  slug: string;
  description: string;
  imagePath: string;
  imageCaption: string;
  samples?: Sample[];
  conceptAudios?: AudioFile[];
}

export interface SectionData {
  name: string;
  slug: string;
  title: string;
  description: string;
  classes: ClassData[];
}

const basePath = process.env.NODE_ENV === 'production' ? '/drsa-audio-results' : '';

// Construction page - concept audio files for each class
const constructionClass1Audios: AudioFile[] = [
  { label: 'Concept 1', path: `${basePath}/audio/synthetic/synthetic_data/class1/concept1.mp3` },
  { label: 'Concept 2', path: `${basePath}/audio/synthetic/synthetic_data/class1/concept2.mp3` },
  { label: 'Concept 3', path: `${basePath}/audio/synthetic/synthetic_data/class1/concept3.mp3` },
  { label: 'Concept 4', path: `${basePath}/audio/synthetic/synthetic_data/class1/concept4.mp3` },
  { label: 'Final Sample', path: `${basePath}/audio/synthetic/synthetic_data/class1/final_sample.mp3` },
];

const constructionClass2Audios: AudioFile[] = [
  { label: 'Concept 1', path: `${basePath}/audio/synthetic/synthetic_data/class2/concept1.mp3` },
  { label: 'Concept 2', path: `${basePath}/audio/synthetic/synthetic_data/class2/concept2.mp3` },
  { label: 'Concept 3', path: `${basePath}/audio/synthetic/synthetic_data/class2/concept3.mp3` },
  { label: 'Concept 4', path: `${basePath}/audio/synthetic/synthetic_data/class2/concept4.mp3` },
  { label: 'Final Sample', path: `${basePath}/audio/synthetic/synthetic_data/class2/final_sample.mp3` },
];

// Explanations page - sample audio files for each class
const createExplanationSampleAudioFiles = (classNum: number, sampleIndex: number): AudioFile[] => [
  { label: 'Original Audio', path: `${basePath}/audio/synthetic/explanations/class${classNum}/${sampleIndex}_original_audio.mp3` },
  { label: 'Standard Explanation', path: `${basePath}/audio/synthetic/explanations/class${classNum}/${sampleIndex}_standard_explanation.mp3` },
  { label: 'Concept 1', path: `${basePath}/audio/synthetic/explanations/class${classNum}/${sampleIndex}_concept1.mp3` },
  { label: 'Concept 2', path: `${basePath}/audio/synthetic/explanations/class${classNum}/${sampleIndex}_concept2.mp3` },
  { label: 'Concept 3', path: `${basePath}/audio/synthetic/explanations/class${classNum}/${sampleIndex}_concept3.mp3` },
  { label: 'Concept 4', path: `${basePath}/audio/synthetic/explanations/class${classNum}/${sampleIndex}_concept4.mp3` },
];

export const syntheticData: Record<string, SectionData> = {
  synthetic_data: {
    name: 'Synthetic Data by Construction',
    slug: 'synthetic_data',
    title: 'Synthetic Data by Construction',
    description: 'This section demonstrates the construction of synthetic audio data with controlled properties. Two classes are created by combining four distinct audio concepts in different ways, allowing for ground-truth evaluation of DRSA\'s concept extraction capabilities.',
    classes: [
      {
        name: 'Class 1',
        slug: 'class1',
        description: 'Class 1 is constructed by combining four basic audio concepts. Listen to each individual concept and the final combined sample.',
        imagePath: `${basePath}/images/synthetic/toy_class1.png`,
        imageCaption: 'Visualization of Class 1 construction: Four audio concepts are combined to create the final synthetic sample.',
        conceptAudios: constructionClass1Audios,
      },
      {
        name: 'Class 2',
        slug: 'class2',
        description: 'Class 2 uses the same four concepts but with different combinations and parameters, creating a distinct class for classification.',
        imagePath: `${basePath}/images/synthetic/toy_class2.png`,
        imageCaption: 'Visualization of Class 2 construction: The same concepts combined differently to create a separate class.',
        conceptAudios: constructionClass2Audios,
      },
    ],
  },
  explanations: {
    name: 'Explanations on Synthetic Data',
    slug: 'explanations',
    title: 'Explanations on Synthetic Data',
    description: 'This section shows DRSA-extracted explanations on synthetic audio samples. Since we have ground truth about how these samples were constructed, we can validate whether DRSA correctly identifies and disentangles the underlying audio concepts.',
    classes: [
      {
        name: 'Class 1',
        slug: 'class1',
        description: 'DRSA explanations for Class 1 samples. Compare the extracted concepts with the known construction to validate the method.',
        imagePath: `${basePath}/images/synthetic/drsa_c1_many.png`,
        imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
        samples: [
          { index: 0, audioFiles: createExplanationSampleAudioFiles(1, 0) },
          { index: 1, audioFiles: createExplanationSampleAudioFiles(1, 1) },
          { index: 2, audioFiles: createExplanationSampleAudioFiles(1, 2) },
        ],
      },
      {
        name: 'Class 2',
        slug: 'class2',
        description: 'DRSA explanations for Class 2 samples. Observe how the method handles the different concept combinations used in this class.',
        imagePath: `${basePath}/images/synthetic/drsa_c2_many.png`,
        imageCaption: 'Displayed from left to right: the original sample, the standard explanation (as obtained with standard LRP), and 4 explanation components as disentangled with DRSA. The total relevance ∑R represented by an explanation is stated above each heatmap. Each row of figures represents one specific sample and its associated explanations.',
        samples: [
          { index: 0, audioFiles: createExplanationSampleAudioFiles(2, 0) },
          { index: 1, audioFiles: createExplanationSampleAudioFiles(2, 1) },
          { index: 2, audioFiles: createExplanationSampleAudioFiles(2, 2) },
        ],
      },
    ],
  },
};

export const getAllSectionSlugs = (): string[] => {
  return Object.keys(syntheticData);
};

export const getSectionData = (slug: string): SectionData | undefined => {
  return syntheticData[slug];
};
