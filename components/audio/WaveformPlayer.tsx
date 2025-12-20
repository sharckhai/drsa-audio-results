'use client';

import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

interface WaveformPlayerProps {
  audioPath: string;
  label: string;
}

export default function WaveformPlayer({ audioPath, label }: WaveformPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    let isMounted = true;

    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#93c5fd',
      progressColor: '#2563eb',
      cursorColor: '#1e40af',
      barWidth: 2,
      barRadius: 3,
      barGap: 2,
      height: 60,
      normalize: true,
      backend: 'WebAudio',
    });

    wavesurferRef.current = wavesurfer;

    wavesurfer.load(audioPath);

    wavesurfer.on('ready', () => {
      if (isMounted) {
        setIsLoading(false);
        setDuration(formatTime(wavesurfer.getDuration()));
      }
    });

    wavesurfer.on('audioprocess', () => {
      if (isMounted) {
        setCurrentTime(formatTime(wavesurfer.getCurrentTime()));
      }
    });

    wavesurfer.on('finish', () => {
      if (isMounted) {
        setIsPlaying(false);
        setCurrentTime(formatTime(0));
      }
    });

    wavesurfer.on('error', (error) => {
      console.warn('WaveSurfer error:', error);
      if (isMounted) {
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      if (wavesurfer) {
        try {
          wavesurfer.pause();
          wavesurfer.unAll();
          wavesurfer.destroy();
        } catch (error) {
          // Silently catch destroy errors during cleanup
          console.warn('WaveSurfer cleanup error:', error);
        }
      }
    };
  }, [audioPath]);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-700 truncate">{label}</span>
        <span className="text-xs text-gray-500 ml-2">
          {currentTime} / {duration}
        </span>
      </div>

      <div ref={containerRef} className="mb-2 rounded overflow-hidden bg-gray-50" />

      <button
        onClick={handlePlayPause}
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded-md font-medium transition-all duration-200 ${
          isLoading
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-sm hover:shadow-md'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-4 w-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            {isPlaying ? (
              <>
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </span>
        )}
      </button>
    </div>
  );
}
