const BASE = "https://www.thefinancelab.co";

export default function sitemap() {
  return [
    { path: "", priority: 1.0 },
    { path: "/college-project", priority: 0.9 },
    { path: "/guide", priority: 0.9 },
    { path: "/family", priority: 0.7 },
    { path: "/life-stage-experiment", priority: 0.6 },
  ].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
