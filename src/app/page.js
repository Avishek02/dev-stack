export default function Home() {
  return (
    <main className="bg-base-100">
      {/* 1. Hero Section */}
      <section className="hero min-h-[70vh] bg-gradient-to-b from-base-200 to-base-100">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-black tracking-tighter mb-6">
              The Ultimate Developer <span className="text-primary">Tech Stack</span>
            </h1>
            <p className="text-xl mb-8 opacity-80">
              Stop searching, start building. Explore a curated collection of the world's most powerful tools, frameworks, and AI resources.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-primary btn-lg">Explore Tools</button>
              <button className="btn btn-outline btn-lg">Submit a Tool</button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 border-y border-base-300">
        <div className="container mx-auto px-4">
          <div className="stats shadow w-full lg:stats-horizontal stats-vertical">
            <div className="stat place-items-center">
              <div className="stat-title font-bold text-lg">Curated Tools</div>
              <div className="stat-value text-primary text-5xl">500+</div>
              <div className="stat-desc font-medium">Updated daily</div>
            </div>
            <div className="stat place-items-center border-x border-base-300">
              <div className="stat-title font-bold text-lg">Active Developers</div>
              <div className="stat-value text-secondary text-5xl">10.5K</div>
              <div className="stat-desc font-medium">Global community</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title font-bold text-lg">Categories</div>
              <div className="stat-value text-accent text-5xl">25+</div>
              <div className="stat-desc font-medium">Across all stacks</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Categories (Pillar 1: Discovery) */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-widest">Explore Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-primary text-primary-content p-8 shadow-xl hover:translate-y-[-10px] transition-all cursor-pointer">
            <h3 className="text-2xl font-bold">AI Assistants</h3>
            <p className="mt-2 opacity-80">GPT, Gemini, Cursor AI and more.</p>
          </div>
          <div className="card bg-secondary text-secondary-content p-8 shadow-xl hover:translate-y-[-10px] transition-all cursor-pointer">
            <h3 className="text-2xl font-bold">Frontend Mastery</h3>
            <p className="mt-2 opacity-80">Next.js, Tailwind, Framer Motion.</p>
          </div>
          <div className="card bg-accent text-accent-content p-8 shadow-xl hover:translate-y-[-10px] transition-all cursor-pointer">
            <h3 className="text-2xl font-bold">Backend & Cloud</h3>
            <p className="mt-2 opacity-80">Supabase, Vercel, Docker.</p>
          </div>
        </div>
      </section>

      {/* 4. Steps Section */}
      <section className="py-20 bg-base-200">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <ul className="steps steps-vertical lg:steps-horizontal w-full">
          <li className="step step-primary font-bold">Search Tool</li>
          <li className="step step-primary font-bold">Compare Tech</li>
          <li className="step step-primary font-bold">Build Faster</li>
        </ul>
      </section>

      {/* 5. Featured Tools Preview (Requirement 3) */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Trending in DevStack</h2>
        <div className="badge badge-outline p-4 mb-4">New Arrivals: DaisyUI v5</div>
        <p className="max-w-xl mx-auto opacity-70">Check out the most loved tools by developers this week.</p>
      </section>

      {/* 6. Newsletter (Engagement) */}
      <section className="py-20 bg-neutral text-neutral-content text-center rounded-3xl mx-4 lg:mx-20 mb-10 shadow-2xl">
        <h2 className="text-4xl font-black mb-4">Stay Ahead of the Curve</h2>
        <p className="mb-8 opacity-80">Get the best dev tools delivered to your inbox weekly.</p>
        <div className="flex justify-center gap-2">
          <input type="text" placeholder="your@email.com" className="input input-bordered text-black w-64 lg:w-96" />
          <button className="btn btn-primary">Join Now</button>
        </div>
      </section>

      {/* 7. Community Support (Footer Info) */}
      <section className="py-10 text-center border-t border-base-300">
        <div className="flex justify-center gap-10 opacity-60 font-bold">
          <span>GitHub</span>
          <span>Discord</span>
          <span>Twitter</span>
        </div>
      </section>
    </main>
  );
}