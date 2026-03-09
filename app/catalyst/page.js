// app/catalyst/page.js
// Place this file at: app/catalyst/page.js in your Next.js project
// Also move catalyst.html into: public/catalyst.html

export const metadata = {
  title: "Catalyst — by The Finance Lab",
  description:
    "A financial literacy companion app built for students. Concepts, tools, and exercises that meet students where they are.",
};

export default function CatalystPage() {
  return (
    <iframe
      src="/catalyst.html"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        zIndex: 0,
      }}
      title="Catalyst by The Finance Lab"
    />
  );
}
