import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Users } from 'lucide-react';
import heroData from '@/data/home/hero.json';
import type { HeroData } from '@/types/home';

export function Hero() {
  const data = heroData as HeroData;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={data.backgroundImage}
          alt="ASAUD Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/95 via-red-900/90 to-red-800/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">
                {data.subtitle}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {data.title}
            </h1>

            <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl leading-relaxed">
              {data.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={data.cta.primary.link}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-xl hover:bg-red-50 transition-all shadow-lg hover:shadow-xl"
              >
                {data.cta.primary.text}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={data.cta.secondary.link}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
              >
                <Users className="w-5 h-5" />
                {data.cta.secondary.text}
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 shadow-2xl">
              <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-red-400 rounded-full" />
                ASAUD at a Glance
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {data.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-red-200">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
