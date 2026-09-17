type SectionHeadingProps = {
  number: string;
  label: string;
};

function SectionHeading({ number, label }: SectionHeadingProps) {
  return (
    <div className="section-heading flex items-start gap-3">
      <span className="font-mono text-[10px] text-lime-300">{number}</span>

      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
        {label}
      </span>
    </div>
  );
}

export default SectionHeading;
