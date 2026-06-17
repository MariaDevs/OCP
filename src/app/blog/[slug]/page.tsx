import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ChevronRight, ArrowLeft } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { blogPosts } from '@/lib/data/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: 'Blog', href: '/blog' }, { label: post.category, href: '/blog' }, { label: post.title }]} />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <article className="lg:col-span-2">
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs bg-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 font-semibold">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-black text-white mt-4 mb-3 leading-tight">{post.title}</h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-slate-500 border-b border-slate-700 pb-4">
              <span className="flex items-center gap-1.5"><Calendar size={14} />{new Date(post.date).toLocaleDateString('es-PE', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} />{post.readTime} min de lectura</span>
              <span>Por {post.author}</span>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center text-8xl mb-8">
            {post.category === 'Tragamonedas' ? '🎰' : post.category === 'Métodos de Pago' ? '💳' : post.category === 'Legal' ? '⚖️' : post.category === 'Estrategias' ? '🧠' : post.category === 'Bonos' ? '🎁' : '📱'}
          </div>

          {/* Real article content rendered from markdown-like text */}
          <div className="space-y-4 text-slate-400 leading-relaxed">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-black text-white mt-8 mb-2">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-white mt-6 mb-2">{block.replace('### ', '')}</h3>;
              }
              if (block.startsWith('**') && block.endsWith('**')) {
                return <p key={i} className="font-semibold text-slate-200">{block.replace(/\*\*/g, '')}</p>;
              }
              if (block.startsWith('1. ') || block.startsWith('2. ')) {
                const items = block.split('\n');
                return (
                  <ol key={i} className="list-decimal list-inside space-y-1">
                    {items.map((item, j) => <li key={j} className="text-slate-300">{item.replace(/^\d+\.\s/, '')}</li>)}
                  </ol>
                );
              }
              if (block.startsWith('- ') || block.startsWith('**')) {
                const items = block.split('\n');
                return (
                  <ul key={i} className="space-y-1">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} dangerouslySetInnerHTML={{ __html: block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-700">
            <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
              <ArrowLeft size={16} /> Volver al blog
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-5">
          {related.length > 0 && (
            <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4">
              <h3 className="font-bold text-white mb-4">Artículos Relacionados</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="flex gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-lg flex-shrink-0">
                      {r.category === 'Tragamonedas' ? '🎰' : r.category === 'Métodos de Pago' ? '💳' : '📖'}
                    </div>
                    <div>
                      <div className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors leading-tight">{r.title}</div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock size={10} /> {r.readTime} min</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-slate-800/60 border border-emerald-500/30 rounded-2xl p-5">
            <div className="text-2xl mb-3">🎰</div>
            <h3 className="font-bold text-white mb-2">¿Listo para Jugar?</h3>
            <p className="text-slate-400 text-sm mb-4">Compara los mejores casinos online disponibles en Perú con bonos exclusivos.</p>
            <Link href="/casinos" className="block text-center bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold py-2.5 rounded-xl transition-colors text-sm">
              Ver Casinos Recomendados
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
