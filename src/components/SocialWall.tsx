import { useState } from 'react';
import { SOCIAL_POSTS } from '../data/socialPosts';
import type { SocialPost } from '../types';
import { Heart, X, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './icons';

export function SocialWall() {
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);

  return (
    <section
      id="social"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#050505] border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="font-heading text-xs sm:text-sm font-bold tracking-[0.25em] text-[#B6FF00] uppercase block mb-3">
              SECTION 09 / ARENA HIGHLIGHTS
            </span>
            <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase font-black text-[#F5F5F2] leading-[0.9]">
              SOCIAL <br />
              <span className="text-[#B6FF00]">FEED.</span>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#8A8A8A] hover:text-[#B6FF00] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW @VORTEXFUTSAL</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOCIAL_POSTS.map((post, idx) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              data-cursor="view"
              className={`relative rounded-2xl overflow-hidden bg-[#0B0D0C] border border-white/10 group cursor-pointer ${
                idx === 0 || idx === 3 ? 'aspect-[4/5]' : 'aspect-square'
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
              />

              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-[#050505]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between text-xs font-heading text-[#B6FF00]">
                  <span className="font-bold tracking-wider">{post.category}</span>
                  <InstagramIcon className="w-5 h-5 text-[#F5F5F2]" />
                </div>

                <div>
                  <p className="font-sans text-xs text-[#F5F5F2] line-clamp-3 mb-4">
                    "{post.title}"
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-[#8A8A8A]">
                    <span className="font-bold text-[#F5F5F2]">{post.handle}</span>
                    <span className="flex items-center gap-1 text-[#FF5A1F]">
                      <Heart className="w-3.5 h-3.5 fill-current" />
                      {post.likes}
                    </span>
                  </div>

                  <div className="mt-4 w-full py-2 bg-[#B6FF00] text-[#050505] font-heading font-black text-[10px] uppercase tracking-widest text-center rounded-lg">
                    VIEW POST
                  </div>
                </div>
              </div>

              {/* Static Badge on bottom-left */}
              <div className="absolute bottom-3 left-3 bg-[#050505]/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-heading font-bold text-[#F5F5F2] border border-white/10 group-hover:opacity-0 transition-opacity">
                {post.author}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Social Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in">
          <div className="bg-[#0B0D0C] border border-white/20 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#B6FF00] hover:text-[#050505] transition-colors"
              aria-label="Tutup foto"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] w-full bg-black">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-display text-xl font-bold text-[#F5F5F2]">
                    {selectedPost.author}
                  </span>
                  <span className="font-heading text-xs text-[#8A8A8A] block">
                    {selectedPost.handle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#FF5A1F] font-heading font-bold">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{selectedPost.likes} LIKES</span>
                </div>
              </div>

              <p className="font-sans text-sm text-[#F5F5F2] mb-4">
                {selectedPost.title}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-[#B6FF00] bg-white/5 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedPost(null)}
                className="w-full py-3 bg-[#050505] hover:bg-white/10 border border-white/10 text-[#F5F5F2] font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
              >
                TUTUP PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
