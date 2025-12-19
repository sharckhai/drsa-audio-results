import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 text-center leading-tight mb-8">
            Disentangled Explanations for Neural Network Predictions on Audio Data
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-base sm:text-lg leading-relaxed text-center mb-6">
              How do neural networks make decisions about music? This work unveils the <strong>hidden reasoning</strong> behind audio classification models
              by decomposing their predictions into <strong>interpretable, disentangled concepts</strong>—making the black box transparent.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-justify">
              By combining <strong>Disentangled Relevant Subspace Analysis (DRSA)</strong> <a href="#ref1" className="text-blue-600 hover:underline">[1]</a> with <strong>Layer-wise Relevance Propagation (LRP)</strong> <a href="#ref2" className="text-blue-600 hover:underline">[2]</a>,
              we extract concept-based explanations that reveal <em>what</em> a neural network listens to when classifying music genres.
              Unlike traditional pixel-level explanations, our approach transforms complex time-frequency representations into
              <strong> listenable audio segments</strong>, allowing humans to literally <em>hear</em> what the model hears.
            </p>
            <p className="text-sm sm:text-base text-gray-600 text-center mt-6">
              Master's Thesis | Machine Learning Group, TU Berlin<br/>
              Supervised by Prof. K. R. Müller and Dr. Grégoire Montavon
            </p>
          </div>
        </div>
      </section>

      {/* Report & Code Buttons */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="/assets/pdfs/masterthesis_SamuelHarck.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-blue-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Read Full Thesis
          </a>
          <a
            href="https://github.com/sharckhai/drsa-audio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 text-white font-semibold rounded-lg shadow-md hover:from-gray-700 hover:to-gray-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 text-center"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View Code on GitHub
          </a>
        </div>
      </section>

      {/* Explore Results Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 text-center mb-4">Explore Results</h2>
          <p className="text-center text-gray-600 text-lg mb-10">Dive into interactive examples and listen to what the model hears.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Link
              href="/gtzan"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-200 transform hover:-translate-y-2 border-2 border-transparent hover:border-blue-500"
            >
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-3">
                Music Showcase
              </h3>
              <p className="text-gray-600 mb-4">
                Explore DRSA results on the GTZAN dataset.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <span>Listen to examples</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>

            <Link
              href="/synthetic"
              className="group bg-white rounded-xl shadow-md hover:shadow-xl p-8 transition-all duration-200 transform hover:-translate-y-2 border-2 border-transparent hover:border-purple-500"
            >
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 mb-3">
                Synthetic Toy Case
              </h3>
              <p className="text-gray-600 mb-4">
                View controlled experiments on synthetic audio data with ground truth.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <span>View experiments</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg border-l-4 border-blue-600 p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 text-center mb-6">Abstract</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-base sm:text-lg leading-relaxed text-justify italic text-gray-700">
              As nonlinear Machine Learning (ML) models are increasingly used in various real world applications, their black-box nature hinders in-depth model
              evaluation, apart from performance measures. In response, the field of Explainable Artificial Intelligence (XAI) has made much progress. It aims
              to reveal the rationale behind complex ML models, often by assigning relevance scores to model parts and input features, e.g., pixels. However, in
              some domains such as audio processing, where data—like time or time-frequency representations of amplitudes—is of rather unintuitive nature, the
              extracted explanations can be hard to grasp for humans. Suitably, a novel sub-field in the realm of XAI has emerged in very recent time that aims to
              decompose explanations into multiple sub-explanations, representing distinct decision concepts. These approaches offer a promising foundation to gain
              more valuable insights into models and the data domain, especially when dealing with complex data scenarios. This study targets the extraction of
              concept-based explanations for a neural network applied to audio classification tasks, by utilizing the newly proposed method, Disentangled Relevant
              Subspace Analysis (DRSA), in combination with Layerwise Relevance Propagation (LRP).
            </p>
          </div>
        </div>
      </section>

      {/* Research Methodology & Figure Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-8 text-center">Research Methodology</h2>

          {/* Methodology Steps */}
          <div className="mb-10">
            <ol className="space-y-4 text-base sm:text-lg leading-relaxed text-gray-700 list-decimal list-inside">
              <li className="text-justify pl-2">
                Conceptualization and training of a Deep Learning (DL) approach to solve audio classification tasks on inputs in time-frequency domain.
                The tasks are solved with a Convolutional Neural Network. The main showcase is conducted on a Music Genre Recognition (MGR) task
                on the GTZAN dataset <a href="#ref3" className="text-blue-600 hover:underline">[3]</a>.
              </li>
              <li className="text-justify pl-2">
                Explanation of model decisions on a local basis by utilizing the backpropagation-based XAI method
                LRP <a href="#ref2" className="text-blue-600 hover:underline">[2]</a>.
              </li>
              <li className="text-justify pl-2">
                Subsequently, relevant subspaces are optimized in latent space of the network with the newly proposed concept-based XAI method
                DRSA <a href="#ref1" className="text-blue-600 hover:underline">[1]</a>.
                By implementing a two-step attribution that allows to condition relevances on single subspaces while propagating those from
                the outputs to the inputs, concept-based explanations can be visualized in the input domain. This process is schematically
                depicted in the figure below.
              </li>
              <li className="text-justify pl-2">
                Design of a methodology to transform explanations in time-frequency space into listenable audios to maximize human interpretability of those.
              </li>
              <li className="text-justify pl-2">
                Qualitative and quantitative evaluation of the extracted disentangled explanations to demonstrate the advantage of concept-based explanations
                and the enhanced explanatory value obtained through the application of DRSA. To provide a solid basis for evaluation, a synthetic dataset is
                created that fits the purpose of this study.
              </li>
            </ol>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-200"></div>

          {/* Figure */}
          <figure className="text-center max-w-5xl mx-auto">
            <div className="relative w-full h-auto bg-white rounded-lg p-4 border border-gray-200">
              <Image
                src="/images/drsa_fig.png"
                alt="Relevance Decomposition with DRSA"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            <figcaption className="mt-6 text-sm sm:text-base italic text-gray-600 text-justify px-2 sm:px-4">
              <strong>Fig. 1:</strong> This figure shows the virtual layers (U<sub>k</sub>)<sub>k</sub> trained with DRSA, that map activations a<sub>j</sub> onto relevant subspaces <strong>h</strong><sub>k</sub>.
              The black arrows depict the forward pass of some input sample through the neural network, resulting in evidence for some class (here y<sub>4</sub> for
              demonstration purposes). Red arrows show the relevance flow of the class evidence of y<sub>4</sub> to the inputs as implemented with LRP. By keeping
              the relevance flow disentangled after filtering it through the subspaces, distinct explanation components can be visualized at the inputs.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* References Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-6">References</h3>
          <ol className="space-y-3 text-sm sm:text-base text-gray-700 list-decimal list-inside">
            <li id="ref1" className="pl-2">
              Pattarawat Chormai et al. "Disentangled Explanations of Neural Network Predictions by Finding Relevant Subspaces". In: IEEE Transactions on Pattern Analysis and Machine Intelligence (2024)
            </li>
            <li id="ref2" className="pl-2">
              Sebastian Bach et al. "On Pixel-Wise Explanations for Non-Linear Classifier Decisions by Layer-Wise Relevance Propagation". In: PLOS ONE 10.7 (July 2015)
            </li>
            <li id="ref3" className="pl-2">
              G. Tzanetakis and P. Cook, "Musical genre classification of audio signals," in IEEE Transactions on Speech and Audio Processing, (July 2002)
            </li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}
