import { useInView } from "./useInView";

type RevealTextProps = {
  /** Split into lines yourself for full control, e.g. text.split("\n") */
  lines: string[];
  delay?: number;
  className?: string;
};

/**
 * "Curtain wipe" reveal for headlines — each line slides up from behind a
 * mask, like it's being unveiled rather than just fading in. More dramatic
 * than <Reveal>, best used once per section (hero H1, big section headings)
 * rather than on every paragraph.
 *
 * Usage:
 *   <RevealText className="text-5xl font-bold" lines={["Встань на путь", "здоровья"]} />
 */
export function RevealText({ lines, delay = 0, className = "" }: RevealTextProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();

  return (
    <span ref={ref} style={{ display: "block" }}>
      {lines.map((line, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden" }}
        >
          <span
            className={className}
            style={{
              display: "inline-block",
              transform: inView ? "translateY(0%)" : "translateY(115%)",
              opacity: inView ? 1 : 0,
              transition: `transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay + i * 90}ms, opacity 0.4s ease ${delay + i * 90}ms`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}
