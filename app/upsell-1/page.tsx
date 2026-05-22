export default function Upsell1Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Skip the Setup. Start Executing.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            50 copy-paste prompt templates, 10 OpenClaw automation commands, and niche-specific packs — so you can stop building prompts from scratch and start getting results in minutes, not hours.
          </p>
          <a
            href="#checkout"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition"
          >
            Get the Accelerator Pack for $27
          </a>
        </div>
      </section>

      {/* The Grunt Work Problem */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">You Know WHAT to Do. But Building Every Prompt From Scratch Is Still Exhausting.</h2>
        <p className="text-xl text-slate-600 mb-6">Why reinvent the wheel when you can copy, paste, and customize in 2 minutes?</p>
        <div className="bg-slate-100 p-6 rounded-lg inline-block text-left">
          <p className="text-slate-500 line-through">Building one good prompt from scratch: 15–30 minutes</p>
          <p className="text-teal-600 font-bold text-xl">Customizing a proven template: 2–3 minutes</p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What's Inside the Accelerator Pack</h2>
          <div className="space-y-4">
            {[
              "50 Pre-Built Prompt Templates (email, landing pages, social, ads, content, SEO, bonus)",
              "10 OpenClaw Commands (automate repetitive prompt workflows)",
              "3 Niche-Specific Packs (Make Money Online, Health & Wellness, SaaS Affiliate)",
              "Prompt Remix Formula (adapt any template to your offer in 5 steps)",
              "Setup Videos for Top 5 AI Tools",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm border border-slate-200">
                <span className="text-teal-600 text-xl">✓</span>
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">50 Templates Across 7 Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { cat: "Email Marketing", count: "10 templates", desc: "Welcome, launch, re-engagement, review" },
            { cat: "Landing Page & Sales Copy", count: "10 templates", desc: "Short-form, long-form, lead magnet, upsell" },
            { cat: "Social Media Content", count: "10 templates", desc: "Instagram, TikTok, Twitter, LinkedIn, YouTube" },
            { cat: "Ad Copy", count: "5 templates", desc: "Facebook, Google, YouTube, native, retargeting" },
            { cat: "Content Creation", count: "7 templates", desc: "Blog posts, comparisons, how-to, listicles" },
            { cat: "SEO & Research", count: "5 templates", desc: "Keywords, meta, content gap, competitor audit" },
            { cat: "Bonus Templates", count: "3 templates", desc: "Affiliate outreach, JV messages, reports" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
              <div className="font-bold text-lg mb-1">{item.cat}</div>
              <div className="text-teal-600 font-medium text-sm mb-2">{item.count}</div>
              <div className="text-slate-600 text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Time Savings Calculator */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The Time Savings Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-teal-400 mb-2">20</div>
              <div className="text-slate-300">Prompts per week</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-teal-400 mb-2">3+</div>
              <div className="text-slate-300">Hours saved per week</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="text-4xl font-bold text-teal-400 mb-2">$200+</div>
              <div className="text-slate-300">Value of time saved weekly</div>
            </div>
          </div>
          <p className="text-xl">Accelerator Pack cost: <span className="font-bold text-teal-400">$27 one-time</span></p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="checkout" className="py-20 px-4 bg-teal-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Add the Accelerator Pack</h2>
          <p className="text-2xl font-bold mb-2">$27</p>
          <p className="mb-8 text-teal-100">One-time payment. Instant access. Use forever.</p>
          <a
            href="#"
            className="inline-block bg-white text-teal-600 hover:bg-slate-100 font-bold text-lg px-10 py-4 rounded-lg transition mb-4"
          >
            Yes — Add the Accelerator Pack ($27)
          </a>
          <div className="mt-4">
            <a href="#" className="text-sm text-teal-100 underline hover:text-white">
              No thanks — I'll build all my prompts manually
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Do these templates work with ChatGPT/Claude/DeepSeek?</h3>
            <p className="text-slate-600">Yes — all templates are model-agnostic.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Can I use these for client work?</h3>
            <p className="text-slate-600">Yes, you have full usage rights.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">What's an OpenClaw command?</h3>
            <p className="text-slate-600">Pre-built automation commands that run inside OpenClaw to speed up your workflow.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
