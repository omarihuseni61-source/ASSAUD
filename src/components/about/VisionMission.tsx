import { Eye, Target, Quote, Megaphone } from 'lucide-react';
import type { AboutASAUD } from '@/types/about';

interface VisionMissionProps {
  data: AboutASAUD;
}

export function VisionMission({ data }: VisionMissionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-red-100 leading-relaxed">{data.vision}</p>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-green-100 leading-relaxed">{data.mission}</p>
          </div>

          {/* Motto Card */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Quote className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Motto</h3>
            <p className="text-purple-100 leading-relaxed">{data.motto}</p>
          </div>

          {/* Slogan Card */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-5">
              <Megaphone className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Slogan</h3>
            <p className="text-blue-100 leading-relaxed">{data.slogan}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
