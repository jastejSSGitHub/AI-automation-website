import sys

filepath = r"c:\Users\jaste\Desktop\Antigravity research folders\AI Automation\website\public\index.html"

new_section = """    <!-- Comparison Table Section -->
    <section data-theme="dark" class="py-20 md:py-32 bg-[#060d1b] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-20 xl:px-32">

        <!-- Header -->
        <div class="text-center mb-14">
          <p class="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-5">LOOPSUIT VS. TRADITIONAL ALTERNATIVES</p>
          <h2 class="text-4xl md:text-[3.25rem] font-medium tracking-tight text-white leading-tight font-sf">
            Agency, freelancer, or in-house? <em class="italic font-light">None.</em>
          </h2>
        </div>

        <!-- Table wrapper for horizontal scroll on mobile -->
        <div class="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <div class="min-w-[680px]">

            <!-- Column Headers -->
            <div class="grid items-center mb-3 px-4" style="grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 1fr;">
              <div></div>
              <div class="text-center text-white/50 text-xs font-semibold uppercase tracking-wider">Speed</div>
              <div class="text-center text-white/50 text-xs font-semibold uppercase tracking-wider">Quality</div>
              <div class="text-center text-white/50 text-xs font-semibold uppercase tracking-wider">Scalability</div>
              <div class="text-center text-white/50 text-xs font-semibold uppercase tracking-wider">AI-Powered</div>
              <div class="text-center text-white/50 text-xs font-semibold uppercase tracking-wider">Cost-Effective</div>
            </div>

            <!-- LoopSuit Row (Highlighted) -->
            <div class="rounded-2xl p-5 mb-3 grid items-center" style="grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 1fr; background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 60%, #3b82f6 100%);">
              <div class="flex items-center gap-4 pr-4">
                <div class="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/20">
                  <img src="./logos/logo_light.svg" alt="LoopSuit" class="w-9 h-9 object-contain">
                </div>
                <div>
                  <p class="font-bold text-white text-lg leading-tight mb-0.5">LoopSuit</p>
                  <p class="text-blue-100 text-sm leading-snug">Design, build, and automate — faster than any traditional approach.</p>
                </div>
              </div>
              <div class="flex justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
            </div>

            <!-- In-house team -->
            <div class="grid items-center py-5 px-4 border-b border-white/[0.07]" style="grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 1fr;">
              <div class="flex items-center gap-4 pr-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.06);">
                  <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p class="font-semibold text-white text-base">In-house team</p>
                  <p class="text-white/45 text-sm leading-snug">Slow to hire, expensive to maintain, and rarely spans design, dev, and AI.</p>
                </div>
              </div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
            </div>

            <!-- Traditional agency -->
            <div class="grid items-center py-5 px-4 border-b border-white/[0.07]" style="grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 1fr;">
              <div class="flex items-center gap-4 pr-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.06);">
                  <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <div>
                  <p class="font-semibold text-white text-base">Traditional agency</p>
                  <p class="text-white/45 text-sm leading-snug">Long timelines, bloated retainers, and no real AI capability under the hood.</p>
                </div>
              </div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
            </div>

            <!-- Freelancers -->
            <div class="grid items-center py-5 px-4 border-b border-white/[0.07]" style="grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 1fr;">
              <div class="flex items-center gap-4 pr-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.06);">
                  <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                </div>
                <div>
                  <p class="font-semibold text-white text-base">Freelancers</p>
                  <p class="text-white/45 text-sm leading-snug">Hard to coordinate, inconsistent output, and rarely cover the full stack you need.</p>
                </div>
              </div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
            </div>

            <!-- DIY / No-code tools -->
            <div class="grid items-center py-5 px-4" style="grid-template-columns: 2.5fr 1fr 1fr 1fr 1fr 1fr;">
              <div class="flex items-center gap-4 pr-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.06);">
                  <svg class="w-5 h-5 text-white/50" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p class="font-semibold text-white text-base">DIY / No-code tools</p>
                  <p class="text-white/45 text-sm leading-snug">Great for simple tasks — but hit a ceiling fast when your business grows.</p>
                </div>
              </div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
              <div class="flex justify-center"><svg class="w-5 h-5 text-white/40" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg></div>
            </div>

          </div>
        </div>
      </div>
    </section>

"""

marker = "    <!-- Case Studies Section -->"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

if marker in content:
    content = content.replace(marker, new_section + marker, 1)
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("SUCCESS: Section inserted before Case Studies")
else:
    print("ERROR: Marker not found in file")
    sys.exit(1)
