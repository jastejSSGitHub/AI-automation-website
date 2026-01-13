import re

# Read the file
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# New 2-column grid HTML
new_grid = '''        <!-- Case Studies Grid - 2 Per Row -->
        <div class="grid md:grid-cols-2 gap-6 md:gap-8">
          
          <!-- Case Study 1: TD Bank -->
          <div class="group cursor-pointer" onclick="window.location.href='case-study-td-bank.html'">
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img src="./Images/CaseStudies/td_bank_case_study_1768257254398.png" alt="TD Bank Mobile Banking App"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <span class="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                  MVP Development
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-sf mb-3 leading-tight">
                  TD Bank — Mobile Banking Redesign
                </h3>
                <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4 flex-1">
                  Enterprise mobile app redesign for millions of users. 21% increase in satisfaction, 43% reduction in support tickets.
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Case Study
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study 2: AI Automation -->
          <div class="group cursor-pointer" onclick="window.location.href='case-study-ai-automation.html'">
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img src="./Images/CaseStudies/ai_automation_case_study_1768257269326.png" alt="AI Automation Dashboard"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <span class="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                  AI Automation
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-sf mb-3 leading-tight">
                  Revive Air — Automated Lead Generation
                </h3>
                <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4 flex-1">
                  200+ qualified leads daily, 95% faster response time, 18 hours saved weekly with AI automation workflows.
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Case Study
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study 3: TurboContent -->
          <div class="group cursor-pointer" onclick="window.location.href='case-study-turbocontent.html'">
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img src="./Images/CaseStudies/turbocontent_case_study_1768257286200.png" alt="TurboContent AI Platform"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <span class="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                  SaaS MVP
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-sf mb-3 leading-tight">
                  TurboContent AI — Content Platform
                </h3>
                <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4 flex-1">
                  Complete AI SaaS platform with 7 tools in 6 weeks. 85% cheaper than traditional agencies.
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Case Study
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study 4: Client Onboarding -->
          <div class="group cursor-pointer" onclick="window.location.href='case-study-client-onboarding.html'">
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img src="./Images/CaseStudies/client_onboarding_case_study_1768257339984.png" alt="Client Onboarding Dashboard"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <span class="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                  AI Automation
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-sf mb-3 leading-tight">
                  GrowthTech — Client Onboarding
                </h3>
                <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4 flex-1">
                  Automated onboarding from 5-7 days to 4 hours. Scaled from 12 to 35 clients without hiring.
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Case Study
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study 5: MVP Development -->
          <div class="group cursor-pointer" onclick="window.location.href='case-study-mvp.html'">
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img src="./Images/CaseStudies/mvp_case_study_1768257308084.png" alt="MVP Development Showcase"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <span class="inline-block px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                  Rapid MVP
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-sf mb-3 leading-tight">
                  Startup MVP — Launch in 3 Weeks
                </h3>
                <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4 flex-1">
                  Production-ready MVP enabling seed funding and 1,000 users. Complete design system in 3 weeks.
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Case Study
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study 6: Compliance -->
          <div class="group cursor-pointer" onclick="window.location.href='case-study-compliance.html'">
            <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
              <div class="relative overflow-hidden aspect-[16/10]">
                <img src="./Images/CaseStudies/compliance_case_study_1768257324618.png" alt="Compliance Dashboard"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
              </div>
              <div class="p-6 flex-1 flex flex-col">
                <span class="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-xs font-bold uppercase tracking-wide mb-3 w-fit">
                  AI Automation
                </span>
                <h3 class="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-sf mb-3 leading-tight">
                  FinServe — Compliance Processing
                </h3>
                <p class="text-sm md:text-base text-slate-600 leading-relaxed mb-4 flex-1">
                  1,200+ documents monthly, 95% faster processing, 99.7% accuracy. 3x client growth enabled.
                </p>
                <div class="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Case Study
                  <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- View All Button -->
        <div class="flex justify-center mt-12">
          <a href="case-studies.html"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>View All Case Studies</span>
            <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
          </a>
        </div>'''

# Find and replace the old grid section
# Pattern: from "<!-- Case Studies Grid -->" to "<!-- View More Button -->" and its closing div
pattern = r'        <!-- Case Studies Grid -->.*?        <!-- View More Button -->.*?        </div>'

content = re.sub(pattern, new_grid, content, flags=re.DOTALL)

# Write back
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✅ Successfully updated case studies grid to 2-column layout!")
