export default function TOC({ toc }) {
  if (!toc || toc.length === 0) return null;
  return (
    <div className="bg-surface border border-gray-200 rounded-md p-5 mb-6">
      <h3 className="font-display text-sm uppercase tracking-wide mb-3">Table of Contents</h3>
      <ul className="space-y-1.5 text-sm">
        {toc.map((t) => (
          <li key={t.id} style={{ marginLeft: t.level === 3 ? "16px" : "0" }}>
            <a href={`#${t.id}`} className="text-crimson hover:underline">
              {t.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
