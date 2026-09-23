import socialDataRaw from '@/data/home/socialLinks.json';
import type { SocialLink } from '@/types/common';
import { socialIcons } from '@/components/common/SocialIcons';

const socialData = socialDataRaw as { social: SocialLink[] };

export function SocialChannels() {
  const socials = socialData.social;

  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Connect With Us
          </h2>
          <p className="text-blue-100 text-lg">
            Follow ASAUD on our official channels for the latest updates,
            events, and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            if (!Icon) return null;

            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-white text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-semibold text-white text-sm mb-0.5">
                  {social.platform}
                </div>
                <div className="text-xs text-blue-200 truncate">
                  {social.handle}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}