export default function Upsell2AppPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 py-20 px-4 border-b border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            From Workslop to Workflow
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-8">
            Automate Your AI Prompts With One Dashboard
          </p>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            You've learned the system. You've got the templates. Now let the dashboard do the work. Audit, score, and optimize your prompts automatically — so you can focus on making money, not tweaking prompts.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition"
          >
            Start Free — No Credit Card Required
          </a>
          <p className="mt-4 text-sm text-slate-500">5 free audits/month. Upgrade anytime. Cancel in one click.</p>
        </div>
      </section>

      {/* The Automation Gap */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">The Manual Audit Problem</h2>
        <p className="text-lg text-slate-400 mb-6">
          You know how to engineer prompts now. But manually checking every prompt against a 45-point checklist takes 5–10 minutes each.
        </p>
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 inline-block text-left max-w-lg">
          <p className="text-slate-500 line-through mb-2">Manual prompt audit: 10 minutes</p>
          <p className="text-teal-400 font-bold text-2xl">Prompt Architect Studio audit: 10 seconds</p>
        </div>
        <p className="mt-6 text-xl font-semibold">Paste your prompt. Get a score. Click once for an optimized rewrite.</p>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">What Prompt Architect Studio Does</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Instant Audit Engine", desc: "Paste any prompt. Get scored on structure, reasoning chains, syntax, and testing readiness in under 10 seconds." },
              { title: "One-Click Fix", desc: "AI-powered rewrite that applies the 5 killer fixes automatically. Uses GPT-4o-mini for fast, affordable optimization." },
              { title: "Template Library", desc: "200+ proven prompts pre-loaded and searchable by category." },
              { title: "Personal Prompt Library", desc: "Save, organize, and version-control your custom prompts." },
              { title: "Model Optimizer", desc: "Automatically adjusts prompts for GPT, Claude, or DeepSeek dialects." },
              { title: "Token Counter", desc: "Know exactly how many tokens your prompt uses before you send it." },
              { title: "Golden Dataset Builder", desc: "Test and validate prompts for consistent outputs over time." },
            ].map((item, i) => (
              <div key={i} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <div className="text-teal-400 font-bold text-lg mb-2">{item.title}</div>
                <div className="text-slate-400">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">How It Works</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="bg-teal-500 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0">1</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Paste Your Prompt</h3>
              <p className="text-slate-400">Drop any prompt into the audit tool — no formatting required.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-teal-500 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0">2</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Review Your Scorecard</h3>
              <p className="text-slate-400">See exactly what's broken and why. Structure, syntax, reasoning, testing readiness — all scored.</p>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="bg-teal-500 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0">3</div>
            <div>
              <h3 className="font-bold text-xl mb-2">Click "Fix My Prompt"</h3>
              <p className="text-slate-400">Get an optimized rewrite instantly. Copy it, save it, or run it again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">The ROI Calculator</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="text-4xl font-bold text-teal-400 mb-2">20</div>
              <div className="text-slate-400">Prompts per week</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="text-4xl font-bold text-teal-400 mb-2">3+</div>
              <div className="text-slate-400">Hours saved per week</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="text-4xl font-bold text-teal-400 mb-2">$300+</div>
              <div className="text-slate-400">Monthly value of time saved</div>
            </div>
          </div>
          <p className="text-xl">Pro tier cost: <span className="font-bold text-teal-400">$19/month</span></p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="text-slate-400 font-medium mb-2">Free</div>
              <div className="text-4xl font-bold mb-4">$0</div>
              <ul className="space-y-3 text-slate-400 text-sm mb-6">
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> 5 audits/month</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Basic templates</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Token counter</li>
              </ul>
              <a href="#" className="block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition">Start Free</a>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border-2 border-teal-500 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
              <div className="text-teal-400 font-medium mb-2">Pro</div>
              <div className="text-4xl font-bold mb-4">$19<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 text-slate-400 text-sm mb-6">
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Unlimited audits</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Full template library (200+)</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Model optimizer</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Personal prompt library</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Export & share</li>
              </ul>
              <a href="#" className="block text-center bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-lg transition">Start Pro Trial</a>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <div className="text-slate-400 font-medium mb-2">Team</div>
              <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-slate-400">/mo</span></div>
              <ul className="space-y-3 text-slate-400 text-sm mb-6">
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Everything in Pro</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Team collaboration</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> API access</li>
                <li className="flex items-center gap-2"><span className="text-teal-400">✓</span> Priority support</li>
              </ul>
              <a href="#" className="block text-center bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition">Contact Sales</a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Placeholders */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Early Users Are Saying</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300 italic mb-4">"[TESTIMONIAL PLACEHOLDER: Before/after prompt quality improvement quote from beta user]"</p>
              <div className="text-slate-500 text-sm">— Beta User, Affiliate Marketer</div>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <p className="text-slate-300 italic mb-4">"[TESTIMONIAL PLACEHOLDER: Time savings quote from early adopter]"</p>
              <div className="text-slate-500 text-sm">— Early Adopter, Solopreneur</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">Testimonials from beta users. Your results may vary.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Do I need the course to use the app?</h3>
            <p className="text-slate-400">The app works standalone, but you'll get 10x more value if you understand the principles from the course.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">What AI models does the fix engine use?</h3>
            <p className="text-slate-400">GPT-4o-mini for fast, affordable optimization. Future updates may include Claude and DeepSeek.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Is my prompt data private?</h3>
            <p className="text-slate-400">Yes. We don't train on your prompts or share them with third parties.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Can I cancel anytime?</h3>
            <p className="text-slate-400">Yes. No contracts. Cancel in one click.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Will this work on mobile?</h3>
            <p className="text-slate-400">Yes — the dashboard is fully responsive.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-teal-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Prompt Architect Studio</h2>
          <p className="text-xl mb-8 text-teal-100">Start free. Upgrade when you're ready. No credit card required.</p>
          <a
            href="#"
            className="inline-block bg-white text-teal-600 hover:bg-slate-100 font-bold text-lg px-10 py-4 rounded-lg transition"
          >
            Start Free — No Credit Card Required
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-xs text-slate-600 text-center">
          Prompt Architect Studio is a software tool that provides prompt analysis and optimization suggestions. Results vary based on user input, AI model behavior, and implementation. We do not guarantee specific output quality, business results, or income levels. AI models evolve and may produce unexpected outputs; users should review and validate all generated content.
        </div>
      </section>
    </main>
  );
}
