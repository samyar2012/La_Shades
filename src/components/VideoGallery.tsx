import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoItem {
  id: number;
  video: string;
  title: string;
  description: string;
  thumbnail?: string;
}

const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const videoItems: VideoItem[] = [
    {
      id: 1,
      video: '/src/assets/video_2025-06-01_20-53-37.mp4',
      title: 'Roller Shades Installation',
      description: 'Watch our professional installation process for roller shades'
    },
    {
      id: 2,
      video: '/src/assets/video_2025-06-01_20-53-32.mp4',
      title: 'Roman Shades Showcase',
      description: 'Experience the elegance of our Roman shades in action'
    },
    {
      id: 3,
      video: '/src/assets/video_2025-06-01_20-53-23.mp4',
      title: 'Cellular Shades Features',
      description: 'Discover the energy-efficient features of our cellular shades'
    }
  ];

  const handleVideoLoad = (id: number) => {
    const video = videoRefs.current[id];
    if (video) {
      // Set video to first frame
      video.currentTime = 0;
      // Pause the video
      video.pause();
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Video Gallery</h2>
          <div className="w-16 h-1 bg-amber-700 mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Watch our window treatments in action and see how they can transform your space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
              onClick={() => setActiveVideo(item.video)}
            >
              <div className="relative pb-[56.25%]">
                <video
                  ref={el => videoRefs.current[item.id] = el}
                  src={item.video}
                  className="absolute inset-0 w-full h-full object-cover"
                  onLoadedData={() => handleVideoLoad(item.id)}
                  muted
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-amber-300 transition-colors duration-300"
            onClick={() => setActiveVideo(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <video
            src={activeVideo}
            className="max-w-full max-h-[90vh]"
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default VideoGallery; 