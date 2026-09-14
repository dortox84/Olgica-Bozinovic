import React, { ReactNode, ElementType } from "react";
import { useInView } from "./useInView";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in ms — pass i * 100 when mapping over a list. */
  delay?: number;
  /** How far (px) the content slides up from as it reveals. */
  y?: number;
  className?: string;
  as?: ElementType;
  key?: React.Key;
};

/**
 * Wraps any block (a heading, paragraph, card, list item…) and fades + slides
 * it in the first time it scrolls into view.
 *
 * Usage:
 *   <Reveal><h2>Знакомо ли вам это?</h2></Reveal>
 *   <Reveal delay={150}><p>Узнаете ли вы себя...</p></Reveal>
 *
 * Staggering a list:
 *   {painPoints.map((point, i) => (
 *     <Reveal key={point.id} delay={i * 100}>
 *       <PainPointItem text={point.text} />
 *     </Reveal>
 *   ))}
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Component>
  );
}

