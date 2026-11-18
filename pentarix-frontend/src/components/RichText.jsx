/**
 * Renders a plain string with lightweight markup so copy can live in data files:
 *   "\n"      -> line break
 *   {words}   -> highlighted in brand orange
 *
 * <RichText text={"Technology that moves\n{business forward.}"} />
 */
export default function RichText({ text = '' }) {
  return text.split('\n').map((line, i, lines) => (
    <span key={i}>
      {line.split(/(\{[^}]+\})/).map((part, j) =>
        part.startsWith('{') ? (
          <span key={j} className="text-[#ff6a00]">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        )
      )}
      {i < lines.length - 1 && <br />}
    </span>
  ))
}
