export default function CoreOfferPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Stop Chatting. Start Engineering.
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            The 7-day mini course that transforms you from a frustrated AI user into a prompt engineer who gets reliable, repeatable results — even if you've never written code.
          </p>
          <a
            href="#checkout"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg px-8 py-4 rounded-lg transition"
          >
            Master Prompt Engineering — Enroll for $47
          </a>
          <p className="mt-4 text-sm text-slate-400">Less than the cost of one bad ad campaign. Lifetime access.</p>
        </div>
      </section>

      {/* The Reliability Crisis */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">The Reliability Crisis</h2>
        <div className="space-y-6 text-lg text-slate-700">
          <p>AI doesn't "understand" your prompt. It predicts the next token based on probability.</p>
          <p>Vague prompts = average outputs pulled from the middle of the internet.</p>
          <div className="bg-slate-100 p-6 rounded-lg font-semibold text-xl text-center">
            Your prompt is a probability-shaping tool. The clearer your shape, the cleaner your output.
          </div>
        </div>
      </section>

      {/* Transformation Roadmap */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Your 7-Day Transformation Roadmap</h2>
          <p className="text-center text-slate-600 mb-10">One module per day. 15–25 minutes each. By Day 7, you'll be engineering prompts like a pro.</p>
          <div className="space-y-4">
            {[
              { day: "Day 1", title: "The Reliability Crisis", impact: "Stop wasting time on broken prompts" },
              { day: "Day 2", title: "The Container Principle", impact: "3x output consistency" },
              { day: "Day 3", title: "Reasoning Chains", impact: "Complex tasks become reliable" },
              { day: "Day 4", title: "Decomposition", impact: "Handle projects that used to break AI" },
              { day: "Day 5", title: "The Golden Dataset", impact: "Reproducible results, every time" },
              { day: "Day 6", title: "Model Dialects", impact: "Best output from every model" },
              { day: "Day 7", title: "Agent Orchestration", impact: "Automate entire content pipelines" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center gap-4">
                <div className="bg-teal-500 text-white font-bold px-4 py-2 rounded min-w-[100px] text-center">{item.day}</div>
                <div className="font-bold text-lg flex-1">{item.title}</div>
                <div className="text-teal-600 font-medium">→ {item.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
        <div className="space-y-4">
          {[
            "7 Video Modules (1 per day, 15–25 min each)",
            "Implementation Workbook with fill-in exercises",
            "30-Day Implementation Tracker",
            "Bonus: The Prompt Engineering Toolkit (Notion dashboard)",
            "Bonus: 7-Day Prompt Challenge (email accountability)",
            "Bonus: The 'Workslop' Escape Plan (before/after examples)",
            "Bonus: Model Comparison Matrix (PDF cheat sheet)",
            "Bonus: Affiliate Prompt Swipe File Vault (25 extra prompts)",
            "Bonus: Private Community Access",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
              <span className="text-teal-600 text-xl">✓</span>
              <span className="font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="py-16 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-400">Who This Is For</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Affiliate marketers who use AI for content but hate the inconsistency</li>
              <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Solopreneurs who need reliable outputs without hiring a prompt engineer</li>
              <li className="flex items-start gap-3"><span className="text-teal-400">✓</span> Beginners who think prompt engineering is "too technical" for them</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">Who This Is NOT For</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3"><span className="text-red-400">✗</span> People looking for a magic button (you'll still need to implement)</li>
              <li className="flex items-start gap-3"><span className="text-red-400">✗</span> Advanced developers who already build custom AI pipelines</li>
              <li className="flex items-start gap-3"><span className="text-red-400">✗</span> Anyone unwilling to spend 30 minutes per day for 7 days</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Risk Reversal */}
      <section className="py-16 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">30-Day "Better Prompts" Guarantee</h2>
        <p className="text-lg text-slate-700 mb-6">
          Complete the first 3 modules. Apply the techniques. If your AI outputs aren't noticeably more reliable and consistent, email us for a full refund.
        </p>
        <p className="text-slate-500">No hoops. No hassle. Just send us an email.</p>
      </section>

      {/* CTA Section */}
      <section id="checkout" className="py-20 px-4 bg-teal-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enroll in Prompt Engineering Mastery</h2>
          <p className="text-2xl font-bold mb-2">$47</p>
          <p className="mb-8 text-teal-100">Lifetime access. All bonuses included. 30-day guarantee.</p>
          <a
            href="#"
            className="inline-block bg-white text-teal-600 hover:bg-slate-100 font-bold text-lg px-10 py-4 rounded-lg transition"
          >
            Yes — I'm Ready to Engineer My Prompts ($47)
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg mb-2">How is this different from the $7 Fix-It Kit?</h3>
            <p className="text-slate-600">The Fix-It Kit gives you quick patches. This is the FULL system that teaches you to engineer prompts from scratch.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Do I need coding skills?</h3>
            <p className="text-slate-600">No. This is built for non-technical marketers.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">How long do I have access?</h3>
            <p className="text-slate-600">Lifetime access to all materials.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">What AI tools does this cover?</h3>
            <p className="text-slate-600">ChatGPT, Claude, DeepSeek, and any LLM. The principles are universal.</p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-slate-100">
        <div className="max-w-3xl mx-auto text-xs text-slate-500 text-center">
          Prompt Engineering Mastery is an educational course. Results depend on individual effort, implementation, and market conditions. We do not guarantee specific income, traffic, or business outcomes. AI models and platforms evolve; techniques taught are current as of the course publish date.
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
