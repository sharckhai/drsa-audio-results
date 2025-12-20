import React from 'react';

export interface ConceptDescription {
  number: number;
  title: string;
  description: string;
}

interface ConceptDescriptionsProps {
  concepts: ConceptDescription[];
}

export default function ConceptDescriptions({ concepts }: ConceptDescriptionsProps) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 sm:p-8 border border-blue-100">
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6 text-center">
        Extracted Concepts
      </h3>
      <p className="text-sm text-gray-600 text-center mb-6">
        The model learned these distinct concepts when classifying this genre:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {concepts.map((concept) => (
          <div
            key={concept.number}
            className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-heading font-bold text-lg shadow-sm">
                  {concept.number}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-base font-heading font-semibold text-gray-900 mb-1">
                  {concept.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {concept.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
