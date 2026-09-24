import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-950 via-red-900 to-red-800 px-4 pt-20">
      <div className="text-center max-w-lg">
        <div className="text-8xl md:text-9xl font-bold text-white/10 mb-4">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-red-100 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-red-50 transition-all"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/academics/study-materials"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
          >
            <Search className="w-5 h-5" />
            Study Materials
          </Link>
        </div>
      </div>
    </section>
  );
}
