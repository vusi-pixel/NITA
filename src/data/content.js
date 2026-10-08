export const slides = [
  {
    eyebrow: "NITA SMART WORKPLACE",
    title: "Your workday, in one place.",
    description: "Find trusted services, follow requests and get to the resources you use every day.",
    action: "Explore modules",
    href: "#modules",
    theme: "green",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88",
  },
  {
    eyebrow: "WORK THAT MOVES",
    title: "Know what needs your attention.",
    description: "A clear view of requests and approvals helps you take the next step with confidence.",
    action: "View workflow",
    href: "#workflow",
    theme: "light",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=88",
  },
  {
    eyebrow: "CONNECTED SERVICES",
    title: "Get where you need to go.",
    description: "Reach useful workplace links, updates and upcoming events from a simple home.",
    action: "See quick links",
    href: "#news-links",
    theme: "deep",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=88",
  },
];

export const uiText = {
  header: {
    logoAlt: "NITA — National Information Technology Agency, Ghana",
    fallbackInitial: "N",
    workplaceName: "Smart Workplace",
    menu: "Menu",
    closeMenu: "Close",
    openMenu: "Open menu",
    closeMenuLabel: "Close menu",
    nav: [
      { label: "Home", href: "#home" },
      { label: "Modules", href: "#modules" },
      { label: "Workflow", href: "#workflow" },
      { label: "News", href: "#news-links" },
      { label: "Events", href: "#info-cards" },
    ],
  },
  modules: {
    kicker: "DIRECT ACCESS",
    title: "Workplace modules",
    description: "Choose a service to get started.",
    noticeTitle: "Smart Workplace preview",
    unavailable: "is a sample module link. Connect it to NITA’s approved service when available.",
  },
  workflow: {
    kicker: "A CLEAR VIEW OF YOUR WORK",
    title: "Workflow dashboard",
    description: "Track the actions that need your attention.",
    sampleDetails: "is sample workflow information for this concept.",
    sampleFigures: "Sample dashboard figures for demonstration.",
  },
  news: {
    kicker: "LATEST UPDATES",
    title: "News",
    quickLinksKicker: "USEFUL DESTINATIONS",
    quickLinksTitle: "Quick Links",
    sampleDetails: "is sample content. Connect this item to its approved NITA destination.",
  },
  info: {
    eventsKicker: "PLAN AHEAD",
    eventsTitle: "Events & Calendar",
    calendarLink: "View full calendar",
    calendarNotice: "The full NITA staff calendar can be connected here.",
    weatherKicker: "LOCAL FORECAST",
    weatherTitle: "Weather",
    weatherLocation: "Accra",
    weatherLoading: "Loading current conditions…",
    weatherTryAgain: "Try again",
    weatherSource: "Current conditions · Open-Meteo",
    weatherUnavailable: "Weather data is currently unavailable.",
    weatherUnreadable: "Weather data could not be read.",
    weatherFailed: "Could not load weather. Please try again.",
    documentsKicker: "RECENTLY UPDATED",
    documentsTitle: "Recent Documents",
    sampleDetails: "is sample content. Connect it to NITA’s approved source for live details.",
  },
  footer: {
    copyright: "National Information Technology Agency, Ghana",
    product: "Smart Workplace",
  },
  dialog: {
    title: "Smart Workplace preview",
    close: "Close message",
    confirm: "Got it",
  },
};

export const modules = [
  { name: "Leave", icon: "calendar" },
  { name: "Procurement", icon: "cart" },
  { name: "HR Services", icon: "people" },
  { name: "Finance", icon: "wallet" },
  { name: "IT Support", icon: "support" },
  { name: "Travel", icon: "plane" },
  { name: "Documents", icon: "document" },
  { name: "Reports", icon: "chart" },
];

export const workflowStats = [
  { label: "Pending Approvals", value: 3, note: "Awaiting your review", tone: "soft" },
  { label: "My Requests", value: 5, note: "Currently in progress", tone: "green" },
  { label: "Completed", value: 12, note: "Finished this month", tone: "soft" },
  { label: "Overdue", value: 1, note: "Needs attention", tone: "green" },
];

export const news = [
  { tag: "ANNOUNCEMENT", headline: "Welcome to your Smart Workplace", date: "8 Oct 2026" },
  { tag: "PEOPLE & CULTURE", headline: "Small ideas that make work better", date: "6 Oct 2026" },
  { tag: "LEARNING", headline: "Explore this month's learning sessions", date: "2 Oct 2026" },
];

export const quickLinks = [
  { label: "Staff Handbook", description: "Policies and workplace guidance", icon: "document" },
  { label: "IT Help Desk", description: "Get technical support", icon: "support" },
  { label: "Staff Directory", description: "Find a colleague or team", icon: "people" },
  { label: "Forms & Requests", description: "Start a common workplace request", icon: "form" },
];

export const events = [
  { day: "10", month: "OCT", title: "Digital skills drop-in", time: "09:30 · Online" },
  { day: "14", month: "OCT", title: "All-staff town hall", time: "11:00 · Main hall" },
  { day: "20", month: "OCT", title: "Service improvement workshop", time: "14:00 · Conference room" },
];

export const documents = [
  { name: "Staff Handbook", date: "Updated 7 Oct" },
  { name: "ICT Security Guidelines", date: "Updated 5 Oct" },
  { name: "Leave and Absence Policy", date: "Updated 3 Oct" },
  { name: "Procurement Procedures", date: "Updated 1 Oct" },
];
