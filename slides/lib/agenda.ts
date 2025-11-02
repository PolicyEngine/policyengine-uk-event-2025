export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  speakerIds?: string[]; // IDs from the speakers registry
  slideshowId?: string; // Link to slideshow if exists
  type: 'talk' | 'demo' | 'panel' | 'break' | 'networking';
  hasQA?: boolean; // Whether to include Q&A slide at end
}

export const agenda: AgendaItem[] = [
  { time: '12:00 PM - 12:30 PM', title: 'Registration, lunch and networking', slideshowId: 'lunch', type: 'networking' },
  { time: '12:30 PM - 12:35 PM', title: 'Welcome and vision', speaker: 'Max Ghenis, Founder & CEO, PolicyEngine', speakerIds: ['max-ghenis'], slideshowId: 'welcome-vision', type: 'talk' },
  { time: '12:35 PM - 12:40 PM', title: 'The Nuffield Foundation\'s vision for evidence-based policy', speaker: 'Anvar Sarygulov, Nuffield Foundation', speakerIds: ['anvar-sarygulov'], slideshowId: 'nuffield-vision', type: 'talk' },
  { time: '12:40 PM - 12:50 PM', title: 'Technology and AI for UK policymaking: The PolicyEngine approach', speaker: 'Max Ghenis and Nikhil Woodruff, PolicyEngine', speakerIds: ['max-ghenis', 'nikhil-woodruff'], slideshowId: 'tech-ai-2025', type: 'talk' },
  { time: '12:50 PM - 1:00 PM', title: 'Scope of the model: Policies, households, and dynamics', speaker: 'Vahid Ahmadi, Research Associate, PolicyEngine', speakerIds: ['vahid-ahmadi'], slideshowId: 'model-scope', type: 'talk' },
  { time: '1:00 PM - 1:20 PM', title: 'UX research and design of PolicyEngine v2 platform', speaker: 'Biniam Gebre and MaSara Myers, Citizen Codex', speakerIds: ['biniam-gebre', 'masara-myers'], slideshowId: 'ux-design', type: 'talk', hasQA: true },
  { time: '1:20 PM - 1:40 PM', title: 'Live demo: PolicyEngine v2 platform', speaker: 'Anthony Volk, Software Engineer, PolicyEngine', speakerIds: ['anthony-volk'], slideshowId: 'platform-demo', type: 'demo', hasQA: true },
  { time: '1:40 PM - 2:00 PM', title: 'Localising policy impact: Parliamentary constituencies and local authorities', speaker: 'Nikhil Woodruff and Ben Ogorek, PolicyEngine', speakerIds: ['nikhil-woodruff', 'ben-ogorek'], slideshowId: 'local-impact', type: 'talk', hasQA: true },
  { time: '2:00 PM - 2:20 PM', title: 'Tea break and networking', slideshowId: 'tea', type: 'break' },
  { time: '2:20 PM - 2:40 PM', title: "NIESR's use of PolicyEngine in its living standards review", speaker: 'Max Mosley, Senior Economist, New Economics Foundation', speakerIds: ['max-mosley'], slideshowId: 'niesr-review', type: 'talk' },
  { time: '2:40 PM - 3:00 PM', title: 'Microsimulation of a carbon dividend', speaker: 'Malcolm Torry, Institute for Social and Economic Research', speakerIds: ['malcolm-torry'], slideshowId: 'carbon-dividend', type: 'talk' },
  { time: '3:00 PM - 3:20 PM', title: 'VAT analysis with synthetic firm microdata', speaker: 'Vahid Ahmadi', speakerIds: ['vahid-ahmadi'], slideshowId: 'vat-analysis', type: 'talk' },
  { time: '3:20 PM - 3:40 PM', title: 'PolicyEngine US: Modelling federal, state, and local policies', speaker: 'Pavel Makarchuk, Daphne Hansell, and David Trimmer, PolicyEngine', speakerIds: ['pavel-makarchuk', 'daphne-hansell', 'david-trimmer'], slideshowId: 'policyengine-us', type: 'talk', hasQA: true },
  { time: '3:40 PM - 4:25 PM', title: 'Panel discussion: The future of evidence-based policymaking', speaker: 'Max Ghenis; Arun Advani; Anvar Sarygulov', speakerIds: ['max-ghenis', 'arun-advani', 'anvar-sarygulov'], type: 'panel' },
  { time: '4:25 PM - 5:00 PM', title: 'Looking ahead: AI-powered policy analysis', speaker: 'Max Ghenis, Nikhil Woodruff, Vahid Ahmadi', speakerIds: ['max-ghenis', 'nikhil-woodruff', 'vahid-ahmadi'], slideshowId: 'ai-future', type: 'talk', hasQA: true },
  { time: '5:00 PM - 6:00 PM', title: 'Reception and networking', type: 'networking' },
];
