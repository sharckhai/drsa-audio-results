import React from 'react';
import WaveformPlayer from './WaveformPlayer';
import { AudioFile } from '@/data/gtzan-genres';

interface AudioPlayerGridProps {
  audioFiles: AudioFile[];
  sampleNumber: number;
}

export default function AudioPlayerGrid({ audioFiles, sampleNumber }: AudioPlayerGridProps) {
  return (
    <div className="space-y-6">

      {/* First row: Original Audio and Standard Explanation */}
      <div>
        <p className="text-xs text-gray-500 mb-3 font-medium">Original & Standard Explanation</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {audioFiles.slice(0, 2).map((audio, index) => (
            <WaveformPlayer key={index} audioPath={audio.path} label={audio.label} />
          ))}
        </div>
      </div>

      {/* Second row: 4 Explanation Components */}
      <div>
        <p className="text-xs text-gray-500 mb-3 font-medium">Disentangled Explanation Components</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audioFiles.slice(2, 6).map((audio, index) => (
            <WaveformPlayer key={index + 2} audioPath={audio.path} label={audio.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
