import { ElementType } from "react";

type HeroSectionTitleProps = {
  as?: ElementType;
  className?: string;
  prefix: string;
  highlight: string;
  suffix?: string;
  highlightClassName?: string;
};

export default function HeroSectionTitle({
  as: Tag = "h2",
  className = "",
  prefix,
  highlight,
  suffix = "",
  highlightClassName = "italic text-[#8C1C3C]",
}: HeroSectionTitleProps) {
  return (
    <Tag className={className}>
      {prefix} <span className={highlightClassName}>{highlight}</span>
      {suffix ? ` ${suffix}` : ""}
    </Tag>
  );
}

