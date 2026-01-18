"use client";
import Link from 'next/link';

const devTools = [
  { id: 1, name: "Cursor AI", category: "IDE", rating: 4.9, description: "The AI-first code editor built for pair programming.", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400" },
  { id: 2, name: "DaisyUI", category: "CSS Library", rating: 4.8, description: "The most popular component library for Tailwind CSS.", img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400" },
  { id: 3, name: "Supabase", category: "Database", rating: 4.7, description: "The open source Firebase alternative for backend.", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400" },
  { id: 4, name: "Vercel", category: "Deployment", rating: 5.0, description: "The platform for frontend teams to ship fast.", img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400" }
];

export default function ItemsPage() {
  return (
    <div className="container mx-auto p-10 min-h-screen">
      <h1 className="text-4xl font-black mb-10 text-center uppercase tracking-tighter">Developer Toolkit</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {devTools.map(tool => (
          <div key={tool.id} className="card bg-base-100 shadow-2xl border border-base-300 hover:border-primary transition-all group">
            <figure><img src={tool.img} alt={tool.name} className="h-52 w-full object-cover group-hover:scale-105 transition-transform" /></figure>
            <div className="card-body">
              <div className="badge badge-primary font-bold">{tool.category}</div>
              <h2 className="card-title text-2xl">{tool.name}</h2>
              <p className="opacity-70 text-sm">{tool.description}</p>
              <div className="card-actions justify-between items-center mt-5">
                <span className="font-bold text-xl">⭐ {tool.rating}</span>
                <Link href={`/items/${tool.id}`} className="btn btn-primary btn-sm">Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}