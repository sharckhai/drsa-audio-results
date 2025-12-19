import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disentangled Explanations for Neural Network Predictions on Audio Data - Samuel Harck",
  description: "Master's thesis by Samuel Harck on Disentangled Explanations for Neural Network Predictions on Audio Data. Explore DRSA and LRP applied to music genre recognition using the GTZAN dataset. TU Berlin Machine Learning Group.",
  keywords: [
    "disentangled explanations",
    "neural network interpretability",
    "audio classification",
    "explainable AI",
    "DRSA",
    "LRP",
    "layer-wise relevance propagation",
    "music genre recognition",
    "XAI",
    "audio processing",
    "TU Berlin",
    "machine learning",
    "Samuel Harck"
  ],
  authors: [{ name: "Samuel Harck" }],
  openGraph: {
    type: "website",
    title: "Disentangled Explanations for Neural Network Predictions on Audio Data",
    description: "Master's thesis exploring concept-based explanations for audio classification using DRSA and LRP. By Samuel Harck, TU Berlin Machine Learning Group.",
    url: "https://sharckhai.github.io/drsa-audio-results/",
    siteName: "DRSA Audio Results - Samuel Harck",
    images: [{
      url: "https://sharckhai.github.io/drsa-audio-results/drsa_fig.png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disentangled Explanations for Neural Network Predictions on Audio Data",
    description: "Master's thesis on concept-based XAI for audio classification. DRSA + LRP on music genre recognition.",
    images: ["https://sharckhai.github.io/drsa-audio-results/drsa_fig.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://sharckhai.github.io/drsa-audio-results/" />

        {/* Academic/Scholarly Meta Tags */}
        <meta name="citation_title" content="Disentangled Explanations for Neural Network Predictions on Audio Data" />
        <meta name="citation_author" content="Harck, Samuel" />
        <meta name="citation_publication_date" content="2024" />
        <meta name="citation_dissertation_institution" content="Technische Universität Berlin" />
        <meta name="citation_pdf_url" content="https://sharckhai.github.io/drsa-audio-results/assets/pdfs/masterthesis_SamuelHarck.pdf" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* MathJax */}
        <script src="https://polyfill.io/v3/polyfill.min.js?features=es6" defer></script>
        <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Thesis",
              "name": "Disentangled Explanations for Neural Network Predictions on Audio Data",
              "author": {
                "@type": "Person",
                "name": "Samuel Harck",
                "url": "https://sharckhai.github.io/drsa-audio-results/"
              },
              "contributor": [
                {
                  "@type": "Person",
                  "name": "K. R. Müller"
                },
                {
                  "@type": "Person",
                  "name": "Grégoire Montavon"
                }
              ],
              "inSupportOf": "Master of Science",
              "datePublished": "2024",
              "publisher": {
                "@type": "EducationalOrganization",
                "name": "Technische Universität Berlin",
                "department": {
                  "@type": "Organization",
                  "name": "Machine Learning Group"
                }
              },
              "about": [
                "Explainable Artificial Intelligence",
                "Neural Network Interpretability",
                "Audio Classification",
                "Music Genre Recognition",
                "Deep Learning"
              ],
              "keywords": "disentangled explanations, DRSA, LRP, layer-wise relevance propagation, audio classification, XAI, neural networks, concept-based explanations",
              "url": "https://sharckhai.github.io/drsa-audio-results/",
              "image": "https://sharckhai.github.io/drsa-audio-results/drsa_fig.png",
              "encodingFormat": "text/html"
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
