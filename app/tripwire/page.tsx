export default function TripwirePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Your AI Outputs Are Garbage (And How to Fix Them in 60 Seconds)
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            The $7 toolkit that fixes your 5 worst prompt habits in under an hour — so you stop getting generic fluff and start getting results you can actually use.
          </p>
          <a
            href="#checkout"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition"
          >
            Get the Fix-It Kit for $7 — Fix Your Worst Prompt Habits Today
          </a>
          <p className="mt-4 text-sm text-slate-400">Less than a fast-food meal. 60-second fixes. Instant improvement.</p>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Sound Familiar?</h2>
        <div className="space-y-6 text-lg">
          <div className="flex items-start gap-4">
            <span className="text-red-500 text-2xl">✗</span>
            <p>You give AI a general instruction like "Write me an email" and hope it reads your mind. It doesn't.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-red-500 text-2xl">✗</span>
            <p>You rewrite the same prompt 10 times, chasing a usable output.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-red-500 text-2xl">✗</span>
            <p>Your competitors are publishing content daily while you're stuck in an AI chat loop.</p>
          </div>
          <div className="bg-slate-100 p-6 rounded-lg mt-6 text-center font-semibold text-xl">
            It's not the AI's fault. It's your prompts.
          </div>
        </div>
      </section>

      {/* The 5 Prompt Killers */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">The 5 Prompt Killers (And the Fixes Inside This Kit)</h2>
          <p className="text-center text-slate-600 mb-10">Each fix takes 5–10 minutes. By the end of this hour, your prompts will be sharper, clearer, and dramatically more reliable.</p>
          <div className="space-y-6">
            {[
              { killer: "The Vague Ask", fix: "The SPEC Framework", desc: "Every prompt needs Situation, Persona, Expectation, and Constraints." },
              { killer: "No Structure", fix: "The Container Principle", desc: "Labeled sections that separate context from task from examples." },
              { killer: "Missing Examples", fix: "Few-Shot Format Lock", desc: "Show the AI exactly what good looks like before asking." },
              { killer: "Giant Prompts", fix: "Decomposition", desc: "Break big tasks into chained prompts that don't break." },
              { killer: "No Quality Control", fix: "The 45-Point Checklist", desc: "Score every prompt before you send it." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="text-red-500 font-bold min-w-[140px]">Killer #{i+1}: {item.killer}</div>
                  <div className="text-teal-600 font-bold min-w-[180px]">→ Fix: {item.fix}</div>
                  <div className="text-slate-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What's Inside The Prompt Fix-It Kit</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "PDF Guide: The 5 Prompt Killers (and How to Fix Them)",
            "Prompt Quality Control Checklist (8 sections, 45-point scoring)",
            "10 Before/After Swipe Files (email, ads, landing pages, social)",
            "No-Yapping Protocol Quick-Reference Card",
          ].map((item, i) => (
            <div key={i} className="bg-teal-50 p-5 rounded-lg border border-teal-100 flex items-start gap-3">
              <span className="text-teal-600 text-xl">✓</span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Win Proof */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Your Quick Win Guarantee</h2>
          <p className="text-xl mb-6">Pick ONE prompt you use regularly. Apply the 5 fixes. Test the before and after.</p>
          <p className="text-2xl font-bold text-teal-400 mb-8">You WILL see a difference.</p>
          <p className="text-slate-300">Total time required: under 1 hour. Each fix takes 5–10 minutes.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="checkout" className="py-20 px-4 bg-teal-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get The Prompt Fix-It Kit</h2>
          <p className="text-2xl font-bold mb-2">$7</p>
          <p className="mb-8 text-teal-100">Less than a fast-food meal. Instant digital delivery.</p>
          <a
            href="#"
            className="inline-block bg-white text-teal-600 hover:bg-slate-100 font-bold text-lg px-10 py-4 rounded-lg transition"
          >
            Yes — Fix My Prompts for $7
          </a>
          <p className="mt-6 text-sm text-teal-100">
            30-day money-back guarantee. If these fixes don't immediately improve your AI outputs, email us for a full refund.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">Is this just another prompt list?</h3>
            <p className="text-slate-600">No. This is a diagnostic + fix system. You learn WHY prompts fail and HOW to fix them.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Do I need to be technical?</h3>
            <p className="text-slate-600">No coding required. If you can copy and paste, you can use this.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Will this work for my niche?</h3>
            <p className="text-slate-600">The 5 killers affect EVERY prompt. The fixes are universal.</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto text-xs text-slate-500 text-center">
          Results from using The Prompt Fix-It Kit vary based on individual effort, niche, and implementation. This toolkit teaches prompt improvement techniques but does not guarantee specific business outcomes, income levels, or AI performance. AI tools and models change frequently; techniques should be adapted as platforms evolve.
        </div>
      </section>

      {/* Opt-out Link */}
      <section className="py-8 px-4 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <a href="/" className="text-gray-500 hover:text-gray-400 text-sm underline">
            I'm not interested in this offer
          </a>
        </div>
      </section>
    </main>
  );
}
