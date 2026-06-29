import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { getBlogPosts, categoryEmoji } from '@/lib/content-engine';

export const metadata: Metadata = {
  title: 'Blog de Casino Online Perú — Guías, Estrategias y Noticias',
  description: 'Artículos, guías y estrategias de casino online para jugadores peruanos. Todo sobre bonos, tragamonedas, pagos y más.',
  alternates: { canonical: '/blog' },
};

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  if (blogPosts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb items={[{ label: 'Blog' }]} />
        <div className="mt-6 mb-8">
          <h1 className="text-4xl font-black text-white mb-3">Blog de Casino Online Perú</h1>
          <p className="text-slate-400">Próximamente publicaremos guías, estrategias y noticias para jugadores peruanos.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <div className="mt-6 mb-8">
        <h1 className="text-4xl font-black text-white mb-3">Blog de Casino Online Perú</h1>
        <p className="text-slate-400 max-w-2xl">Guías detalladas, análisis de estrategias y noticias del mundo de los casinos online para jugadores peruanos.</p>
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="bg-emerald-500 text-slate-900 font-bold text-sm rounded-full px-4 py-1.5">Todos</span>
        {categories.map((cat) => (
          <button key={cat} className="bg-slate-800 border border-slate-700 hover:border-emerald-500 text-slate-300 hover:text-white font-medium text-sm rounded-full px-4 py-1.5 transition-colors">
            {categoryEmoji(cat)} {cat}
          </button>
        ))}
      </div>

      {/* Featured post */}
      <div className="mb-8">
        <Link href={`/blog/${blogPosts[0].slug}`} className="group block bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-48 md:h-full bg-gradient-to-br from-emerald-900/40 to-slate-800 flex items-center justify-center text-7xl" aria-hidden="true">
              {categoryEmoji(blogPosts[0].category)}
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 font-semibold">{blogPosts[0].category}</span>
                <span className="text-xs text-slate-500">Artículo destacado</span>
              </div>
              <h2 className="text-2xl font-black text-white group-hover:text-emerald-400 transition-colors mb-3 leading-tight">{blogPosts[0].title}</h2>
              <p className="text-slate-400 leading-relaxed mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Clock size={12} />{blogPosts[0].readTime} min de lectura</span>
                <span>{new Date(blogPosts[0].date).toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold mt-4">Leer artículo <ChevronRight size={15} /></div>
            </div>
          </div>
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.slice(1).map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-slate-800/60 border border-slate-700/50 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
            <div className="h-36 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-5xl" aria-hidden="true">
              {categoryEmoji(post.category)}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-2.5 py-0.5 font-semibold">{post.category}</span>
                <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={11} />{post.readTime} min</span>
              </div>
              <h2 className="font-bold text-white text-sm leading-tight group-hover:text-emerald-400 transition-colors mb-2">{post.title}</h2>
              <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString('es-PE')}</span>
                <span className="text-xs text-emerald-400 font-semibold">Leer →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
