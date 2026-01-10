export interface Challenge {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  image: string;
  isDark?: boolean;
}

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "Development Takes Forever",
    subtitle: "Months of building, and still no momentum.",
    description: [
      "Traditional agencies quote $50,000-$100,000 and take 6+ months to build your MVP. By the time they deliver, your competitors have already launched.",
      "Weeks of discovery calls. Months waiting for designs. Meanwhile, you're burning runway."
    ],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1c830a9-6b54-411e-90d6-1f3e1eb67eaa_1600w.png"
  },
  {
    id: 2,
    title: "Manual Work Drains Team",
    subtitle: "Your team spends time on work that shouldn't exist.",
    description: [
      "Your team spends 20+ hours every week on repetitive tasks. That's $4,000-$8,000 per month in wasted labor.",
      "Manually copying leads into your CRM. Answering the same questions repeatedly. Automation frees humans to do human work."
    ],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/468521cb-bdaf-45e5-a32c-1892c6dde73b_1600w.png"
  },
  {
    id: 3,
    title: "Generic Tools Don't Fit",
    subtitle: "Off-the-shelf tools never quite match how you work.",
    description: [
      "Off-the-shelf platforms are limited. You need custom solutions that actually match your unique business processes.",
      "You've tried the popular all-in-one platforms. Within weeks you hit limitations. \"That workflow isn't supported.\""
    ],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd4f3d66-119e-4390-b012-07c1df683c78_1600w.png",
    isDark: true
  },
  {
    id: 4,
    title: "Technical Debt Kills Momentum",
    subtitle: "Every new feature feels harder than the last.",
    description: [
      "Quick fixes and rushed builds pile up, turning your system into a house of cards. Every new feature feels harder.",
      "That \"temporary workaround\" from 6 months ago is still there. Simple changes require touching 12 files because nothing was built to scale."
    ],
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d038e0eb-c854-409c-8229-64c1a950b129_1600w.png"
  }
];
