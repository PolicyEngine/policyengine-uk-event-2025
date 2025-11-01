export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  slideshowId?: string; // Link to slideshow if exists
  type: 'talk' | 'demo' | 'panel' | 'break' | 'networking';
}

export const agenda: AgendaItem[] = [
  { time: '12:00 PM - 12:30 PM', title: 'Registration, lunch & networking', type: 'networking' },
  { time: '12:30 PM - 12:40 PM', title: 'Welcome and vision', speaker: 'Max Ghenis, Founder & CEO, PolicyEngine', slideshowId: 'event-2025', type: 'talk' },
  { time: '12:40 PM - 12:50 PM', title: 'Technology and AI for UK policymaking: The PolicyEngine approach', speaker: 'Nikhil Woodruff, Co-founder & CTO, PolicyEngine', slideshowId: 'tech-ai-2025', type: 'talk' },
  { time: '12:50 PM - 1:00 PM', title: 'Scope of the model: Rules, data, and dynamics', speaker: 'Vahid Ahmadi, Research Associate, PolicyEngine', slideshowId: 'model-scope', type: 'talk' },
  { time: '1:00 PM - 1:20 PM', title: 'Live demo: PolicyEngine v2 platform', speaker: 'Anthony Volk, Software Engineer, PolicyEngine', slideshowId: 'platform-demo', type: 'demo' },
  { time: '1:20 PM - 1:40 PM', title: 'UX research and design of PolicyEngine v2 platform', speaker: 'Biniam Gebre & MaSara Myers, Citizen Codex', slideshowId: 'ux-design', type: 'talk' },
  { time: '1:40 PM - 2:00 PM', title: 'Localising policy impact: Parliamentary constituencies & local authorities', speaker: 'Nikhil Woodruff', slideshowId: 'local-impact', type: 'talk' },
  { time: '2:00 PM - 2:20 PM', title: 'Tea break & networking', type: 'break' },
  { time: '2:20 PM - 2:40 PM', title: "NIESR's use of PolicyEngine in its living standards review", speaker: 'Max Mosley, Senior Economist, New Economics Foundation', slideshowId: 'niesr-review', type: 'talk' },
  { time: '2:40 PM - 3:00 PM', title: 'Microsimulation of a carbon dividend', speaker: 'Malcolm Torry, Institute for Social and Economic Research', slideshowId: 'carbon-dividend', type: 'talk' },
  { time: '3:00 PM - 3:20 PM', title: 'VAT analysis with synthetic firm microdata', speaker: 'Vahid Ahmadi', slideshowId: 'vat-analysis', type: 'talk' },
  { time: '3:20 PM - 3:40 PM', title: 'PolicyEngine US: Modelling federal, state, and local policies', speaker: 'Max Ghenis', slideshowId: 'policyengine-us', type: 'talk' },
  { time: '3:40 PM - 4:25 PM', title: 'Panel discussion: The future of evidence-based policymaking', speaker: 'Max Ghenis; Arun Advani; Anvar Sarygulov', slideshowId: 'panel-discussion', type: 'panel' },
  { time: '4:25 PM - 5:00 PM', title: 'Looking ahead: AI-powered policy analysis', speaker: 'Max Ghenis, Nikhil Woodruff, Vahid Ahmadi', slideshowId: 'ai-future', type: 'talk' },
  { time: '5:00 PM - 6:00 PM', title: 'Reception & networking', type: 'networking' },
];
