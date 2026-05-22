import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2 text-[#06b6d4]">Prompt Architect Studio</h1>
        <p className="text-gray-400 mb-8">Sales Funnel Pages</p>
        
        <div className="space-y-4">
          <Link 
            href="/tripwire" 
            className="block p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition border border-gray-800"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Tripwire</h2>
                <p className="text-gray-400 text-sm">The Prompt Fix-It Kit — $7</p>
              </div>
              <span className="text-[#06b6d4]">→</span>
            </div>
          </Link>

          <Link 
            href="/core-offer" 
            className="block p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition border border-gray-800"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Core Offer</h2>
                <p className="text-gray-400 text-sm">Prompt Engineering Mastery — $47</p>
              </div>
              <span className="text-[#06b6d4]">→</span>
            </div>
          </Link>

          <Link 
            href="/upsell-1" 
            className="block p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition border border-gray-800"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Upsell #1</h2>
                <p className="text-gray-400 text-sm">Prompt Accelerator Pack — $27</p>
              </div>
              <span className="text-[#06b6d4]">→</span>
            </div>
          </Link>

          <Link 
            href="/upsell-2-app" 
            className="block p-6 bg-[#1a1a1a] rounded-lg hover:bg-[#252525] transition border border-gray-800"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Upsell #2</h2>
                <p className="text-gray-400 text-sm">Prompt Architect Studio — $19-49/mo</p>
              </div>
              <span className="text-[#06b6d4]">→</span>
            </div>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 Smith Media Marketing. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}