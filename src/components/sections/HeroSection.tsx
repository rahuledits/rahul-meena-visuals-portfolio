import React from 'react';
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

interface HeroSectionProps {
  isDarkMode: boolean;
}

const HeroSection = ({
  isDarkMode
}: HeroSectionProps) => {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* 3D Robot Background */}
      <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="absolute inset-0 z-0" />
      
      {/* Dark overlay for better text readability */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/30' : 'bg-orange-100/20'} z-5`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Main Content */}
          <div className="animate-fade-in text-left">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg mx-px px-[4px] md:text-7xl">
              Video Editor & Cinematographer
            </h1>
            
            <p style={{
              animationDelay: '0.3s'
            }} className="px-[11px] font-light text-zinc-400 text-left text-base mt-6">
              I'm Rahul, a video editor and cinematographer from Mumbai,
              currently studying at NIT Nagpur. With 2 years of experience,
              I specialize in Adobe After Effects and Premiere Pro, creating engaging visual narratives.
            </p>
          </div>

          {/* Empty space for balance */}
          <div></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 ${isDarkMode ? 'text-white/60' : 'text-orange-600'} animate-bounce-gentle z-10`}>
        <div className="text-sm">Scroll to explore</div>
      </div>
    </section>
  );
};

export default HeroSection;
