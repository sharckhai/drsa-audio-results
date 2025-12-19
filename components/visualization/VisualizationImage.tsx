import React from 'react';
import Image from 'next/image';
import MathNotation from './MathNotation';

interface VisualizationImageProps {
  imagePath: string;
  caption: string;
  alt: string;
}

export default function VisualizationImage({ imagePath, caption, alt }: VisualizationImageProps) {
  return (
    <figure className="my-8">
      <div className="relative w-full bg-gray-50 rounded-lg p-4 shadow-md">
        <Image
          src={imagePath}
          alt={alt}
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg"
          priority
          unoptimized
        />
      </div>
      <figcaption className="mt-4 text-sm sm:text-base text-gray-700 text-justify px-2">
        <strong>Fig. 1:</strong> {caption.split('∑R').map((part, index, array) => (
          <React.Fragment key={index}>
            {part}
            {index < array.length - 1 && <MathNotation math="\sum R" inline={true} />}
          </React.Fragment>
        ))}
      </figcaption>
    </figure>
  );
}
